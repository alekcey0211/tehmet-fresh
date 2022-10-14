import { config as dotend } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

const env = IS_BROWSER ? {} : dotend();

export const config = {
  production: Boolean(!env.DEVELOPMENT),
  categoriesWithPrice: ["konvektory"],
  useModernImageFormat: true,
};
