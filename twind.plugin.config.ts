import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";
import TwindConfig from "./twind.config.ts";

export default {
  selfURL: import.meta.url,
  hash: false,
  theme: {
    ...TwindConfig.theme,
  },
  plugins: {
    ...TwindConfig.plugins,
    "grid-rows": (parts) =>
      parts[0]?.startsWith("[")
        ? {
            "grid-template-rows": parts[0]
              .substring(1, parts[0].length - 1)
              .split("_")
              .join(" "),
          }
        : {
            "grid-template-rows": `repeat(${parts[0]}, minmax(0,1fr))`,
          },
    "grid-cols": (parts) =>
      parts[0]?.startsWith("[")
        ? {
            "grid-template-columns": parts[0]
              .substring(1, parts[0].length - 1)
              .split("_")
              .join(" "),
          }
        : {
            "grid-template-columns": `repeat(${parts[0]}, minmax(0,1fr))`,
          },
  },
  preflight: {
    body: apply`antialiased grid grid-rows-[max-content_max-content_1fr_max-content] min-h-screen grid-cols-1 text-dark-blue`,
    '*[class*="after"]::after': { content: '""' },
  },
} as Options;
