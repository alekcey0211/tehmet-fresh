import { HandlerContext } from "$fresh/server.ts";
import { fetchCategories } from "../../data/categories.ts";
import { getNavCategories } from "../../shared/nav-categories.ts";

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  try {
    const categories = await fetchCategories();
    const navCategories = getNavCategories(categories);

    return new Response(
      JSON.stringify(
        navCategories.map(({ url, name, children }) => ({
          url,
          name,
          children,
        }))
      ),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // console.error(error);
    return new Response(JSON.stringify([]), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
