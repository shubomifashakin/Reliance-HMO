/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondaryBlue: "#375262",
        secondaryGreen: "#12BF4D",
        relianceDarkBlue: "#0A212E",
        relianceLightBlue: "#009DF5",
        relianceLighterBlue: "#223743",
        cream: "#FBFCFD",
        relianceGrey: "#61676B",
      },
      backgroundImage: {
        "section-gradient":
          "linear-gradient(336deg, rgba(188,251,255,1) 0%, rgba(255,255,255,1) 85%)",
        "text-gradient":
          "linear-gradient(60deg, #112936 35%, #e5e7eb82 45%, #112936 46%)",
        "text-gradient-green":
          "linear-gradient(90deg, #8FD7FF 0%, #73FFE6 49.41%, #81F3A8 100%)",

        "footer-gradient": "linear-gradient(90deg, #009DF5 0%, #14D255 100%)",
      },

      animation: {
        flash: "flash .5s ease-in-out",
      },

      keyframes: {
        flash: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },

      screens: {
        "2xl": "1440px",
      },

      fontSize: {
        "4xl": [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.0625rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
