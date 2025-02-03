import ButtonTransparent from "../../../components/buttons/ButtonTransparent";

const CTA = () => {
  return (
    <section className="bg-ctabg bg-primary bg-center bg-cover bg-no-repeat ">
      <div className="px-6 lg:px-24 py-24">
        <div className="text-left text-white w-full lg:max-w-[75%]">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-10">
            We empower our clients with transformative, goal oriented solutions.
          </h2>
          <ButtonTransparent label="Talk to Us" link="/contact-us" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
