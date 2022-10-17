import { createContext } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Category } from "../routes/data/categories.ts";

export type PageData = {
  categories?: Category[];
} | undefined;

// export const pageCache = new Map<string, unknown>();

export const Page = createContext<PageProps<PageData>>({} as any);
