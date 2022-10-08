import { Handlers, PageProps } from "$fresh/server.ts";
import { Base } from "../../components/layout.tsx";
import { PageData, pageCache } from "../../context/page-context.tsx";
import { Brand, fetchBrands } from "../../data/brands.ts";
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

    return ctx.render({
      brand,
      products,
    });
  },
};

export default function BrandsUrlRoute(ctx: PageProps<Data>) {
  const { data } = ctx;
  return (
    <Base pageData={ctx} title={data.brand.name}>
      <ul>
        {data.products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </Base>
  );
}
