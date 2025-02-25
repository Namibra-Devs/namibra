import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import OurPortfolioHero from "../../components/heroSections/OurPortfolioHero"
import ScrollToTop from "../../components/utils/ScrollToTop"
import Portfolio from "./features/Portfolio"

const OurPortfolio = () => {
  const location = useLocation();

  useEffect(() => {
    
    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
        <OurPortfolioHero/>
        <Portfolio/>
        <ScrollToTop/>
    </>
  )
}

export default OurPortfolio