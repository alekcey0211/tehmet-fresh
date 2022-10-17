import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { icons } from "../../components/icons.tsx";
import { LayoutBase } from "../../components/layout.tsx";
import { Certificates } from "../../components/sections/catalog/certificates.tsx";
import { Partners } from "../../components/sections/catalog/partners.tsx";
import { Popular } from "../../components/sections/catalog/popular.tsx";
import { PageData } from "../../context/page-context.tsx";
import { fetchCategories } from "../../data/categories.ts";
import CatalogList from "../../islands/CatalogList.tsx";
import { getCategoryPath } from "../../shared/path.ts";
import { Category } from "../data/categories.ts";

type Data = PageData & {
  category: Category;
  path: Category[];
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const categories = await fetchCategories();

    const category = categories.find(({ url }) => url === ctx.params.url);

    if (!category) {
      return ctx.renderNotFound();
    }

    const path = getCategoryPath({ category, categories });

    return ctx.render({
      categories,
      category,
      path,
    });
  },
};

export default function CatalogUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <LayoutBase
      pageData={ctx}
      title={data.category.name}
      isCompact={true}
    >
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
              <ol class="list-none flex flex-wrap gap-2 text-base">
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
                {data.path.map((item) => (
                  <>
                    <li>
                      <a
                        href={`/catalog/${item.url}`}
                        class="text-dark-blue hover:text-blue"
                      >
                        {item.name}
                      </a>
                    </li>
                    <li>
                      <span class="text-dark-blue">/</span>
                    </li>
                  </>
                ))}
                <li class="">{data.category.name}</li>
              </ol>
            </nav>
            <div class="flex flex-wrap gap-1 pl-4 md:pl-10 lg:pl-0 pr-8 md:pr-16 lg:pr-0 my-4">
              {data.category.children.map((item) => (
                <a
                  href={`/catalog/${item.url}`}
                  class="text-base inline-flex items-center px-3 py-1 rounded-full bg-white border hover:text-blue"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <CatalogList
              title={data.category.name}
              categories={[
                data.category.id,
                ...data.category.children.map((x) => x.id),
              ]}
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
