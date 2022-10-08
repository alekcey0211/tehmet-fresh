import { Handlers, PageProps } from "$fresh/server.ts";
import { pageCache, PageData } from "../context/page-context.tsx";
import { Category, fetchCategories } from "../data/categories.ts";
import { isProduction } from "../shared/config.ts";
import { Base } from "../components/layout.tsx";
import { Slider } from "../components/sections/index/slider.tsx";
import { Categories } from "../components/sections/index/categories.tsx";
import { PopularProducts } from "../components/sections/index/popular-products.tsx";
import { Equipment } from "../components/sections/index/equipment.tsx";
import { GeographySales } from "../components/sections/index/geography-sales.tsx";
import { Advantages } from "../components/sections/index/advantages.tsx";
import { Partners } from "../components/sections/index/partners.tsx";
import { News } from "../components/sections/index/news.tsx";

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

export default function HomeRoute(ctx: PageProps<Data>) {
  return (
    <Base pageData={ctx} title="Главная">
      <Slider />
      <Categories />
      <PopularProducts />
      <Equipment />
      <GeographySales />
      <Advantages />
      <Partners />
      <News />
    </Base>
  );
}
