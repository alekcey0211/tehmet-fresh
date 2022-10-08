import { icons } from "../components/icons.tsx";
import { Dropdown as DropdownComponent } from "../components/dropdown.tsx";
import { Category, fetchCategories } from "../data/categories.ts";
import { useState, useEffect } from "preact/hooks";

export default function CategoriesNavDropdown({
  pathname,
}: {
  pathname: string;
}) {
  // const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((categories) => {
      const navCategories = categories.filter(
        ({ parent_id, url }) => parent_id === "0" && Boolean(url)
      );
      setData(navCategories);
      // setIsLoading(false);
    });
  }, []);

  return (
    <DropdownComponent
      containerTag="li"
      containerClassName="text-3xl text-dark-blue grid grid-cols-1 grid-rows-1 place-content-center h-[70px] relative whitespace-nowrap [ after:absolute after:right-0 after:top-2 after:bottom-2 after:border-r-2 after:border-[#C4C4C4] ]"
      trigger={
        <div class="flex w-full h-full bg-light-blue items-center justify-center">
          <div
            class="w-full flex gap-4 items-center justify-between"
            style="max-width: 180px"
          >
            <icons.MenuHamburger class="shrink-0" />
            <a class="nav-item-span" href="/catalog" style="padding: 1rem">
              Каталог
            </a>
          </div>
        </div>
      }
      triggerClassName="grid place-items-center nav-item-button lowercase after::absolute after::right-0 after::top-2 after::bottom-2 after::border-r-2 after::border-[#C4C4C4]"
      panel={
        <ul class="pl-12 py-4 bg-white max-w-[440px] overflow-auto max-h-[calc(100vh-70px)]">
          {data.map(({ url, name, children }, index, { length }) => {
            const link = `/catalog/${url}`;
            const isActive =
              link === pathname ||
              children.some((child) => `/catalog/${child.url}` === pathname);
            return (
              <li class="grid items-center text-xl text-grey hover:text-dark-blue">
                <div class="grid items-center grid-cols-[1fr_auto] pr-1">
                  <a
                    href={link}
                    class={`grid items-center h-full pr-4 py-3 nav-item-link ${
                      isActive && "gradient-text"
                    }`}
                  >
                    {name}
                  </a>
                  {isActive ? <icons.ChevronDown /> : <icons.ChevronRight />}
                </div>
                {index < length - 1 && (
                  <div
                    class={`border-b-[1px] ${
                      isActive ? "border-b-blue" : "border-b-[#DADADA]"
                    }`}
                  />
                )}
                {isActive && (
                  <ul class="bg-white max-w-[440px] mb-6">
                    {children.map((child) => {
                      if (child.url === url) return null;

                      const childLink = `/catalog/${child.url}`;
                      const isChildActive = childLink === pathname;
                      return (
                        <li class="grid items-center text-xl text-grey hover:text-dark-blue border-b-[1px] border-[#DADADA]">
                          <a
                            href={childLink}
                            class={`grid items-center h-full pr-4 py-1 ${
                              isChildActive && "text-dark-blue"
                            }`}
                          >
                            {child.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      }
      panelClassName="absolute bottom-0 left-0 translate-y-full pt-1 min-w-full !shadow-lg"
    />
  );
}
