import { NavCategories } from "./nav-categories.tsx";
import { Banner } from "./sections/banner.tsx";
import { useContext } from "preact/hooks";
import { Page } from "../context/page-context.tsx";
import { ComponentChildren } from "preact";
import { getNavCategories } from "../shared/nav-categories.ts";

export const CatalogWrapper = ({
  children,
}: {
  children: ComponentChildren;
}) => {
  const { url, data } = useContext(Page);

  const navCategories = getNavCategories(data?.categories);

  return (
    <main class="z-10 grid grid-cols-1 lg:grid-cols-[minmax(378px,500px)_minmax(378px,1fr)] lg:gap-4 max-w-fullhd mx-auto">
      <aside class="relative hidden lg:block">
        <div class="grid gap-6">
          <div class="border-r-[1px] border-l-[1px] border-b-[1px] border-[#DADADA] pt-1 box-border w-max">
            <NavCategories pathname={url.pathname} categories={navCategories} />
          </div>
          <Banner />
        </div>
      </aside>
      {children}
    </main>
  );
};
