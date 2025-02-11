import Navbar from "../layouts/Navbar";
const AboutusHero = () => {
  return (
    <section className="bg-aboutusbg bg-cover bg-center bg-no-repeat min-h-screen min-w-full overflow-hidden">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen py-20 px-6 lg:px-16">
        <h2 className="text-[30px] md:text-[48px] max-w-full md:max-w-2xl text-center text-white leading-tight font-semibold">
          What You Need To Know About Namibra
        </h2>
      </div>
    </section>
  );
};

export default AboutusHero;
