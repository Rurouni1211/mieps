/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        iphonese: "375px", // iPhone SE
        iphone12: "390px", // iPhone 12
        iphone14: "430px",
      },
    },
  },
  plugins: [],
};
