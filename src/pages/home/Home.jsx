import HomeHero from "../../components/heroSections/HomeHero"
import AboutSection from "./features/AboutSection"
import BrandLogos from "./features/BrandLogos"
import CustomerTestimonials from "./features/CustomerTestimonials"
import OurApproaches from "./features/ourApproach/OurApproaches"
import OurBlogStories from "./features/OurBlogStories"
import OurExpertise from "./features/ourExpertise/OurExpertise"
import OurPortfolioProjects from "./features/ourPortfolio/OurPortfolioProjects"
import OurServices from "./features/ourServices/OurServices"
import SignUpForNewsLetters from "./features/SignUpForNewsLetters"

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
      <OurBlogStories/>
      <SignUpForNewsLetters/>
      <BrandLogos/>
    </>
  )
}

export default Home