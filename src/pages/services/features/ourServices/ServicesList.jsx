import ButtonFilled from "../../../../components/buttons/ButtonFilled";
const ServicesList = ({ services, showViewMore }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-custom-light group hover:shadow-inner border transition-all duration-700 ease rounded-2xl overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full min-h-32 object-cover group-hover:brightness-75 duration-700"
            />
            <div className="p-5 text-left">
              <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* "View More" button (Only show when needed) */}
      {showViewMore && (
        <div className="flex justify-center mt-4 text-center">
          <ButtonFilled label="Learn More" link="/services" />
        </div>
      )}
    </section>
  );
};

export default ServicesList;
