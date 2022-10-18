import { HandlerContext } from "$fresh/server.ts";
import { stringToDate } from "../../shared/date.ts";
import { getJson } from "../../shared/file.ts";
import { slugifyString } from "../../shared/slug.ts";

export type News = {
  id: string;
  title: string;
  date: string;
  dateString: string;
  fileName: string;
  description: string;
  videoId?: string;
};

export type NewsResponse = {
  news: News[];
  pages: number;
};

const limit = 20;

export const handler = async (req: Request, _ctx: HandlerContext) => {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") ?? "1");

  const data = (await getJson("./db/news.json")) as News[];

  const news = data
    .map((x) => ({
      ...x,
      date: stringToDate(x.date, "dd.mm.yyyy", "."),
      fileName: x.fileName?.replace("JPG", "jpg"),
    }))
    .sort(({ date: dateA }, { date: dateB }) => Number(dateB) - Number(dateA))
    .map((x) => ({
      ...x,
      id: slugifyString(`${x.date.toISOString().split("T")[0]}-${x.title}`),
      date: x.date.toISOString(),
      dateString: x.date.toLocaleDateString("ru"),
    })) as News[];

  if (url.searchParams.get("page") === "all") {
    return new Response(
      JSON.stringify({
        news,
        pages: 1,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      news: news.slice((page - 1) * limit, page * limit),
      pages: Math.ceil(news.length / limit),
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
