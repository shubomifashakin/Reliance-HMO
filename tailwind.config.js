/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondaryBlue: "#112936",
        secondaryGreen: "#12BF4D",
        primaryTextColor: "#0A212E",
        primaryBtn: "#009DF5",
      },
      backgroundImage: {
        "section-gradient":
          "linear-gradient(336deg, rgba(188,251,255,1) 0%, rgba(255,255,255,1) 75%)",
      },
    },
  },
  plugins: [],
};
