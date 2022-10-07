import { Configuration } from "twind";

export default {
  theme: {
    extend: {
      fontSize: {
        xxs: ".5rem",
        "2xs": ".625rem",
      },
      screens: {
        "-xs": { max: "475px" },
      },
      gridTemplateRows: {
        layout: "max-content 1fr max-content",
      },
      maxWidth: {
        hero: "1440px",
        fullhd: "1920px",
      },
      colors: {
        "light-blue": "rgba(0, 137, 204, 0.15)",
        "dark-blue": "#39446B",
        "light-grey": "#E8E8E8",
        grey: "#9C9EA8",
        grey2: "#4F4F4F",
        blue: "#0089CC",
        blue1: "#0A529A",
      },
      outline: {
        "light-blue": ["rgba(0, 137, 204, 0.15)"],
        "dark-blue": ["#39446B"],
        "light-grey": ["#E8E8E8"],
        grey: ["#9C9EA8"],
        grey2: ["#4F4F4F"],
        blue: ["#0089CC"],
        blue1: ["#0A529A"],
      },
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "40px",
        sm: "2rem",
        lg: "40px",
        xl: "40px",
        "2xl": "40px",
      },
    },
  },
  plugins: {
    "header-nav-shadow": {
      "box-shadow": `0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 1px rgba(0, 0, 0, 0.25)`,
    },
    "nav-item-link": {},
    "nav-item-button": {},
    "nav-item-span": {},
    "pswp-gallery": {},
    "w-fit": {
      width: "fit-content",
    },
    isolate: {
      isolation: "isolate",
    },
    "swiper-slide__wrapper": (parts, { tw, theme, tag, css }) =>
      tw`bg-light-blue relative pt-1 pr-1 pl-6 md:pl-10 lg:pl-16 grid justify-items-end w-48 md:w-56 lg:w-96 h-full max-w-full mx-auto`,
    "swiper-slide__wrapper__img-container": (parts, { tw, theme, tag, css }) =>
      tw`bg-white w-full h-32 md:h-36 lg:h-60 lg:p-8`,
    "swiper-slide__wrapper__text": (parts, { tw, theme, tag, css }) =>
      tw`text-dark-blue text-xxs md:text-xs lg:text-base pr-8 lg:pr-20 leading-[10px] justify-self-start`,
    "swiper-slide__wrapper__link": (parts, { tw, theme, tag, css }) =>
      tw`absolute inset-0`,
    swiper: {},
    "swiper-wrapper": {},
    "swiper-slide": {},
    "visually-hidden": {
      border: "0",
      clip: "rect(0 0 0 0)",
      "clip-path": "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      "white-space": "nowrap",
      "&.focusable:active": {
        clip: "auto",
        "clip-path": "none",
        height: "auto",
        margin: "0",
        overflow: "visible",
        position: "static",
        width: "auto",
        "white-space": "inherit",
      },
      "&.focusable:focus": {
        clip: "auto",
        "clip-path": "none",
        height: "auto",
        margin: "0",
        overflow: "visible",
        position: "static",
        width: "auto",
        "white-space": "inherit",
      },
    },
    "spinner-border": {
      "vertical-align": "-0.125em",
      border: "0.25em solid",
      "border-right-color": "transparent",
    },
    "swiper-button-next": {},
    "swiper-button-prev": {},
    a768e8baa19f64e51ad0012c672be3e95: {},
    "a768e8baa19f64e51ad0012c672be3e95-bg": {},
    "hover-gradient": {
      "&:hover": {
        "background-image": `linear-gradient(
          90deg,
          #0089cc 39.7%,
          rgba(10, 82, 154, 0.96) 70.33%
        )`,
      },
      "&:hover span": {
        "background-clip": "initial",
        "-webkit-background-clip": "initial",
        background: "transparent",
        color: "white",
      },
    },
    gradient: {
      "background-image": `linear-gradient(
        90deg,
        #0089cc 39.7%,
        rgba(10, 82, 154, 0.96) 70.33%
      )`,
    },
    "gradient-text": {
      "-webkit-background-clip": "text",
      "background-clip": "text",
      color: "transparent",
      "background-image": `linear-gradient(
        90deg,
        #0089cc 39.7%,
        rgba(10, 82, 154, 0.96) 70.33%
      )`,
    },
    "gradient-light-text": {
      "-webkit-background-clip": "text",
      "background-clip": "text",
      color: "transparent",
      "background-image": `linear-gradient(
        89.11deg,
        rgba(0, 137, 204, 0.5) 39.7%,
        rgba(10, 82, 154, 0.48) 70.33%
      )`,
    },
    checkbox: {},
    "form-check-input": {
      width: "1.23rem",
      height: "1.23rem",
      "background-color": "#fff",
      "background-repeat": "no-repeat",
      "background-position": "50%",
      "background-size": "contain",
      border: "1px solid #cfd8dc",
      position: "relative",
      "background-image": "none",
      "border-radius": "0.35rem",
      cursor: "pointer",
      "margin-right": "7px",
      transition: `background-color 0.25s ease, border-color 0.25s ease,
        background-position 0.15s ease-in-out, opacity 0.15s ease-out,
        box-shadow 0.15s ease-in-out`,
    },
    "form-dialog": {
      "background-image": `linear-gradient(
        213.83deg,
        #0089cc 32.57%,
        rgba(10, 82, 154) 66.08%
      )`,
    },
    "shrink-0": {
      "flex-shrink": 0,
    },
    "shrink-1": {
      "flex-shrink": 1,
    },
    columns: (parts) => ({
      columns: parts[0],
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
    "aspect-auto": {
      "aspect-ratio": `auto`,
    },
    "aspect-square": {
      "aspect-ratio": `1 / 1`,
    },
    "aspect-video": {
      "aspect-ratio": `16 / 9`,
    },
    scroll: (parts) => ({
      "scroll-behavior": parts[0],
    }),
    aspect: (parts) =>
      parts[0]?.startsWith("[") && {
        "aspect-ratio": parts[0]
          .substring(1, parts[0].length - 1)
          .split("/")
          .join(" / "),
      },
  },
  preflight: (cssRule, { css }) => {
    cssRule["@import"] = [
      "url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
    ];

    cssRule[":root"] = { "--swiper-navigation-color": "#9c9ea8" };
    cssRule["body"] = css(
      `antialiased grid grid-rows-[max-content_max-content_1fr_max-content] min-h-screen grid-cols-1 text-dark-blue`
    );
    cssRule["svg, img"] = {
      maxHeight: "100%",
      maxWidth: "100%",
    };
    cssRule[".pswp img"] = {
      maxHeight: "none",
    };
    cssRule["a.gradient-text"] = {
      display: "inline-block",
    };
    cssRule['*[class*="after"]::after'] = { content: '""' };
    cssRule[".checkbox:checked + .form-check-input"] =
      css(`bg-blue border-blue`);
    cssRule[
      ".nav-item-link:hover, .nav-item-button:hover > span, .nav-item-button:hover .nav-item-span"
    ] = {
      "-webkit-background-clip": "text",
      backgroundClip: "text",
      color: "transparent",
      backgroundImage: `linear-gradient(
                            90deg,
                            #0089cc 39.7%,
                            rgba(10, 82, 154, 0.96) 70.33%
                          )`,
    };
    cssRule[".c-prav h2"] = css(`text-xl`);
    cssRule[".c-prav thead"] = css(`border`);
    cssRule[".c-prav th, .c-prav td"] = css(`p-1 border-r`);
    cssRule[".c-prav tr"] = css(`border`);
    cssRule[".c-prav table"] = css(
      `table-auto w-full flex overflow-auto mb-4 mt-4`
    );
    cssRule[".c-prav p"] = css(`mb-4 mt-4`);
    cssRule[".c-prav ul"] = css(`mb-4 mt-4 ml-0 mr-0 pl-0 list-disc`);
  },
} as Configuration;
