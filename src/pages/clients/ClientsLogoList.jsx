import clientsData from "./clientsData"
const ClientsLogoList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clientsData.map((client, index) => (
          <a
            href={client.link}
            key={index}
            className="bg-white relative shadow-custom-light group hover:shadow-inner border transition-all duration-700 ease rounded-2xl overflow-hidden">
            <img
              src={client.logo}
              alt={client.name}
              className="w-full min-h-32 object-cover group-hover:scale-110 group-hover:brightness-75 duration-700"
            />
            <div className="bg-primary text-white p-4 text-left absolute left-0 right-0 bottom-0">
              <h2 className="text-lg font-semibold mb-2">{client.name}</h2>
            </div>
          </a>
        ))}
      </div>
  );
};

export default ClientsLogoList;