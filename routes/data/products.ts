import { HandlerContext } from "$fresh/server.ts";
import { getJson } from "../../shared/file.ts";
import { Category } from "./categories.ts";

export type Product = {
  // id: string;
  name: string;
  url: string;
  image?: string;
  preview?: string;
  price?: number;
  annotation: string;
  description: string;
  brand: string | null;
  featured: boolean | null;
  category?: Category;
  features: { id: number; value: string }[];
  articleNumber?: string;
  isExists?: boolean;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
};
export const handler = async (req: Request, _ctx: HandlerContext) => {
  try {
    const reqUrl = new URL(req.url);
    const url = new URL("https://tehmet.su/ajax/products.php");
    url.search = reqUrl.search;

    const config = (await getJson("./db/config.json")) as {
      categoriesWithPrice: string[];
      showPrice: boolean;
    };

    const response = await fetch(url.toString());
    const json = await response.json();
    const data = (json.data ?? {}) as Record<string, Product>;
    const products = Object.entries(data).map(([id, p]) => ({
      ...p,
      id: Number(id),
      isExists: true,
      price:
        ((p.category && config.categoriesWithPrice.includes(p.category.url)) ||
          config.showPrice) &&
        p.price
          ? Number(p.price)
          : undefined,
    })) as Product[];

    // try {
    //   const decoder = new TextDecoder("utf-8");
    //   const ostatki = await Deno.readFile("./db/ostatki.csv");
    //   const content = await parse(decoder.decode(ostatki), {
    //     lazyQuotes: true,
    //     separator: ";",
    //     skipFirstRow: true,
    //   });
    //   console.log(content);
    // } catch (error) {
    //   console.error("Error when load ostatki.csv", error.message);
    // }

    return new Response(JSON.stringify(products), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // console.error(error);
    return new Response(JSON.stringify([]), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
