import { PageProps } from "$fresh/server.ts";
import { PageData } from "../context/page-context.tsx";
import { LayoutCompact } from "../components/layout.tsx";
import { NewsTitle } from "../components/sections/blog/news.tsx";
import { BestManager } from "../components/sections/blog/best-manager.tsx";
import { TopNews } from "../components/sections/blog/top-news.tsx";
import NewsList from "../islands/NewsList.tsx";

type Data = PageData;

// export const handler: Handlers<Data> = {
//   async GET(_req, ctx) {
//     const categories = pageCache.has("categories")
//       ? pageCache.get("categories")!
//       : await fetchCategories();

//     if (!isProduction) pageCache.set("categories", categories);

//     return ctx.render({
//       categories,
//     });
//   },
// };

export default function BlogRoute(ctx: PageProps<Data>) {
  return <LayoutCompact pageData={ctx} title="Новости">
    <NewsTitle />
    <BestManager />
    <NewsList />
    <TopNews />
  </LayoutCompact>;
}
