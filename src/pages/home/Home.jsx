import HomeHero from "../../components/heroSections/HomeHero"
import AboutSection from "./features/AboutSection"
import CustomerTestimonials from "./features/customerTestimonials/CustomerTestimonials"
import OurApproaches from "./features/ourApproach/OurApproaches"
import OurExpertise from "./features/ourExpertise/OurExpertise"
import OurPortfolioProjects from "./features/ourPortfolio/OurPortfolioProjects"
import OurServices from "./features/ourServices/OurServices"

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutSection/>
      <OurApproaches/>
      <OurServices/>
      <OurExpertise/>
      <CustomerTestimonials/>
      <OurPortfolioProjects/>
    </>
  )
}

export default Home