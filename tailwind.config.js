/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F4FF4D",
          pink: "#FF7EB3",
          purple: "#A084E8",
          blue: "#6AD4DD",
          black: "#1A1A1A",
          bg: "#FDFCF0",
        },
      },
      fontFamily: {
        sans: ['"Fredoka"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
