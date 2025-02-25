import CareersHero from "../../components/heroSections/CareersHero";
import ScrollToTop from "../../components/utils/ScrollToTop";
import CareersIntro from "./features/CareersIntro";
import NamibraCulture from "./features/namibraCulture/NamibraCulture";
import OpenPositions from "./features/openPositions/OpenPositions";
import TeamTestimonials from "./features/teamTestimonials/TeamTestimonials";

const Careers = () => {
  return (
    <>
      <CareersHero />
      <CareersIntro />
      <NamibraCulture />
      <OpenPositions />
      <TeamTestimonials/>
      <ScrollToTop/>
    </>
  );
};

export default Careers;
