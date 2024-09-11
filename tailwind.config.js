/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        lemon: ["Lemon", "serif"],
      },
      colors: {
        primary: "#3b82f6",
        lighter: "#60a5fa",
        text: "#111827",
      },
      screens: {
        lg: "1028px",
        lgi: "1020px",
      },
    },
  },
  plugins: [],
};
