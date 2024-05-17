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
      backgroundImage: {
        "hero-pattern": "url('card-skills-background.png')",
        "footer-texture": "url('card-hello-background.png')",
      },
      height: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "7/10": "70%",
        "4/5": "80%",
        "9/10": "90%",
        252.5: "1010px",
      },
      width: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "7/10": "70%",
        "4/5": "80%",
        "9/10": "90%",
        252.5: "1010px",
      },
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
