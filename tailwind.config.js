import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#261818", // Custom color
      },
      fontFamily: {
        primary: "Vollkorn",
      },
      boxShadow: {
        "custom-light": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        herobg: "url(../src/assets/home/hero-bg.png)",
      },
    },
  },
  plugins: [forms, typography],
};
