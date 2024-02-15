import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",
      cm: "1120px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gotham: ["var(--font-gotham)"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#00CABE",
        rojo: "#E91E31",
        negro: "#19191A"
      },
    },
  },
  themes: [
    {
      mytheme: {
        primary: "#00a7d2",

        secondary: "#007cff",

        accent: "#00f493",

        neutral: "#111827",

        "base-100": "#1f2937",

        info: "#8b5cf6",

        success: "#2d8000",

        warning: "#facc15",

        error: "#f35867",
      },
    },
  ],

  plugins: [daisyui],
};
export default config;
