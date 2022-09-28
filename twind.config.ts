import { Configuration } from "twind";

export default {
  plugins: {
    "header-nav-shadow": {
      "box-shadow": `0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 1px rgba(0, 0, 0, 0.25)`,
    },
  },
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
} as Configuration;
