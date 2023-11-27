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
    },
  },
  plugins: [],
};
