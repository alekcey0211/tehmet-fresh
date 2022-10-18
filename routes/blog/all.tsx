import { Handlers, PageProps } from "$fresh/server.ts";
import { PageData } from "../../context/page-context.tsx";
import { LayoutCompact } from "../../components/layout.tsx";
import { NewsTitle } from "../../components/sections/blog/news.tsx";
import { BestManager } from "../../components/sections/blog/best-manager.tsx";
import { TopNews } from "../../components/sections/blog/top-news.tsx";
import { News } from "../data/news.ts";
import { fetchNews } from "../../data/news.ts";
import { NewsListComponent } from "../../components/news-list-component.tsx";

type Data = PageData & {
  news: News[];
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const news = await fetchNews({ all: true });

    return ctx.render({
      news: news.news,
    });
  },
};

export default function BlogRoute(ctx: PageProps<Data>) {
  return (
    <LayoutCompact pageData={ctx} title="Новости">
      <NewsTitle />
      <BestManager />
      <NewsListComponent news={ctx.data.news} />
      <TopNews />
    </LayoutCompact>
  );
}
