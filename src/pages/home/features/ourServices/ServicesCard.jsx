import ButtonFilled from "../../../../components/buttons/ButtonFilled";
import cardData from "./servicesData";
const ServicesCard = () => {
  return (
    <div className="text-center">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-custom-light group hover:shadow-inner border transition-all duration-700 ease rounded-2xl overflow-hidden">
          <img src={card.image} alt={card.title} className="w-full min-h-32 object-cover group-hover:brightness-75 duration-700" />
          <div className="p-5 text-left">
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
      <ButtonFilled label="Learn More"/>
    </div>
  )
}

export default ServicesCard