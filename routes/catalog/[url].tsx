import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { LayoutBase } from "../../components/layout.tsx";
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
    <LayoutBase pageData={ctx} title={data.category.name} isCompact={true}>
      <CatalogWrapper>
        <div>
          <h1>{data.category.name}</h1>
          <CategoryProducts
            categories={data.category.children.map((x) => x.id)}
          />
        </div>
        <div class="col-span-2">
          {/* {% include "sections/catalog/ПОПУЛЯРНЫЕ ТОВАРЫ.njk" %} */}
          {/* {% include "sections/catalog/Наши партнеры.njk" %} */}
          {/* {% include "sections/catalog/Сертификаты.njk" %} */}
        </div>
      </CatalogWrapper>
    </LayoutBase>
  );
}
