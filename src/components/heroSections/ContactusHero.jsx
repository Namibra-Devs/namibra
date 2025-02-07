import Navbar from "../layouts/Navbar";

const ContactusHero = () => {
  return (
    <section className="bg-contactusbg bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen py-20 px-6 lg:px-16">
        <h2 className="text-[30px] md:text-[48px] max-w-full md:max-w-xl text-center text-white leading-tight font-semibold">
          Speak with a specialist today
        </h2>
      </div>
    </section>
  );
};

export default ContactusHero;
