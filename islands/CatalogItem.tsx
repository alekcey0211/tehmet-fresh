import { Image } from "../components/image.tsx";
import { icons } from "../components/icons.tsx";
import { useState } from "preact/hooks";

type Category = {
  name: string;
  url: string;
  children: Category[];
};

export default function CatalogItem({ name, children, url }: Category) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="border-[1px] border-[#DADADA] bg-white grid grid-rows-[200px_auto] md:grid-rows-[306px_auto]">
      <div class="shadow-md!">
        <Image
          {...{
            src: `/img/catalogs/${url}.jpg`,
            alt: name,
            imgClassName: "object-contain object-left-top w-full h-full",
          }}
        />
      </div>
      <div class="py-5 pl-4">
        <a
          href={`/catalog/${url}`}
          class="block gradient-text font-light text-2xl mb-4 pr-4"
        >
          {name}
        </a>
        {children.length > 0 && (
          <ul class="border-t-[1px] border-blue">
            {children.slice(0, 3).map((item) => (
              <li class="grid items-center text-xl text-grey hover:text-dark-blue border-b-[1px] border-blue">
                <a
                  href={`/catalog/${item.url}`}
                  class="grid items-center h-full pr-4 py-1"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        {isOpen && children.length > 3 && (
          <ul class="border-t-[1px] border-blue">
            {children.slice(3).map((item) => (
              <li class="grid items-center text-xl text-grey hover:text-dark-blue border-b-[1px] border-blue">
                <a
                  href={`/catalog/${item.url}`}
                  class="grid items-center h-full pr-4 py-1"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        {children.length > 3 && (
          <button
            onClick={() => {
              setIsOpen((v) => !v);
            }}
            class="flex gap-3 text-blue1 text-sm items-center mt-2"
            type="button"
          >
            {isOpen ? (
              <icons.ChevronUp width={16} height={16} class="shrink-0" />
            ) : (
              <icons.ChevronDown width={16} height={16} class="shrink-0" />
            )}
            <span>+{children.length - 3} категории</span>
          </button>
        )}
        {children.length === 0 && (
          <span class="block text-sm text-grey">+0 категории</span>
        )}
      </div>
    </div>
  );
}
