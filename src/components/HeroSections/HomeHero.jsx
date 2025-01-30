import { Link } from "react-router-dom";
import ButtonTransparent from "../Buttons/ButtonTransparent";
import Navbar from "../Layouts/Navbar";
import SendAMessage from "../Utils/SendAMessage";

const HomeHero = () => {
  return (
    <section className="bg-herobg bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen pt-32 pb-20 px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="text-white">
            <h4 className="text-[20px]">Welcome to Namibra</h4>
            <h2 className="text-[30px] md:text-[40px] italic font-semibold my-4">
              Technology should never be a barrier but rather, a powerful
              enabler of growth and efficiency.
            </h2>
            <p className="text-[20px] mb-10">
              By working closely with our clients We provide exceptional web,
              mobile, and technology services, Designed to meet your goals.
            </p>
            <Link to="">
              <ButtonTransparent label="Contact Us" />
            </Link>
          </div>
          <SendAMessage />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
