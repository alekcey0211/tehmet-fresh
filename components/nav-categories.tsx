import { Category } from "../data/categories.ts";
import { icons } from "./icons.tsx";

export const NavCategories = ({
  pathname,
  categories,
}: {
  pathname: string;
  categories: Category[];
}) => {
  return (
    <ul class="pl-12 py-4 bg-white max-w-[440px] overflow-auto max-h-[calc(100vh-70px)]">
      {categories.map(({ url, name, children }, index, { length }) => {
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
                } whitespace-break-spaces`}
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
  );
};
