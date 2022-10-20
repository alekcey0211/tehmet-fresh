import { HandlerContext } from "$fresh/server.ts";
import { fetchCategories } from "../../data/categories.ts";
import { getJson } from "../../shared/file.ts";

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  try {
    const popularCategoriesUrls = (await getJson(
      "./db/popular-categories.json"
    )) as string[];

    const categories = await fetchCategories();

    const popularCategories = [
      ...categories.filter((category) =>
        popularCategoriesUrls.includes(category.url)
      ),
    ];

    return new Response(JSON.stringify(popularCategories), {
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
