import { HandlerContext } from "$fresh/server.ts";

export type Brand = {
  id: string;
  name: string;
  url: string;
};

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  try {
    const url = new URL("https://tehmet.su/ajax/brands.php");
    const response = await fetch(url.toString());
    const json = await response.json();
    const brands = Object.values(json.data ?? {}) as Brand[];

    return new Response(JSON.stringify(brands), {
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
