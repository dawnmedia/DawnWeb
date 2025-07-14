/** @type {import('tailwindcss').Config} */
import colors, { blue } from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#ffffff",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        50: "#ffffff",
        100: "#fff7ed",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c", 
        700: "#c2410c",
        800: "#9a3412",
      },
      blue: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#596f9e",
        400: "#405991",
        500: "#274583",
        600: "#0f3075",
        700: "#0c1f4b",
        800: "#0a1a3c",
        900: "#08162f",
      }, // Used mainly for links, buttons and svg icons
      
      // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
