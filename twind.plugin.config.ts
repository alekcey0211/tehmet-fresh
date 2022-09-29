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
    shrink: (parts) => ({
      "flex-shrink": parts[0],
    }),
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
    ":root": { "--swiper-navigation-color": "#9c9ea8" },
    body: apply`antialiased grid grid-rows-[max-content_max-content_1fr_max-content] min-h-screen grid-cols-1 text-dark-blue`,
    "svg, img": {
      maxHeight: "100%",
      maxWidth: "100%",
    },
    ".pswp img": {
      maxHeight: "none",
    },
    "a.gradient-text": {
      display: "inline-block",
    },
    '*[class*="after"]::after': { content: '""' },
    ".checkbox:checked + .form-check-input": apply`bg-blue border-blue`,
    ".nav-item-link:hover, .nav-item-button:hover > span, .nav-item-button:hover .nav-item-span":
      {
        "-webkit-background-clip": "text",
        backgroundClip: "text",
        color: "transparent",
        backgroundImage: `linear-gradient(
                            90deg,
                            #0089cc 39.7%,
                            rgba(10, 82, 154, 0.96) 70.33%
                          )`,
      },
    ".c-prav h2": apply`text-xl`,
    ".c-prav thead": apply`border`,
    ".c-prav th, .c-prav td": apply`p-1 border-r`,
    ".c-prav tr": apply`border`,
    ".c-prav table": apply`table-auto w-full flex overflow-auto mb-4 mt-4`,
    ".c-prav p": apply`mb-4 mt-4`,
    ".c-prav ul": apply`mb-4 mt-4 ml-0 mr-0 pl-0 list-disc`,
  },
} as Options;
