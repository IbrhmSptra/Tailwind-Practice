/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "ui-serif"],
      },
      colors: {
        Primary: "#8053FF",
        Body: "#23155B",
        hero: "#FBFAFF",
      },
    },
  },
  plugins: [],
};
