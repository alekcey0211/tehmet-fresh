import { Category } from "./categories.ts";

export type Product = {
  // id: string;
  name: string;
  url: string;
  image?: string;
  preview?: string;
  price?: string;
  annotation: string;
  description: string;
  brand: string | null;
  featured: boolean | null;
  category?: Category;
  features: { id: number; value: string }[];
};

export const fetchProducts = async ({
  id,
  categories,
  company,
  brand,
}: {
  id?: string;
  categories?: string[];
  company?: string;
  brand?: string;
} = {}) => {
  const url = new URL("https://tehmet.su/ajax/products.php");
  if (categories) {
    categories.forEach((c) => {
      url.searchParams.append("category[]", c);
    });
  }
  if (id) url.searchParams.set("id", id);
  if (brand) url.searchParams.set("brand", brand);
  if (company) url.searchParams.set("brand", company);

  const response = await fetch(url.toString());
  const json = await response.json();
  return Object.values(json.data ?? {}) as Product[];
};
