import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ServicesHero from "../../components/heroSections/ServicesHero";
import ScrollToTop from "../../components/utils/ScrollToTop";
import CTA from "../aboutus/features/CTA";
import OurExpertise from "../home/features/ourExpertise/OurExpertise";
import ServicesIntro from "./features/ServicesIntro";
import AllServices from "./features/ourServices/AllServices";

const Services = () => {
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
      <ServicesHero />
      <ServicesIntro />
      <AllServices />
      <OurExpertise />
      <section className="mt-64">
        <CTA />
      </section>
      <ScrollToTop/>
    </>
  );
};

export default Services;