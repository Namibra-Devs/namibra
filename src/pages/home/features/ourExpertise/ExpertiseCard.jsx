import cardData from "./expertiseData";
import { CgAlignRight } from "react-icons/cg";
const ExpertiseCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 -mb-44">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-custom-light group hover:shadow-custom-dark transition-all duration-700 ease rounded-2xl overflow-hidden">
          <div className="p-5 text-left">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-gray-600 my-2 italic">{card.description}</p>
            {card.varieties.map((item, index) => (
                <p key={index} className="text-gray-600 text-[15px] pb-2 flex items-start"><CgAlignRight className="mr-2 text-xl" />{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ExpertiseCard