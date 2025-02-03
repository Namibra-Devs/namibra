import About1 from "../../../assets/aboutus/1.png";
import About2 from "../../../assets/aboutus/2.png";
import About3 from "../../../assets/aboutus/3.png";

const AboutUsSection = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 py-24">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-14 lg:mb-0 gap-7 lg:gap-14">
          <div className="w-full lg:max-w-[50%] rounded-lg">
            <img
              src={About1}
              alt=""
              className="rounded-lg w-full min-h-72 object-cover"
            />
          </div>
          <div className="w-full lg:max-w-[50%]">
            <h2 className="heading text-3xl font-semibold text-black">
              About Namibra
            </h2>

            <p className="mt-3 mb-9 text-slate-600">
              Namibra is a leading digital agency dedicated to empowering
              businesses and individuals with innovative digital solutions.{" "}
              <br /> <br /> With our expertise in mobile app development,
              software development, web development, and Digital marketing, we
              help our clients ride the wave of digital transformation. <br />
              <br /> At Namibra, we believe in collaboration, communication, and
              delivering exceptional results. We understand the unique
              challenges and opportunities in the digital world and provide
              personalized solutions that drive growth and success.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-end gap-14 mb-20">
          <div className="w-full lg:max-w-[50%]">
            <h3 className="text-slate-800 text-3xl font-semibold">
              We make sure your <span className="italic text-black">idea </span>
               and <span className="italic text-black">creation </span>
              are delivered with great{" "}
              <span className="italic text-black">pleasure.</span>
            </h3>
          </div>
          <div className="w-full lg:max-w-[50%]">
            <img
              src={About2}
              alt="About image"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
          <div className="w-full lg:max-w-[50%]">
            <h2 className="heading text-3xl font-semibold text-black mb-6">
              Training & Support
            </h2>
            <p className="text-slate-600">
              Namibra provides continuous training and support to all our
              clients. We ensure that all our solutions are adequately
              maintained over the life-span of the product - and we are with you
              every step of the way throughout the process
            </p>
          </div>
          <div className="w-full lg:max-w-[50%]">
            <img
              src={About3}
              alt="About image"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
