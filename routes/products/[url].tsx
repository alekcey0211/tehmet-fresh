import { Handlers, PageProps } from "$fresh/server.ts";
import { Base } from "../../components/layout.tsx";
import { PageData, pageCache } from "../../context/page-context.tsx";
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

    return ctx.render({
      product,
    });
  },
};

export default function ProductsUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <Base pageData={ctx} title={data.product.name}>
      <h1>{data.product.name}</h1>
    </Base>
  );
}
