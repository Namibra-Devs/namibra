
import Shape from "../../../assets/icons/shape.png";
import TestimonialsList from "../../testimonials/features/customersTestimonials/TestimonialsList";
import testimonialsData from "../../testimonials/features/customersTestimonials/testimonialsData"
const CustomerTestimonials = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-24 pt-64">
        <div className="flex flex-col items-center text-center mb-14">
          <span>
            <img src={Shape} alt="Ahape" className="w-28" />
          </span>
          <h2 className="text-3xl font-medium text-black my-2">
            Customer testimonials
          </h2>
          <h3 className="text-slate-600 text-lg">This is what our clients says about us.</h3>
        </div>
        <TestimonialsList testimonial={testimonialsData.slice(0, 2)} showMore={true} />
      </div>
    </section>
  )
}

export default CustomerTestimonials