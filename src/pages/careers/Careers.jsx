import CareersHero from "../../components/heroSections/CareersHero";
import CareersIntro from "./features/CareersIntro";
import NamibraCulture from "./features/namibraCulture/NamibraCulture";
import OpenPositions from "./features/openPositions/OpenPositions";

const Careers = () => {
  return (
    <>
      <CareersHero />
      <CareersIntro />
      <NamibraCulture />
      <OpenPositions />
    </>
  );
};

export default Careers;
