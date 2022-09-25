import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
const env = config();

export const isProduction = Boolean(!env.DEVELOPMENT);
