/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".25em",
    },
    extend: {
      animation: {
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
