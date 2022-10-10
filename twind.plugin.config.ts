import { Options } from "$fresh/plugins/twind.ts";
import { isProduction } from "./shared/config.ts";
import TwindConfig from "./twind.config.ts";

export default {
  selfURL: import.meta.url,
  hash: isProduction,
  ...TwindConfig,
} as Options;
