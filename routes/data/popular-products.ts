import { HandlerContext } from "$fresh/server.ts";
import { fetchProducts } from "../../data/products.ts";

export type PopularProductsResponse = {
  image?: string;
  name: string;
  url: string;
}[];

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const products = await fetchProducts();

  const popular = [
    ...products.filter(
      (x) =>
        Boolean(x.featured) ||
        x.features.find((f) =>
          ["хит", "хит продаж"].includes(f.value.toLowerCase())
        )
    ),
  ];
  return new Response(
    JSON.stringify(
      popular.map(({ image, name, url }) => ({ image, name, url }))
    ),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
