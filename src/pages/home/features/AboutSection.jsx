import ButtonFilled from "../../../components/buttons/ButtonFilled";
import img1 from "../../../assets/home/img1.png";
const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-16 py-24">
        <h1 className="title">
          We adopt the digital environment and make the most of its
          possibilities.
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-end gap20">
          <div className="w-full lg:max-w-[50%]">
            <h3 className="subtitle my-4">Know about us</h3>
            <h2 className="heading">About Namibra</h2>

            <p className="mb-8 mt-5">
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
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
