import { Category } from "../routes/data/categories.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const fetchNavCategories = async () => {
  try {
    const url = "/data/navCategories";
    const response = await fetch(
      IS_BROWSER ? url : `http://localhost:8000${url}`
    );
    const json = await response.json();
    return json as Category[];
  } catch (error) {
    // console.error(error);
    return [];
  }
};
