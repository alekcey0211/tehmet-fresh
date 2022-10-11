import { PopularProductsResponse } from "../routes/data/popular-products.ts";

export const fetchPopularProducts = async () => {
  const response = await fetch(`/data/popular-products`);
  return (await response.json()) as PopularProductsResponse;
};
