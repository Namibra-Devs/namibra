// import Lady from "../../../assets/testimonials/lady.jpg"
// import Man from "../../../assets/testimonials/man.jpg"
import testimonialsData from "./customersTestimonials/testimonialsData";

const IntroTestimonials = () => {

  const selectedTestimonials = testimonialsData.slice(0, 2);
  console.log(selectedTestimonials);

  return (
    <section className="bg-white px-6 lg:px-24 py-24">
      <div className="mb-14 text-left">
        <h2 className="heading text-3xl font-semibold text-black mb-3">
          Customer Testimonials
        </h2>
        <h3 className="text-lg text-slate-600">
          This's what our clients says about us.
        </h3>
      </div>

      <div className="flex flex-col items-start gap-20">
        {selectedTestimonials?.map((testy, index) => (
          <div key={index}>
            <h2 className="text-3xl font-semibold text-black mb-8">{testy.title}</h2>
            <img src={testy.img} alt="A Man" className="rounded-lg" />
            <div className="border-l-2 border-gray-500 pl-4 py-3 mt-10">
              <p className="italic text-gray-600 text-2xl font-medium w-full lg:max-w-2xl">{testy.message}</p>
              <h3 className="font-semibold text-2xl text-black mt-4">{testy.name}</h3>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default IntroTestimonials;
