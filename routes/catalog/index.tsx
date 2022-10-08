import { Handlers, PageProps } from "$fresh/server.ts";
import { Base } from "../../components/layout.tsx";
import { PageData, pageCache } from "../../context/page-context.tsx";
import { Category, fetchCategories } from "../../data/categories.ts";
import { isProduction } from "../../shared/config.ts";

type Data = PageData;

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const categories = pageCache.has("categories")
      ? (pageCache.get("categories")! as Category[])
      : await fetchCategories();

    if (!isProduction) pageCache.set("categories", categories);

    return ctx.render({
      categories,
    });
  },
};

export default function CatalogRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  const navCategories = data.categories?.filter(
    ({ parent_id, url }) => parent_id === "0" && Boolean(url)
  );
  return (
    <Base pageData={ctx} title={"Каталог"}>
      <h1>Каталог</h1>
      <ul class="list-disc">
        {navCategories?.map((category) => (
          <li>
            <a href={`/catalog/${category.url}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </Base>
  );
}
