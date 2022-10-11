import { ProductsPageResponse } from "../routes/data/products-page.ts";

export const fetchProductsPage = async ({
  categories,
  company,
  brand,
  page,
  sort,
  order,
}: {
  categories?: string[];
  company?: string;
  brand?: string;
  page?: number;
  sort?: "price";
  order?: "asc" | "desc";
} = {}) => {
  const params = new URLSearchParams();
  if (categories) {
    categories.forEach((c) => {
      params.append("category[]", c);
    });
  }
  if (brand) params.set("brand", brand);
  if (company) params.set("brand", company);
  if (sort) params.set("sort", sort);
  if (order) params.set("order", order);
  if (page) params.set("page", page.toString());

  const response = await fetch(`/data/products-page?${params.toString()}`);
  const json = (await response.json()) as ProductsPageResponse;
  return json;
};
