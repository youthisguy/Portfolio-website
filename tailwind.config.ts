/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        cardShadow: "-25px 47px 66px 0px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryLight: "#0252CD",
        primaryDark: "#428DFF",
        secondary: "#FFBE62",
        challengeRed: "#E15A46",
        learningsGreen: "#02BC7D",
        white500: "#6F74A7",
        white800: "#F3F8FF",
        white900: "#FFFFFF",
        black200: "#151E2C",
        black300: "#192333",
        black400: "#778295",
        graphicOffWhite: "#F9FBFC",
        graphicOffWhite2: "#E5F1FF",
        graphicTurquoise: "#1AE5FF",
        graphicLighterBlue: "#A9CCEA",
        graphicPaleBlue: "#6ca8db",
        graphicLightBlue: "#2889DB",
        graphicMidBlue: "#287DD1",
        graphicDarkBlue: "#284D89",
        graphicDarkerBlue: "#28385E",
        graphicDarkestBlue: "#282E5C",
        graphicGrey: "#0F3775",
        graphicDarkGrey: "#0F3157",
        graphicPaleRed: "#FF5C66",
        graphicLightRed: "#FF4D6B",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};