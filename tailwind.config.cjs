/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#C8235D",
          2: "#7F66ED",
        },
        body: {
          100: "#C4C4C4",
          200: "#4F4F4F",
          300: "#3D3D3D",
          400: "#1D1D1D",
        },
      },
      fontFamily: {
        title: ["Viga", "sans-serif"],
        sans: ["Oxygen", "sans-serif"],
      },
      backgroundImage: {
        iLogo: "url('/logoM.svg')",
        iSearch: "url('/search.svg')",
        iSpanish: "url('/spanish.svg')",
      },
    },
  },
  plugins: [],
};
