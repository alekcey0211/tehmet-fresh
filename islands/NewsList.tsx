import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import { NewsListComponent } from "../components/news-list-component.tsx";
import { fetchNews } from "../data/news.ts";
import { NewsResponse } from "../routes/data/news.ts";

const getSearchParams = () => {
  if (!IS_BROWSER)
    return {
      page: 1,
    };
  const url = new URL(document.location.href);
  return {
    page: Number(url.searchParams.get("page") ?? "1"),
  };
};

export default function NewsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [{ pages, news }, setData] = useState<NewsResponse>({
    news: [],
    pages: 1,
  });
  const { page } = getSearchParams();

  useEffect(() => {
    if (!IS_BROWSER) return;
    fetchNews({ page }).then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <NewsListComponent
      page={page}
      pages={pages}
      news={news}
      isLoading={isLoading}
    />
  );
}
