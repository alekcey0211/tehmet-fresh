import { Handlers, PageProps } from "$fresh/server.ts";
import { Base } from "../../components/layout.tsx";
import { PageData, pageCache } from "../../context/page-context.tsx";
import { Category, fetchCategories } from "../../data/categories.ts";
import CategoryProducts from "../../islands/CategoryProducts.tsx";
import { isProduction } from "../../shared/config.ts";

type Data = PageData & {
  category: Category;
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const categories = pageCache.has("categories")
      ? (pageCache.get("categories")! as Category[])
      : await fetchCategories();

    if (!isProduction) pageCache.set("categories", categories);

    const category = categories.find(({ url }) => url === ctx.params.url);

    if (!category) {
      return ctx.renderNotFound();
    }

    return ctx.render({
      categories,
      category,
    });
  },
};

export default function CatalogUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <Base pageData={ctx} title={data.category.name}>
      <h1>{data.category.name}</h1>
      <CategoryProducts categories={data.category.children.map((x) => x.id)} />
    </Base>
  );
}
