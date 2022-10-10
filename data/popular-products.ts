import { PopularProductsResponse } from "../routes/api/popular-products.ts";

export const fetchPopularProducts = async () => {
  const response = await fetch(`/api/popular-products`);
  return (await response.json()) as PopularProductsResponse;
};
