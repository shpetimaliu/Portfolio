/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Okta Medium", ...defaultTheme.fontFamily.sans],
        display: [
          ["Okta Medium", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"width" 125' },
        ],
      },
      colors: {
        transparent: "transparent",
        white: "#fff",
        "off-white": "#f7f8f8",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
        background: "#000212",
        grey: "#858699",
        "grey-dark": "#222326",
        "primary-text": "#b4bcd0",
      },
      keyframes: {
        "glow-lined-vertical": {
          "0%": { opacity: 0, transform: "translateY(0)" },
          "5%": { opacity: 1, transform: "translateY(0)" },
          "90%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(min(21vw, 45rem))" },
        },
        zap: {
          "0% 9% 11% 10%": {
            fill: "transparent",
          },
          "10%": { fill: "white" },
        },
      },
      animation: {
        zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
        bounde: "240ms ease 0s 1 running bounce",
      },
    },
    backgroundImage: {
      "glass-gradient":
        "linear-gradient(112.1deg, rgb(0,2,19) 0%, rgb(16,17,39) 100%)",
    },
  },
  plugins: [],
};
