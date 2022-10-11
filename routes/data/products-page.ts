import { HandlerContext } from "$fresh/server.ts";
import { fetchProducts, Product } from "../../data/products.ts";

export type ProductsPageResponse = {
  products: Product[];
  pages: number;
  total: number;
};

const limit = 48;

export const handler = async (req: Request, _ctx: HandlerContext) => {
  const url = new URL(req.url);
  const categories = url.searchParams.getAll("category[]");
  const brand = url.searchParams.get("brand") ?? undefined;
  const sort = (url.searchParams.get("sort") ?? undefined) as
    | "price"
    | undefined;
  const order = url.searchParams.get("order") ?? undefined;
  const page = Number(url.searchParams.get("page") ?? "1");

  const products = await fetchProducts({ categories, brand });
  let items = products;
  if (sort) {
    items = items.sort((a, b) =>
      order === "desc"
        ? Number(b[sort!] ?? 0) - Number(a[sort!] ?? 0)
        : Number(a[sort!] ?? 0) - Number(b[sort!] ?? 0)
    );
  }

  return new Response(
    JSON.stringify({
      products: items.slice((page - 1) * limit, page * limit),
      pages: Math.ceil(items.length / limit),
      total: items.length,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
