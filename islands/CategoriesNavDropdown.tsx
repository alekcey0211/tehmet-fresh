import { icons } from "../components/icons.tsx";
import { Dropdown as DropdownComponent } from "../components/dropdown.tsx";
import { Category, fetchCategories } from "../data/categories.ts";
import { useState, useEffect } from "preact/hooks";
import { NavCategories } from "../components/nav-categories.tsx";
import { getNavCategories } from "../shared/nav-categories.ts";

export default function CategoriesNavDropdown({
  pathname,
}: {
  pathname: string;
}) {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((categories) => {
      const navCategories = getNavCategories(categories);
      setData(navCategories);
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
        <div class="overflow-auto max-h-[calc(100vh-70px)]">
          <NavCategories pathname={pathname} categories={data} />
        </div>
      }
      panelClassName="absolute bottom-0 left-0 translate-y-full pt-1 min-w-full shadow-lg! w-[442px] border-r-[1px] border-l-[1px] border-b-[1px] border-transparent box-border"
    />
  );
}
