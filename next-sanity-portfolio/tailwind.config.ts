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
      },
    },
  },
  plugins: [],
};
export default config;
