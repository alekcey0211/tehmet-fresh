import { HandlerContext } from "$fresh/server.ts";
import { pageCache } from "../../context/page-context.tsx";
import { fetchProducts, Product } from "../../data/products.ts";
import { isProduction } from "../../shared/config.ts";

export type ProductResponse = Product | undefined;

export const handler = async (_req: Request, ctx: HandlerContext) => {
  const productUrl = ctx.params.url;

  const products = pageCache.has("products-" + productUrl)
    ? (pageCache.get("products-" + productUrl)! as Product[])
    : await fetchProducts();

  if (!isProduction) pageCache.set("products-" + productUrl, products);

  const product = products.find(({ url }) => url === productUrl);

  if (!product) return ctx.renderNotFound();

  return new Response(JSON.stringify(product), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
