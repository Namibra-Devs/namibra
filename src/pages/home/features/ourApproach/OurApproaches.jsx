import ArrowC from "../../../../assets/icons/Arrow.png";
import ApproachCards from "./ApproachCards";
const OurApproaches = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-52">
        <h3 className="subtitle my-8 text-black flex items-center gap-2">
          <img src={ArrowC} alt="Arrow" className="w-10" />
          Our Approach
        </h3>
        <div className="text-center mb-14">
            <h3 className="text-slate-600">Our Approaches</h3>
            <h2 className="text-3xl font-medium text-black mt-4">We adopt the practices in delivering customer-centric solutions.</h2>
        </div>
        <ApproachCards/>
      </div>
    </section>
  );
};

export default OurApproaches;
