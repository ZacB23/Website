import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        mac: {
          bg: "#0a0a0a",
          window: "#1c1c1e",
          titlebar: "#2c2c2e",
          border: "rgba(255,255,255,0.08)",
          red: "#ff5f57",
          yellow: "#ffbd2e",
          green: "#28c840",
        },
      },
      boxShadow: {
        window: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
      },
      borderRadius: {
        window: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
