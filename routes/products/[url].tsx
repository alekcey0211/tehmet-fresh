import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { Layout } from "../../components/layout.tsx";
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
          <h1>{data.product.name}</h1>
        </div>
        <div class="col-span-2">
          {/* {% include "sections/catalog/ПОПУЛЯРНЫЕ ТОВАРЫ.njk" %} */}
          {/* {% include "sections/catalog/Наши партнеры.njk" %} */}
          {/* {% include "sections/catalog/Сертификаты.njk" %} */}
        </div>
      </CatalogWrapper>
    </Layout>
  );
}
