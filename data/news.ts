// deno-lint-ignore-file

import { NewsResponse } from "../routes/data/news.ts";
import { stringToDate } from "../shared/date.ts";
import { slugifyString } from "../shared/slug.ts";


export const fetchNews = async ({ page }: { page: number }) => {
  const params = new URLSearchParams();
  if (page) params.set("page", page.toString());
  const response = await fetch(`/data/news?${params.toString()}`);
  return (await response.json()) as NewsResponse;
 
};
