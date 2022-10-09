import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { LayoutBase } from "../../components/layout.tsx";
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
  const { data, url } = ctx;

  return (
    <LayoutBase pageData={ctx} title={"Каталог"} isCompact={true}>
      <CatalogWrapper>
        <div>
          <h1>Каталог</h1>
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
