import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { icons } from "../../components/icons.tsx";
import { LayoutBase } from "../../components/layout.tsx";
import { Certificates } from "../../components/sections/catalog/certificates.tsx";
import { Partners } from "../../components/sections/catalog/partners.tsx";
import { Popular } from "../../components/sections/catalog/popular.tsx";
import { PageData } from "../../context/page-context.tsx";
import { fetchBrands } from "../../data/brands.ts";
import { fetchCategories } from "../../data/categories.ts";
import { fetchProducts } from "../../data/products.ts";
import CatalogList from "../../islands/CatalogList.tsx";
import { Brand } from "../data/brands.ts";
import { Product } from "../data/products.ts";

type Data = PageData & {
  products: Product[];
  brand: Brand;
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const brandUrl = ctx.params.url;

    const brands = await fetchBrands();

    const brand = brands.find(({ url }) => url === brandUrl);

    if (!brand) {
      return ctx.renderNotFound();
    }

    const products = await fetchProducts({ brand: brand.id });

    const categories = await fetchCategories();

    return ctx.render({
      categories,
      brand,
      products,
    });
  },
};

export default function BrandsUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <LayoutBase
      pageData={ctx}
      title={data.brand.name}
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
                <li class="">{data.brand.name}</li>
              </ol>
            </nav>
            <CatalogList title={data.brand.name} brandId={data.brand.id} />
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
