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

export const fetchProducts = async () => {
  const url = new URL("https://tehmet.su/ajax/products.php");
  const response = await fetch(url.toString());
  const json = await response.json();
  return Object.values(json.data ?? {}) as Product[];
};
