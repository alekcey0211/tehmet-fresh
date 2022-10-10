import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { icons } from "../../components/icons.tsx";
import { Layout } from "../../components/layout.tsx";
import { ProductInfo } from "../../components/sections/products/product-info.tsx";
import { PageData, pageCache } from "../../context/page-context.tsx";
import { Category, fetchCategories } from "../../data/categories.ts";
import { fetchProducts, Product } from "../../data/products.ts";
import { isProduction } from "../../shared/config.ts";

type Data = PageData & {
  product: Product;
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const productUrl = ctx.params.url;

    const products = pageCache.has("products-" + productUrl)
      ? (pageCache.get("products-" + productUrl)! as Product[])
      : await fetchProducts();

    if (!isProduction) pageCache.set("products-" + productUrl, products);

    const product = products.find(({ url }) => url === productUrl);

    if (!product) {
      return ctx.renderNotFound();
    }

    const categories = pageCache.has("categories")
      ? (pageCache.get("categories")! as Category[])
      : await fetchCategories();

    if (!isProduction) pageCache.set("categories", categories);

    return ctx.render({
      categories,
      product,
    });
  },
};

export default function ProductsUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <Layout pageData={ctx} title={data.product.name}>
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
                {data.product.category && (
                  <>
                    <li>
                      <a
                        href={`/catalog/${data.product.category?.url}`}
                        class="text-dark-blue hover:text-blue"
                      >
                        {data.product.category?.name}
                      </a>
                    </li>
                    <li>
                      <span class="text-dark-blue">/</span>
                    </li>
                  </>
                )}
                <li class="">{data.product.name}</li>
              </ol>
            </nav>
            <ProductInfo {...data.product} />
          </section>
        </div>
        <div class="col-span-2">
          <div class="mt-4 sm:mt-8 lg:mt-20 flex justify-end mb-4 sm:mb-8 lg:mb-20">
            <icons.TitleSeparator />
          </div>
        </div>
      </CatalogWrapper>
    </Layout>
  );
}
