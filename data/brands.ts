import { Brand } from "../routes/data/brands.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const fetchBrands = async () => {
  const url = "/data/brands";
  const response = await fetch(
    IS_BROWSER ? url : `http://localhost:8000${url}`
  );
  const json = await response.json();
  return json as Brand[];
};
