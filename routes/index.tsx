import { Handlers, PageProps } from "$fresh/server.ts";
import { PageData } from "../context/page-context.tsx";
import { fetchCategories } from "../data/categories.ts";
import { Layout } from "../components/layout.tsx";
import { MainSlider } from "../components/sections/index/main-slider.tsx";
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
    const categories = await fetchCategories();

    return ctx.render({
      categories,
    });
  },
};

export default function HomeRoute(ctx: PageProps<Data>) {
  return (
    <Layout pageData={ctx} title="Главная">
      <MainSlider />
      <Categories />
      <PopularProducts />
      <Equipment />
      <GeographySales />
      <Advantages />
      <Partners />
      <News />
    </Layout>
  );
}
