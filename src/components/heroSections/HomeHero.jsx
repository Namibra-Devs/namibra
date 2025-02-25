
import ButtonTransparent from "../buttons/ButtonTransparent";
import Navbar from "../layouts/Navbar";
import SendAMessage from "../utils/SendAMessage";
const HomeHero = () => {
  return (
    <section className="relative bg-homebg bg-cover bg-center bg-no-repeat min-h-screen w-full overflow-hidden">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen pt-32 pb-20 px-6 lg:px-24 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="text-white z-20 flex flex-col gap-5">
            <h4 className="text-lg">Welcome to Namibra</h4>
            <h2 className="text-[35px] lg:text-5xl leading-[40px] md:leading-tight tracking-tight font-bold my-4">
              Technology shouldn't be a barrier, rather a powerful
              enabler of growth & efficiency.
            </h2>
            <p className="text-[20px] mb-6 italic">
              By working closely with our clients We provide exceptional software,
              mobile app, cyber security and artificial intelligence solutions, designed to meet their goals.
            </p>
            <ButtonTransparent label="Contact Us" link="contact-us" />
          </div>
          <SendAMessage />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
