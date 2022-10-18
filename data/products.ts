import { IS_BROWSER } from "$fresh/runtime.ts";
import { Product } from "../routes/data/products.ts";

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
  try {
    const path = "/data/products";
    const url = IS_BROWSER ? path : `http://localhost:8000${path}`;

    const searchParams = new URLSearchParams();
    if (categories) {
      categories.forEach((c) => {
        searchParams.append("category[]", c);
      });
    }
    if (id) searchParams.set("id", id);
    if (brand) searchParams.set("brand", brand);
    if (company) searchParams.set("brand", company);

    const response = await fetch(`${url}?${searchParams.toString()}`);
    const json = await response.json();
    return json as Product[];
  } catch (error) {
    // console.error(error);
    return [];
  }
};
