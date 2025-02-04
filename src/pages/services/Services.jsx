import ServicesHero from "../../components/heroSections/ServicesHero";
import CTA from "../aboutus/features/CTA";
import OurExpertise from "../home/features/ourExpertise/OurExpertise";
import ServicesIntro from "./features/ServicesIntro";
import AllServices from "./features/ourServices/AllServices";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <AllServices />
      <OurExpertise />
      <section className="mt-64">
        <CTA />
      </section>
    </>
  );
};

export default Services;
