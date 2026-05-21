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
        background: "#0C0C0C",
        foreground: "#D7E2EA",
      },
      fontFamily: {
        kanit: ["var(--font-kanit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
