import { Page } from "../../../context/page-context.tsx";
import { useContext } from "preact/hooks";
import { getNavCategories } from "../../../shared/nav-categories.ts";

export const Categories = () => {
  const { data } = useContext(Page);
  const navCategories = getNavCategories(data.categories);

  return (
    <section class="bg-light-blue py-4 sm:py-8 md:py-16 max-w-fullhd mx-auto">
      <div class="px-4 sm:px-8 md:px-10">
        <div class="bg-white rounded-[20px] max-w-[1170px] px-4 py-10 sm:p-10 md:p-12 lg:p-20 m-auto">
          <div class="flex justify-between mb-4 md:mb-10">
            <div class="grid place-content-center w-4 sm:w-[46px]">
              <div class="border-solid border-blue border-b-[10px] sm:border-b-[20px] border-x-[6px] sm:border-x-[11px] border-transparent border-t-0 rotate-180"></div>
            </div>
            <h2 class="text-xl sm:text-4xl text-dark-blue font-light gradient-text">
              КАТАЛОГ
            </h2>
          </div>
          <ul>
            {navCategories?.map(({ url, name }, index) => (
              <li class="flex justify-between h-10 sm:h-16 items-center sm:items-end border-b-[1px] border-solid border-dark-blue gap-x-1">
                <span class="text-base sm:text-5xl sm:leading-[60px] gradient-text">
                  {index.toString().padStart(2, "0")}
                </span>
                <a
                  href={`/catalog/${url}`}
                  class="text-base sm:text-2xl font-light md:font-normal text-dark-blue hover:text-blue text-right md:uppercase whitespace-nowrap overflow-hidden overflow-ellipsis"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
