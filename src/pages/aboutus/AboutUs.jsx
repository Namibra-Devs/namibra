import AboutusHero from "../../components/heroSections/AboutusHero"
import ScrollToTop from "../../components/utils/ScrollToTop"
import BrandLogos from "../home/features/BrandLogos"
import AboutUsSection from "./features/AboutUsSection"
import CTA from "./features/CTA"
import OurTeam from "./features/ourTeam/OurTeam"

const AboutUs = () => {
  return (
    <>
      <AboutusHero />
      <AboutUsSection/>
      <OurTeam/>
      <CTA/>
      <BrandLogos/>
      <ScrollToTop/>
    </>
  )
}

export default AboutUs