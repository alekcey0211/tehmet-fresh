import { HandlerContext } from "$fresh/server.ts";
import { Brand } from "./brands.ts";

export type Category = {
  id: string;
  parent_id: string;
  name: string;
  url: string;
  children: Category[];
  brands: Brand[];
};

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  try {
    const url = new URL("https://tehmet.su/ajax/categories.php");
    const response = await fetch(url.toString());
    const json = await response.json();
    const items = Object.values(json.data ?? {}) as Category[];
    const categories = items.map(({ brands, children, ...c }) => ({
      ...c,
      brands: Object.values(brands ?? {}),
      children: Object.values(children ?? {}).filter(
        (child) => child.parent_id === c.id
      ),
    }));

    return new Response(JSON.stringify(categories), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify([]), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
