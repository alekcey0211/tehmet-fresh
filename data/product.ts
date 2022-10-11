import { ProductResponse } from "../routes/data/product.ts";

export const fetchProduct = async ({
  url,
}: {
  url?: string;
} = {}) => {
  const params = new URLSearchParams();
  if (url) params.set("url", url);

  const response = await fetch(`/data/product?${params.toString()}`);
  return (await response.json()) as ProductResponse;
};
