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
        homebg: "url(../src/assets/home/hero-bg.png)",
        aboutusbg: "url(../src/assets/aboutus/aboutus-bg.png)",
        servicesbg: "url(../src/assets/services/services-bg.png)",
        careersbg: "url(../src/assets/careers/careers-bg.png)",
        ourportfoliobg: "url(../src/assets/our-portfolio/our-portfolio-bg.png)",
        testimonialsbg: "url(../src/assets/testimonials/testimonials-bg.png)",
        expertisestudybg: "url(../src/assets/expertise-study/expertise-study-bg.png)",
        expertiseHomebg: "url(../src/assets/home/our-expertise.png)",
        contactusbg: "url(../src/assets/contactus/contactus-bg.png)",
        newslettersbg: "url(../src/assets/home/news-letters-bg.png)",
        clientsbg: "url(../src/assets/clients/clientsbg2.jpg)",
        ctabg: "url(../src/assets/aboutus/cta.png)",
      },
      animation: {
        "spin-delay": "spin 8s linear infinite 0.5s", // Adds 0.5s delay
      },
    },
  },
  plugins: [forms, typography],
};
