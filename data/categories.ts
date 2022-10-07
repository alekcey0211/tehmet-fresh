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
  const categories = Object.values(json.data ?? {}) as Category[];
  return categories.map(({ brands, children, ...c }) => ({
    ...c,
    brands: Object.values(brands ?? {}),
    children: Object.values(children ?? {}).filter(
      (child) => child.parent_id === c.id
    ),
  }));
};
