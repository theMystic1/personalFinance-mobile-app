/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          500: "#98908b",
          100: "#f8f4f0",
          200: "#f2f3f7",
        },
        grey: {
          900: "#201f24",
          500: "#696868",
          300: "#b3b3b3",
          100: "#f2f2f2",
        },
        secondary: {
          green: "#277c78",
          yellow: "#f2cdac",
          cyan: "#82c9d7",
          navy: "#626070",
          red: "#c94736",
          purple: "#826cb0",
          lightPurple: "#af81ba",
          turquoise: "#597c7c",
          brown: "#93674f",
          magenta: "#934f6f",
          blue: "#3f82b2",
          navyGrey: "#97a0ac",
          amyGreen: "#7f9161",
          gold: "#cab361",
          orange: "#b36c49",
          white: "#ffffff",
        },
      },
      fontFamily: {
        sansRegular: ["publicsans-regular", "sans-serif"],
        sansBold: ["publicsans-bold", "sans-serif"],
        sansItalic: ["public-sans-italic", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
