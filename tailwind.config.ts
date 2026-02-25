import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f2a1b2",
        "primary-dark": "#d18a99",
        "background-light": "#fbf8f9",
        "background-dark": "#211115",
        "glass-border": "rgba(255, 255, 255, 0.6)",
        "glass-surface": "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(242, 161, 178, 0.15)",
        "glass-hover": "0 8px 32px 0 rgba(242, 161, 178, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;