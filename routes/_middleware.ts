import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { walk } from "https://deno.land/std@0.158.0/fs/mod.ts";
import { fetchBrands } from "../data/brands.ts";
import { fetchCategories } from "../data/categories.ts";
import { fetchProducts } from "../data/products.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  if (req.url.endsWith("/sitemap.xml")) {
    const routes = [];

    const routeEntries = walk("./routes", {
      maxDepth: 5,
      includeDirs: false,
      exts: [".tsx"],
      skip: [/data/, /\/[[_]/],
    });

    for await (const entry of routeEntries) {
      const route = entry.path
        .replace("routes", "")
        .replace("/index", "")
        .replace(/(.tsx)/, "");
      routes.push(route);
    }

    const products = await fetchProducts();
    const productsRoutes = products.map(({ url }) => `/products/${url}`);

    const categories = await fetchCategories();
    const categoriesRoutes = categories.map(({ url }) => `/catalog/${url}`);

    const brands = await fetchBrands();
    const brandsRoutes = brands.map(({ url }) => `/brands/${url}`);

    const urlSet = [
      ...routes,
      ...productsRoutes,
      ...categoriesRoutes,
      ...brandsRoutes,
    ]
      .map((route) => `<url><loc>https://tehmet.su${route}</loc></url>`)
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;
    return new Response(sitemap, {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  }
  return await ctx.next();
}
