import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
