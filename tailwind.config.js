/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        primary: "#1F2937",
        "primary-1": "#16355F",
        "primary-2": "#F0F4F8",
        "primary-3": "#1E2B3D",
        "primary-4": "#ADB7C9",
        secondary: "#C25500",
        "secondary-1": "#F26A00",
        ...defaultTheme.colors,
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        "sans-2": ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "card": "0px 0px 16px rgba(16, 24, 40, 0.3)",
      },
    },
  },
  plugins: [],
};
