import { Brand } from "../routes/data/brands.ts";

export const fetchBrands = async () => {
  const response = await fetch("/data/brands");
  const json = await response.json();
  return json as Brand[];
};
