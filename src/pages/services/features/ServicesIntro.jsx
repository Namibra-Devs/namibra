import ServiceIntroImg from "../../../assets/services/s1.png";
import ButtonFilled from "../../../components/buttons/ButtonFilled";
const ServicesIntro = () => {
  return (
    <section className="bg-white px-6 lg:px-24 py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
        <div className="w-full lg:max-w-[50%] rounded overflow-hidden">
          <img
            src={ServiceIntroImg}
            alt="Intro image"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full lg:max-w-[50%]">
          <h2 className="heading text-3xl lg:text-4xl font-semibold text-black mb-6">
            A Great User Experience Is Our First Priority
          </h2>
          <p className="text-slate-600 mb-8">
            At Namibra Digital, we deliver a full range of services to enhance
            your digital presence and drive success. From impactful designs and
            innovative development to strategy, effective communications, our
            expert team provides tailored solutions to amplify your brand.
          </p>

          <ButtonFilled label="Contact Us" link="/contact-us" />
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
