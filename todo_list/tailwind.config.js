/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signika: ["Signika", "sans-serif"],
      waterfall: ["Waterfall", "cursive"],
    },
  },
  plugins: [],
};
