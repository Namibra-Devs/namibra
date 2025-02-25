import ClientsHero from "../../components/heroSections/ClientsHero";
import ScrollToTop from "../../components/utils/ScrollToTop";
import ClientsLogoList from "./ClientsLogoList";

const Clients = () => {
  return (
    <>
      <ClientsHero />
      <section className="bg-white px-6 lg:px-24 py-24">
        <div className="mb-14 text-center">
          <h3 className="text-xl text-slate-600">Our Clients</h3>
          <h2 className="heading text-3xl font-semibold text-black">
            Our Amazing Clients
          </h2>
        </div>
        <ClientsLogoList />
      </section>
      <ScrollToTop/>
    </>
  );
};

export default Clients;
