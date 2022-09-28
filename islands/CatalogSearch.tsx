import { useEffect, useMemo, useState } from "preact/hooks";
// @deno-types="https://deno.land/x/fuse@v6.4.1/dist/fuse.d.ts"
import Fuse from "https://deno.land/x/fuse@v6.4.1/dist/fuse.esm.min.js";

type SearchDefinition = {
  image?: string;
  preview?: string;
  price?: number;
  url: string;
  name: string;
  annotation: string;
  description: string;
  brand: string;
  featured: boolean | null;
  features: {
    feature_id: string;
    name: string;
    value: string;
    product_id: string;
  }[];
  category: {
    id: string;
    name: string;
    url: string;
  };
};

const useFuse = <T,>({
  collection,
  searchTerm,
  options,
}: {
  readonly collection: readonly T[];
  readonly searchTerm: string;
  readonly options: Fuse.IFuseOptions<T>;
}) => {
  const fuse = useMemo(() => {
    return new Fuse(collection, options);
  }, [collection, options]);

  const results = useMemo(() => {
    return fuse.search(searchTerm);
  }, [fuse, searchTerm]);

  return results;
};

const useData = async () => {
  const productsUrl = new URL("https://tehmet.su/ajax/products.php");
  const productsResponse = await fetch(productsUrl.toString());
  const productsJson = await productsResponse.json();
  const products = Object.values(productsJson.data ?? {}) as SearchDefinition[];
  return products;
};

export default function CatalogSearch() {
  const [collection, setCollection] = useState<SearchDefinition[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredList = useFuse<SearchDefinition>({
    collection,
    searchTerm,
    options: {
      includeMatches: true,
      findAllMatches: true,
      threshold: 0.1,
      ignoreLocation: true,
      keys: ["name"],
    },
  }).map<SearchDefinition>((result) => result.item);

  const filteredListTop = filteredList.slice(0, 20);

  useEffect(() => {
    useData().then((data) => {
      setCollection(data);
    });
    return;
  }, [useData]);

  return (
    <div class="grid items-center w-full">
      {/* <input
        class="text-base sm:text-lg md:text-xl py-1 md:py-3 pl-4 md:pl-8 pr-12 md:pr-16 border-blue1 focus-visible:outline-blue border-2 rounded-2xl col-span-full row-span-full leading-none font-light"
        type="text"
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          setActive(false);
        }}
      /> */}
      <input
        type="text"
        autocomplete="off"
        placeholder="Поиск по каталогу"
        class="text-base sm:text-lg md:text-xl py-1 md:py-3 pl-4 md:pl-8 pr-12 md:pr-16 border-blue1 focus-visible:outline-blue border-2 rounded-2xl col-span-full row-span-full leading-none font-light"
        onInput={(event) =>
          setSearchTerm((event.target as HTMLInputElement).value)
        }
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
      <button
        aria-label="Найти"
        class="grid place-content-center col-span-full row-span-full justify-self-end mr-4 md:mr-6 text-dark-blue hover:text-blue"
      >
        <svg class="w-6 sm:w-8 lg:w-10" viewBox="0 0 34 38" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.379 24.185c-3.755 3.194-9.25 2.942-12.731-.754-3.734-3.967-3.734-10.398 0-14.364 3.734-3.967 9.789-3.967 13.523 0 3.48 3.696 3.718 9.534.71 13.522l7.304 7.758c.415.44.415 1.155 0 1.595a1.02 1.02 0 0 1-1.502 0l-7.304-7.757ZM9.15 21.835c-2.905-3.085-2.905-8.087 0-11.172 2.904-3.085 7.613-3.085 10.518 0 2.902 3.082 2.904 8.08.006 11.165a.4.4 0 0 0-.013.013c-2.905 3.079-7.609 3.076-10.511-.006Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {focused && filteredListTop.length > 0 && (
        <div class="relative col-span-full row-span-full self-end">
          <div class="absolute mt-1 w-full border bg-white shadow-xl rounded max-h-[400px] overflow-auto">
            <div class="p-3">
              <div class="divide-y">
                {filteredListTop.map((result, index) => (
                  <a
                    key={index}
                    class="flex items-center gap-2 p-2 w-full rounded hover:bg-gray-100"
                    href={"/products/" + result.url}
                  >
                    <img
                      class="w-10"
                      src={result.preview}
                      alt={result.name}
                      loading="lazy"
                    />
                    <span>{result.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
