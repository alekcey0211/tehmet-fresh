import { icons } from "../components/icons.tsx";
import { Dropdown as DropdownComponent } from "../components/dropdown.tsx";
import { Category } from "../data/categories.ts";

export default function CategoriesNavDropdown({
  route,
  categories,
}: {
  route: string;
  categories: Category[];
}) {
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
            <icons.menuHamburger class="shrink-0" />
            <a class="nav-item-span" href="/catalog" style="padding: 1rem">
              Каталог
            </a>
          </div>
        </div>
      }
      triggerClassName="grid place-items-center nav-item-button lowercase"
      panel={
        <ul class="pl-12 py-4 bg-white max-w-[440px]">
          {categories.map(({ url, name }, index, { length }) => (
            <li class="grid items-center text-xl text-grey hover:text-dark-blue">
              <div class="grid items-center grid-cols-[1fr_auto] pr-1">
                <a
                  href={`/catalog/${url}`}
                  class="grid items-center h-full pr-4 py-3 nav-item-link"
                >
                  {name}
                </a>
              </div>
              {index < length && <div class="border-b-[1px]" />}
            </li>
          ))}
        </ul>
      }
      panelClassName="absolute bottom-0 left-0 translate-y-full pt-1 min-w-full shadow-lg max-h-[calc(100vh-70px)] overflow-auto"
    />
  );
}
