import { HandlerContext } from "$fresh/server.ts";
import { fetchProducts } from "../../data/products.ts";
import { Product } from "./products.ts";

export type ProductResponse = Product | undefined;

export const handler = async (_req: Request, ctx: HandlerContext) => {
  const productUrl = ctx.params.url;

  const products = await fetchProducts();

  const product = products.find(({ url }) => url === productUrl);

  if (!product) return ctx.renderNotFound();

  return new Response(JSON.stringify(product), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
