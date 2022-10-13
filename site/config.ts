import { config as dotend } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
const env = dotend();

export const config = {
  production: Boolean(!env.DEVELOPMENT),
  categoriesWithPrice: ["konvektory"],
};
