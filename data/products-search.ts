import { PopularProductsResponse } from "../routes/data/popular-products.ts";

export const fetchProductsSearch = async () => {
  const response = await fetch(`/data/products-search`);
  return (await response.json()) as PopularProductsResponse;
};
