/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
          "3xl": "6rem",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#1F2937",
          1: "#16355F",
          2: "#F0F4F8",
          3: "#1E2B3D",
          4: "#ADB7C9",
        },
        secondary: {
          DEFAULT: "#C25500",
          1: "#F26A00",
          2: "#E14817",
        },
        ash: {
          DEFAULT: "#EEEEEE",
          1: "#F0F0F0",
          2: "#F0F4F8",
          3: "#D9D9D926",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        "sans-2": ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: "0px 0px 16px rgba(16, 24, 40, 0.3)",
        "agenda-card": "0px 0px 4px rgba(0, 0, 0, 0.25)",
        "gi-card": "0px 0px 16px rgba(0, 0, 0, 0.25)",
      },
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
        7: "7px",
      },
      fontSize: {
        "32px": "2rem",
      },
    },
  },
  plugins: [],
};
