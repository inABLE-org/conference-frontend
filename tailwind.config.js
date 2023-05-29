/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        xl2: "1440px",
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
          3: "#D9D9D9",
          4: "#EBEBEB",
          5: "#4E4E4E",
          6: "#9A9A9ABF",
          7: "#7F7F7F",
          8: "#343434",
        },
        link: {
          DEFAULT: "#0052B4",
          1: "#0645AD",
        },
        sucess: {
          DEFAULT: "#14AE5C",
          1: "#068C45",
        },
        danger: {
          DEFAULT: "#D80027",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        "sans-2": ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: "0px 0px 16px rgba(16, 24, 40, 0.3)",
        "agenda-card": "0px 0px 4px rgba(0, 0, 0, 0.25)",
        "about-card": "0px 0px 6px rgba(0, 0, 0, 0.25)",
        "gi-card": "0px 0px 16px rgba(0, 0, 0, 0.25)",
        "contact-card": "0px 0px 16px rgba(0, 0, 0, 0.13)",
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
      backgroundOpacity: {
        15: "0.15",
        35: "0.35",
        65: "0.65",
      },
    },
  },
  plugins: [],
};
