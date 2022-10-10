import { ProductResponse } from "../routes/api/product.ts";

export const fetchProduct = async ({
  url,
}: {
  url?: string;
} = {}) => {
  const params = new URLSearchParams();
  if (url) params.set("url", url);

  console.log(`/api/product?${params.toString()}`);
  const response = await fetch(`/api/product?${params.toString()}`);
  return (await response.json()) as ProductResponse;
};
