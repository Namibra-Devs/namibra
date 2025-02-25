import ExpertiseStudyHero from "../../components/heroSections/ExpertiseStudyHero"
import ScrollToTop from "../../components/utils/ScrollToTop"
import SignUpForNewsLetters from "../home/features/SignUpForNewsLetters"
import BlogPost from "./features/blogpost/BlogPost"

const ExpertiseStudy = () => {
  return (
    <>
        <ExpertiseStudyHero/>
        <BlogPost/>
        <SignUpForNewsLetters/>
        <ScrollToTop/>
    </>
  )
}

export default ExpertiseStudy