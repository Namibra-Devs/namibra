import HomeHero from "../../components/heroSections/HomeHero"
import AboutSection from "./features/AboutSection"
import OurApproaches from "./features/ourApproach/OurApproaches"

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutSection/>
      <OurApproaches/>
    </>
  )
}

export default Home