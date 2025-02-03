import { useState, useEffect } from "react";
import PreloaderSvg from "../../assets/infinite-spinner.svg";
import logo from "../../assets/logo.png";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 1800); // Slightly less than the main timeout for smooth transition
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 w-full h-full bg-primary z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img src={logo} alt="logo" className="w-2 animate-spin" />
      <img src={PreloaderSvg} alt="loading..." className="w-14 animate-pulse mt-4" />
    </section>
  );
};

export default Preloader;
