/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc,
        primary: {
          50: "#FDE9E8",
          100: "#F9D7DB",
          200: "#EEAFC1",
          300: "#E08FB4",
          400: "#D071AC",
          500: "#B75BA3",
          600: "#A4377A",
          700: "#80234D",
          800: "#581326",
          900: "#31070C",
          950: "#170302",
        },
        secondary: {
          50: "#FFFCF0",
          100: "#FFF8E1",
          200: "#FFEDAD",
          300: "#FFE375",
          400: "#FFDC42",
          500: "#FFD60A",
          600: "#D6B600",
          700: "#9E8900",
          800: "#6B5F00",
          900: "#332E00",
          950: "#191700",
        },
      },
    },
  },
  plugins: [],
};
