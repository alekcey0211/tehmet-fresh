const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.njk", "./src/**/*.md"],
	theme: {
		extend: {
			fontSize: {
				xxs: ".5rem",
				"2xs": ".625rem",
			},
			screens: {
				"-xs": { max: "475px" },
				...defaultTheme.screens,
			},
			gridTemplateRows: {
				layout: "max-content 1fr max-content",
			},
			maxWidth: {
				hero: "1440px",
				fullhd: "1920px"
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
				sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
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
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-gradient": (angle) => ({
						"background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
					}),
				},
				{
					// values from config and defaults you wish to use most
					values: Object.assign(
						theme("bgGradientDeg", {}), // name of config key. Must be unique
						{
							10: "10deg", // bg-gradient-10
							15: "15deg",
							20: "20deg",
							25: "25deg",
							30: "30deg",
							45: "45deg",
							60: "60deg",
							90: "90deg",
							120: "120deg",
							135: "135deg",
						}
					),
				}
			);
		}),
	],
};
