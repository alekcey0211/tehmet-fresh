import { Handlers, PageProps } from "$fresh/server.ts";
import { CatalogWrapper } from "../../components/catalog-wrapper.tsx";
import { LayoutBase } from "../../components/layout.tsx";
import { PageData, pageCache } from "../../context/page-context.tsx";
import { Brand, fetchBrands } from "../../data/brands.ts";
import { Category, fetchCategories } from "../../data/categories.ts";
import { fetchProducts, Product } from "../../data/products.ts";
import { isProduction } from "../../shared/config.ts";

type Data = PageData & {
  products: Product[];
  brand: Brand;
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const brandUrl = ctx.params.url;

    const brands = pageCache.has("brands")
      ? (pageCache.get("brands")! as Brand[])
      : await fetchBrands();

    if (!isProduction) pageCache.set("brands", brands);

    const brand = brands.find(({ url }) => url === brandUrl);

    if (!brand) {
      return ctx.renderNotFound();
    }

    const products = pageCache.has("products")
      ? (pageCache.get("products")! as Product[])
      : await fetchProducts({ brand: brand.id });

    if (!isProduction) pageCache.set("products", products);

    const categories = pageCache.has("categories")
      ? (pageCache.get("categories")! as Category[])
      : await fetchCategories();

    if (!isProduction) pageCache.set("categories", categories);

    return ctx.render({
      categories,
      brand,
      products,
    });
  },
};

export default function BrandsUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <LayoutBase pageData={ctx} title={data.brand.name} isCompact={true}>
      <CatalogWrapper>
        <div>
          <h1>{data.brand.name}</h1>
          <ul>
            {data.products.map((product) => (
              <li>{product.name}</li>
            ))}
          </ul>
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
