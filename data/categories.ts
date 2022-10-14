import { Category } from "../routes/data/categories.ts";

export const fetchCategories = async () => {
  try {
    const response = await fetch("/data/categories");
    const json = await response.json();
    return json as Category[];
  } catch (error) {
    console.error(error);
    return;
  }
};
