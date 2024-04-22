/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".animate-slide-from-left": {
          animation: "slideFromLeft 1s ease-in-out",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
