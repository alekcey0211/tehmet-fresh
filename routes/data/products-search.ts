import { HandlerContext } from "$fresh/server.ts";
import { pageCache } from "../../context/page-context.tsx";
import { fetchProducts, Product } from "../../data/products.ts";
import { isProduction } from "../../shared/config.ts";

export type PopularProductsResponse = {
  preview?: string;
  name: string;
  url: string;
}[];

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const products = pageCache.has("products")
    ? (pageCache.get("products")! as Product[])
    : await fetchProducts();

  if (!isProduction) pageCache.set("products", products);

  return new Response(
    JSON.stringify(
      products.map(({ preview, name, url }) => ({ preview, name, url }))
    ),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
