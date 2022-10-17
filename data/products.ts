import { Category } from "../routes/data/categories.ts";
import { config } from "../site/config.ts";

export type Product = {
  // id: string;
  name: string;
  url: string;
  image?: string;
  preview?: string;
  price?: number;
  annotation: string;
  description: string;
  brand: string | null;
  featured: boolean | null;
  category?: Category;
  features: { id: number; value: string }[];
  articleNumber?: string;
  isExists?: boolean;
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
  try {
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
    const data = Object.values(json.data ?? {}) as Product[];

    return data.map((x) => ({
      ...x,
      isExists: true,
      price:
        x.category &&
        config.categoriesWithPrice.includes(x.category.url) &&
        x.price
          ? Number(x.price)
          : undefined,
    }));
  } catch (error) {
    // console.error(error);
    return [];
  }
};
