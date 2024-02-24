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
      cm: "1175px",

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
        negro: "#19191A",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#cf00ff",
        
"secondary": "#00ddff",
        
"accent": "#d86f00",
        
"neutral": "#190a11",
        
"base-100": "#322622",
        
"info": "#0098ff",
        
"success": "#00b45e",
        
"warning": "#ff4300",
        
"error": "#eb4769",
        },
      },
    ],
  },

  plugins: [daisyui],
};
export default config;
