import HomeHero from "../../components/heroSections/HomeHero"
import AboutSection from "./features/AboutSection"
import OurApproaches from "./features/ourApproach/OurApproaches"
import OurServices from "./features/ourServices/OurServices"

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutSection/>
      <OurApproaches/>
      <OurServices/>
    </>
  )
}

export default Home