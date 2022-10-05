import { Options } from "$fresh/plugins/twind.ts";
import TwindConfig from "./twind.config.ts";

export default {
  selfURL: import.meta.url,
  hash: false,
  ...TwindConfig,
} as Options;
