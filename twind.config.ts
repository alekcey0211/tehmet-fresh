import { Configuration } from "twind";

export default {
  plugins: {
    "header-nav-shadow": {
      "box-shadow": `0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 1px rgba(0, 0, 0, 0.25)`,
    },
    "nav-item-link": {},
    "nav-item-button": {},
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
