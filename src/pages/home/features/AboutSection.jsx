import ButtonFilled from "../../../components/buttons/ButtonFilled";
import img1 from "../../../assets/home/img1.png";
import img2 from "../../../assets/home/img2.png";
import ArrowC from "../../../assets/icons/Arrow.png";
const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 py-24">
        <div>
          <h1 className="title text-3xl font-medium w-full lg:max-w-[45%]">
            We adopt the digital environment and make the most of its
            possibilities.
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-20">
            <div className="w-full lg:max-w-[50%]">
              <h3 className="subtitle my-8 text-black flex items-center gap-2">
                <img src={ArrowC} alt="Arrow" className="w-10" />
                  Know about us
              </h3>
              <h2 className="heading text-xl font-medium text-black">
                About Namibra
              </h2>

              <p className="mb-8 mt-3 text-slate-600">
                Namibra is a leading digital agency dedicated to empowering
                businesses and individuals with innovative digital solutions.
                <br />
                <br />
                With our expertise in mobile app development, software
                development, web development, and Digital marketing, we help our
                clients ride the wave of digital transformation.
                <br />
                <br />
                At Namibra, we believe in collaboration, communication, and
                delivering exceptional results. We understand the unique
                challenges and opportunities in the digital world and provide
                personalized solutions that drive growth and success.
              </p>

              <ButtonFilled label="Learn More" />
            </div>

            <div className="w-full lg:max-w-[50%]">
              <img src={img1} alt="" className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mt-24">
          <div className="w-full lg:max-w-[50%]">
            <img src={img2} alt="" className="w-full" />
          </div>
          <div className="w-full lg:max-w-[50%]">
            <h2 className="heading text-xl font-medium text-black">
              Our Mission
            </h2>

            <p className="mt-3 mb-9 text-slate-600">
              To empower individuals and organisations through innovative
              digital solutions, optimising operations, and driving sustainable
              growth as a trusted partner in the digital era.
            </p>
            <h2 className="heading text-xl font-medium text-black">
              Our Vision
            </h2>

            <p className="mt-3 text-slate-600">
              To be the Go-To digital agency that transforms businesses through
              innovative technology solutions, shaping the digital landscape and
              enabling organization to surpass their goals and potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
