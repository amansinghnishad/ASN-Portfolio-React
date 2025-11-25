const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
      colors: {
        canvas: "var(--color-app-background)",
        surface: "var(--color-surface)",
        surfaceStrong: "var(--color-surface-strong)",
        foreground: "var(--color-text-primary)",
        muted: "var(--color-text-muted)",
        subtle: "var(--color-text-subtle)",
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        positive: "var(--color-positive)",
        borderSubtle: "var(--color-border)",
        borderStrong: "var(--color-border-strong)",
      },
      backgroundImage: {
        "hero-pattern": "url('card-skills-background.png')",
        "footer-texture": "url('card-hello-background.png')",
      },
      boxShadow: {
        "custom-light":
          "0 5px 10px rgba(0,0,0,0.2), 0px 0px 20px rgba(0,0,0,0.2)",
        glass: "var(--shadow-soft)",
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
        "9/20": "45%",
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
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
