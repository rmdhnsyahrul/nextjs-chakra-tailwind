/** @type {import('tailwindcss').Config} */
const colors = require("./colors");
const { createThemes } = require("tw-colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-1": [
          "3.75rem",
          {
            lineHeight: "67px",
            letterSpacing: "-0.02em", // 0.01em is 1% of the element font size
          },
        ],
        "heading-2": [
          "3rem",
          {
            lineHeight: "55px",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-3": [
          "2.5rem",
          {
            lineHeight: "49px",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-4": [
          "2rem",
          {
            lineHeight: "40px",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-5": [
          "1.75rem",
          {
            lineHeight: "36px",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-6": [
          "1.5rem",
          {
            lineHeight: "32px",
            letterSpacing: "-0.02em",
          },
        ],
        "body-1": [
          "16px",
          {
            lineHeight: "22.88px",
            letterSpacing: "0.04px",
          },
        ],
        "body-2": [
          "14px",
          {
            lineHeight: "18.62px",
            letterSpacing: "0.056px",
          },
        ],
        "body-3": [
          "0.875rem",
          {
            lineHeight: "20px",
            letterSpacing: "0.04em",
          },
        ],
        title: [
          "18px",
          {
            lineHeight: "27px",
            letterSpacing: "0.09px",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(colors)],
};
