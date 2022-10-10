import { PopularProductsResponse } from "../routes/api/popular-products.ts";

export const fetchProductsSearch = async () => {
  const response = await fetch(`/api/products-search`);
  return (await response.json()) as PopularProductsResponse;
};
