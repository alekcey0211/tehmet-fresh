import { IS_BROWSER } from "$fresh/runtime.ts";
import { NewsResponse } from "../routes/data/news.ts";

export const fetchNews = async ({
  page,
  all,
}: {
  page?: number;
  all?: boolean;
}) => {
  const path = "/data/news";
  const url = IS_BROWSER ? path : `http://localhost:8000${path}`;
  const params = new URLSearchParams();
  if (page && !all) params.set("page", page.toString());
  if (all) params.set("page", "all");
  const response = await fetch(`${url}?${params.toString()}`);
  return (await response.json()) as NewsResponse;
};
