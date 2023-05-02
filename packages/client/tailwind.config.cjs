/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f4f7",
          100: "#e6e6f0",
          200: "#c8c9d9",
          300: "#a9abc2",
          400: "#8b8dad",
          500: "#6c6f97",
          600: "#53567a",
          700: "#3c3f5e",
          800: "#242840",
          900: "#0d0f23",
        },
      },
    },
  },
  daisyui: {
    themes: ["lofi"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
};
