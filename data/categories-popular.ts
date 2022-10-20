import { IS_BROWSER } from "$fresh/runtime.ts";
import { Category } from "../routes/data/categories.ts";

export const fetchCategoriesPopular = async () => {
  const url = "/data/categories-popular";
  const response = await fetch(
    IS_BROWSER ? url : `http://localhost:8000${url}`
  );
  const json = await response.json();
  return json as Category[];
};
