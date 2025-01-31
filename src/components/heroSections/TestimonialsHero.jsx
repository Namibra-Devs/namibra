import Navbar from "../Layouts/Navbar";

const TestimonialsHero = () => {
  return (
    <section className="bg-testimonialsbg bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen py-20 px-6 lg:px-10">
        <h2 className="text-[30px] md:text-[48px] max-w-full md:max-w-xl text-center text-white leading-tight font-semibold">
          This is what our clients says about us.
        </h2>
      </div>
    </section>
  );
};

export default TestimonialsHero;
