import { Handlers, PageProps } from "$fresh/server.ts";
import { pageCache, PageData } from "../context/page-context.tsx";
import { fetchCategories } from "../data/categories.ts";
import { isProduction } from "../shared/config.ts";
import { Base } from "../components/layout.tsx";

type Data = PageData;

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const categories = pageCache.has("categories")
      ? pageCache.get("categories")!
      : await fetchCategories();

    if (!isProduction) pageCache.set("categories", categories);

    return ctx.render({
      categories,
    });
  },
};

export default function About(ctx: PageProps) {
  return <Base pageData={ctx} title="О компании"></Base>;
}
