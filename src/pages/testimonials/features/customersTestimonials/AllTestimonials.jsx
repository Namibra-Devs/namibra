import TestimonialsList from "./TestimonialsList";
import testimonialsData from "./testimonialsData";

const AllTestimonials = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-24">
        <TestimonialsList testimonial={testimonialsData} showMore={false}/>
      </div>
    </section>
  );
};

export default AllTestimonials;
