import { HandlerContext } from "$fresh/server.ts";
import { fetchProducts } from "../../data/products.ts";

export type PopularProductsResponse = {
  preview?: string;
  name: string;
  url: string;
}[];

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const products = await fetchProducts();

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
