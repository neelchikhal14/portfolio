import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "main-background": "#000000",
      "text-color": "#FFFFFF",
      "iconic-green": "#1ED760",
      "section-background": "#181818",
      "section-background-secondary": "#242424",
      ...colors,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        threeBarMenuAnimate: "threeBarMenuKF 0.5s ease-out",
        smoothUnderlineAnimate: "smoothUnderlineKF 0.55s ease-in-out forwards",
      },
      gridTemplateRows: {
        template_rows_auto_1fr: "auto 1fr",
      },
      keyframes: {
        threeBarMenuKF: {
          "0%": {
            left: "-200px",
          },
          "100%": {
            left: "0px",
          },
        },
        smoothUnderlineKF: {
          "0%": {
            textDecorationColor: "transparent",
            textDecorationLine: "none",
          },
          "100%": {
            textDecorationColor: "#1ED760",
            textDecorationLine: "underline",
            textDecorationThickness: "1.5px",
            textUnderlineOffset: "1.5px",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
