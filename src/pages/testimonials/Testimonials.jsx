import TestimonialsHero from "../../components/heroSections/TestimonialsHero"
import CTA from "../aboutus/features/CTA"
import AllTestimonials from "./features/customersTestimonials/AllTestimonials"
import IntroTestimonials from "./features/IntroTestimonials"

const Testimonials = () => {
  return (
    <>
        <TestimonialsHero/>
        <IntroTestimonials/>
        <AllTestimonials/>
        <CTA/>
    </>
  )
}

export default Testimonials