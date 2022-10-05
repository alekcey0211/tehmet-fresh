import { Brand } from "./brands.ts";

export type Category = {
  id: string;
  parent_id: string;
  name: string;
  url: string;
  children: Category[];
  brands: Brand[];
};

export const fetchCategories = async () => {
  const url = new URL("https://tehmet.su/ajax/categories.php");
  const response = await fetch(url.toString());
  const json = await response.json();
  return Object.values(json.data ?? {}) as Category[];
};
