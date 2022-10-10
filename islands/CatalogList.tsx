import { useState, useEffect } from "preact/hooks";
import { icons } from "../components/icons.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { CatalogItem } from "../components/catalog-item.tsx";
import { Spin } from "../components/spin.tsx";
import { Brand } from "../data/brands.ts";
import { fetchProductsPage } from "../data/products-page.ts";
import { ProductsPageResponse } from "../routes/api/products-page.ts";
import { Pagination } from "../components/pagination.tsx";

const getSessionLayout = () => {
  if (!IS_BROWSER) return "grid";

  const productsLayout = sessionStorage.getItem("products-layout") as
    | "grid"
    | "list"
    | undefined;
  return productsLayout ?? "grid";
};
const setSessionLayout = (layout: "grid" | "list") => {
  sessionStorage.setItem("products-layout", layout);
};
const getSearchParams = () => {
  if (!IS_BROWSER)
    return {
      page: 1,
    };

  const url = new URL(document.location.href);
  return {
    sort: (url.searchParams.get("sort") ?? undefined) as "price" | undefined,
    brand: url.searchParams.get("brand") ?? undefined,
    order: (url.searchParams.get("order") ?? undefined) as
      | "desc"
      | "asc"
      | undefined,
    page: Number(url.searchParams.get("page") ?? "1"),
  };
};
const link = (values: [string, string | null | undefined][], hash: string) => {
  if (!IS_BROWSER) return "";

  const url = new URL(document.location.href);
  for (const [key, value] of values) {
    if (value === undefined || value === null) {
      if (url.searchParams.has(key)) url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
  }
  return `${url.pathname}${url.search}${hash ? "#" + hash : ""}`;
};

const SortLink = ({
  text,
  param,
  params,
}: {
  text: string;
  param: "price";
  params: ReturnType<typeof getSearchParams>;
}) => {
  return (
    <div class="flex gap-2 md:gap-4 items-center">
      <a
        href={link(
          [
            ["sort", param],
            ["order", null],
          ],
          "catalog"
        )}
      >
        {text}
      </a>
      {params.sort === param && (
        <>
          {params.order !== "desc" && (
            <a
              href={link([["order", "desc"]], "catalog")}
              aria-label="сортировать по возрастанию"
            >
              <icons.OrderAsc />
            </a>
          )}
          {params.order === "desc" && (
            <a
              href={link([["order", "asc"]], "catalog")}
              aria-label="сортировать по убыванию"
            >
              <icons.OrderDesc />
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default function CatalogList({
  title,
  brandId,
  categories,
  brands,
}: {
  title: string;
  brandId?: string;
  categories?: string[];
  brands?: Brand[];
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [layout, setLayout] = useState<"grid" | "list">(getSessionLayout());
  const [{ products, pages }, setData] = useState<ProductsPageResponse>({
    products: [],
    pages: 1,
  });

  const { sort, order, page, ...params } = getSearchParams();

  useEffect(() => {
    fetchProductsPage({
      brand: brandId,
      categories,
      sort,
      order,
      page,
    }).then((response) => {
      setData(response);
      setIsLoading(false);
    });
    // fetchProducts({ brand: brandId, categories }).then((products) => {
    //   let items = products;
    //   if (params.sort) {
    //     items = items.sort((a, b) =>
    //       params.order === "desc"
    //         ? Number(b[params.sort!] ?? 0) - Number(a[params.sort!] ?? 0)
    //         : Number(a[params.sort!] ?? 0) - Number(b[params.sort!] ?? 0)
    //     );
    //   }
    //   setData(items);
    //   setIsLoading(false);
    // });
  }, [sort, order, page]);

  return (
    <>
      <div
        id="catalog"
        class="shadow-md! bg-light-grey pl-4 md:pl-10 lg:pl-16 pb-8 pt-4 flex flex-wrap justify-end items-end gap-2 md:gap-5 scroll-m-[56px] lg:scroll-m-[64px]"
      >
        <div class="pr-8 md:pr-16">
          <h1 class="gradient-text text-xl sm:text-2xl lg:text-4xl">{title}</h1>
          <span class="gradient-text text-base sm:text-lg">
            {`(${products?.length ?? 0} товаров)`}
          </span>
        </div>
        <div class="border-blue border-b-[1px] pb-2 pr-8 md:pr-16 text-blue1 text-base md:text-lg w-full grid md:flex gap-y-2 justify-between">
          <div class="grid md:flex gap-2 md:gap-8 md:items-center">
            <span>Сортировать по:</span>
            <SortLink
              text="Цене"
              param="price"
              params={{ ...params, sort, order, page }}
            />
          </div>
          <div class="gap-1 md:gap-2 items-center hidden sm:flex">
            <span>Отображение:</span>
            <button
              onClick={() => {
                setLayout("grid");
                setSessionLayout("grid");
              }}
            >
              <icons.Layout />
            </button>
            <button
              onClick={() => {
                setLayout("list");
                setSessionLayout("list");
              }}
            >
              <icons.Rows />
            </button>
          </div>
        </div>
        {!!brands?.length && (
          <div class="mt-3 w-full grid gap-2 md:gap-5 justify-start pr-10">
            <span class="text-blue1 text-base md:text-lg">Производители</span>
            <select
              class="sm:hidden form-select max-w-xs appearance-none block px-3 py-1.5 text-base font-normal text-dark-blue bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-blue1 focus:bg-white focus:border-blue1 focus:outline-none"
              aria-label="Default select example"
              onChange={(e) => {
                document
                  .querySelector<HTMLLinkElement>(
                    `[data-brand-id="${e.currentTarget.value}"]`
                  )
                  ?.click();
              }}
            >
              <option value="">Все производители</option>
              {brands.map((brand) => (
                <option
                  value={brand.id}
                  {...(params.brand === brand.id && { selected: true })}
                >
                  {brand.name}
                </option>
              ))}
            </select>
            <div class="hidden sm:flex flex-wrap gap-x-5 gap-y-2 md:gap-y-4">
              {brands.map((brand) => (
                <a
                  href={link(
                    [["brand", params.brand === brand.id ? null : brand.id]],
                    "catalog"
                  )}
                  data-brand-id={brand.id}
                  class="flex gap-4 items-center"
                >
                  <label class="flex gap-2">
                    <div
                      class={
                        params.brand === brand.id
                          ? "form-check-input shrink-0 checked"
                          : "form-check-input shrink-0"
                      }
                    />
                    <span
                      class={`cursor-pointer select-none ${
                        params.brand === brand.id && "text-blue"
                      }`}
                    >
                      {brand.name}
                    </span>
                  </label>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        class="grid gap-5 pr-4 md:pr-10 pl-4 md:pl-16 py-4 md:py-8 bg-light-blue"
        style={{
          gridTemplateColumns:
            layout === "grid"
              ? "repeat(auto-fill, minmax(282px, 1fr))"
              : undefined,
        }}
      >
        {isLoading && <Spin />}
        {products.length === 0 && !isLoading && (
          <p class="text-xs md:text-xl uppercase font-light">Нет в наличии</p>
        )}
        {products.map((item) => (
          <CatalogItem item={item} layout={layout} />
        ))}
      </div>
      {IS_BROWSER && (
        <div class="bg-light-blue pb-8 pr-4 md:pr-10 pl-4 md:pl-16 py-4 md:py-8">
          {!isLoading && <Pagination
            page={page}
            pages={pages}
            link={(p) => `${document.location.pathname}?page=${p}#catalog`}
          />}
        </div>
      )}
    </>
  );
}
