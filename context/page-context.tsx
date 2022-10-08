import { createContext } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Category } from "../data/categories.ts";

export type PageData = {
  categories?: Category[];
};

export const pageCache = new Map<string, unknown>();
// export const setPageCache = async (
//   key: keyof PageData,
//   data: PageData[keyof PageData]
// ) => {
//   await Deno.writeTextFile(`/cache/${key}.json`, JSON.stringify(data));
// };
// export const getPageCache = async (key: keyof PageData) => {
//   const stat = await ensureFile(`/cache`);
//   console.log(stat);
//   // const data = await Deno.readTextFile(`/cache/${key}.json`);
//   // return JSON.parse(data) as PageData[typeof key];
// };

export const Page = createContext<PageProps<PageData>>({} as any);
