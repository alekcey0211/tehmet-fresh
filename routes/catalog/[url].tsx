import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { icons } from "../../components/icons.tsx";
import { LayoutBase } from "../../components/layout.tsx";
import { Certificates } from "../../components/sections/catalog/certificates.tsx";
import { Partners } from "../../components/sections/catalog/partners.tsx";
import { Popular } from "../../components/sections/catalog/popular.tsx";
import { PageData, pageCache } from "../../context/page-context.tsx";
import { Category, fetchCategories } from "../../data/categories.ts";
import CatalogList from "../../islands/CatalogList.tsx";
import { isProduction } from "../../shared/config.ts";

type Data = PageData & {
  category: Category;
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const categories = pageCache.has("categories")
      ? (pageCache.get("categories")! as Category[])
      : await fetchCategories();

    if (!isProduction) pageCache.set("categories", categories);

    const category = categories.find(({ url }) => url === ctx.params.url);

    if (!category) {
      return ctx.renderNotFound();
    }

    return ctx.render({
      categories,
      category,
    });
  },
};

export default function CatalogUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <LayoutBase pageData={ctx} title={data.category.name} isCompact={true}>
      <CatalogWrapper>
        <div>
          <section class="py-4 sm:py-8 lg:py-16 max-w-fullhd mx-auto">
            <div class="relative">
              <p class="font-light text-2xl sm:text-4xl lg:text-5xl text-dark-blue lg:leading-[80px] text-right mr-4 sm:mr-8 lg:mr-[410px] uppercase sm:mb-4 lg:mb-0">
                КАТАЛОГ
              </p>
              <div class="hidden lg:block absolute bottom-0 right-0">
                <icons.TitleSeparator />
              </div>
            </div>
            <nav class="ml-4 md:ml-10 lg:ml-0 md:mb-2 lg:mb-16 mt-1">
              <ol class="list-reset flex flex-wrap gap-2 text-base">
                <li>
                  <a href="/" class="text-dark-blue hover:text-blue">
                    Главная
                  </a>
                </li>
                <li>
                  <span class="text-dark-blue">/</span>
                </li>
                <li>
                  <a href="/catalog" class="text-dark-blue hover:text-blue">
                    Каталог
                  </a>
                </li>
                <li>
                  <span class="text-dark-blue">/</span>
                </li>
                <li class="">{data.category.name}</li>
              </ol>
            </nav>
            <CatalogList
              title={data.category.name}
              categories={data.category.children.map((x) => x.id)}
              brands={data.category.brands}
            />
          </section>
        </div>
        <div class="col-span-2">
          <Popular />
          <Partners />
          <Certificates />
        </div>
      </CatalogWrapper>
    </LayoutBase>
  );
}
