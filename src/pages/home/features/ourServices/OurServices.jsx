import ArrowC from "../../../../assets/icons/Arrow.png";
import Shape from "../../../../assets/icons/shape.png";
import ServicesCard from "./ServicesCard";
const OurServices = () => {
  return (
    <section className="bg-gray-50">
      <div className="px-6 lg:px-24 py-24">
        <h3 className="subtitle mb-8 text-black flex items-center gap-2">
          <img src={ArrowC} alt="Arrow" className="w-10" />
          Our Services
        </h3>
        <div className="flex flex-col items-center text-center mb-14">
          <span>
            <img src={Shape} alt="Ahape" className="w-28" />
          </span>
          <h2 className="text-3xl font-medium text-black mt-2">
            What we do at Namibra.
          </h2>
        </div>
        <ServicesCard />
      </div>
    </section>
  );
};

export default OurServices;
