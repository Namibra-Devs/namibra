import { Link } from "react-router-dom";
import ButtonTransparent from "../buttons/ButtonTransparent";
import Navbar from "../layouts/Navbar";
import SendAMessage from "../utils/SendAMessage";
const HomeHero = () => {
  return (
    <section className="relative bg-homebg bg-cover bg-center bg-no-repeat min-h-screen w-full overflow-hidden">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen pt-32 pb-20 px-6 lg:px-24 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-32">
          <div className="text-white z-20">
            <h4 className="text-lg">Welcome to Namibra</h4>
            <h2 className="text-[30px] lg:text-4xl leading-tight tracking-tight font-semibold my-4">
              Technology should never be a barrier but rather, a powerful
              enabler of growth and efficiency.
            </h2>
            <p className="text-[20px] mb-10 italic">
              By working closely with our clients We provide exceptional web,
              mobile, and technology services, Designed to meet your goals.
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
