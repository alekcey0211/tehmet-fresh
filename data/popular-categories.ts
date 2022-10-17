import { getJsonSync } from "../shared/file.ts";

export const getPopularCategories = () => {
  const data = getJsonSync("./db/popular-categories.json") as {
    name: string;
    url: string;
  }[];
  return data;
};
