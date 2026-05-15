import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        foreground: "#e5e2e1",
        obsidian: {
          DEFAULT: "#030303",
          surface: "#0A0A0A",
          bright: "#3a3939",
        },
        primary: {
          DEFAULT: "#b1c5ff",
          container: "#5a8cff",
          on: "#002c72",
        },
        secondary: {
          DEFAULT: "#cebdff",
          container: "#5028ae",
          on: "#390094",
        },
        accent: {
          blue: "rgba(62, 123, 250, 0.15)",
          violet: "rgba(157, 123, 255, 0.15)",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 0% 0%, rgba(62, 123, 250, 0.05) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(157, 123, 255, 0.05) 0, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
