import cultureData from "./cultureData";

const CultureCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
      {cultureData.map((culture, index) => (
        <div key={index} className="min-h-72 border-2 border-slate-200 rounded-lg p-4">
          <div className="text-left">
            <span className="flex items-center p-2 rounded-md border-2 border-slate-200 w-fit">
              <img src={culture.icon} alt={culture.title} className="w-8" />
            </span>
            <h2 className="font-semibold mt-5 mb-3">{culture.title}</h2>
            <p className="text-slate-600">{culture.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CultureCard;
