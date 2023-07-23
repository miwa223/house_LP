/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        "1/2": "0 0 50%",
      },
      colors: {
        "house-grey": "#eeeeee",
        "house-blue": "#2e99ff",
        "house-orange": "#ff942e",
        "house-light-orange": "#ffe9d5",
        "house-dark-orange": "#fa7a00",
        "house-brown": "#79551a",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
