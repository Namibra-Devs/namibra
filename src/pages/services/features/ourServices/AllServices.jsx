import ServicesList from "./ServicesList";
import servicesData from "./servicesData";

const AllServices = () => {
  return (
    <section id="allservices" className="bg-white">
      <div className="px-6 lg:px-24 pb-14">
        <div className="mb-14 text-center">
          <h3 className="text-xl text-slate-600">Our Services</h3>
          <h2 className="heading text-3xl font-semibold text-black">
            Results-Driven, Experience Given
          </h2>
        </div>
        <ServicesList services={servicesData} showViewMore={false} />
      </div>
    </section>
  );
};

export default AllServices;
