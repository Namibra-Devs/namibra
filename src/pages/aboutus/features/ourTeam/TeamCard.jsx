import cardData from "./teamData/"
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { RxGlobe } from "react-icons/rx";

const TeamCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-14 mb-10">
      {cardData.map((card, index) => (
          <div key={index} className="overflow-hidden text-center">
            <div className="mb-3 flex flex-col items-center">
                <img src={card.profile} alt={card.name} className="w-16 h-16 mb-1 object-cover rounded-full" />
                <h2 className="text-lg font-semibold">{card.name}</h2>
                <p className="text-slate-600 text-sm">{card.role}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-600 text-sm">{card.description}</p>
                <div className="flex items-center gap-2 mt-2">
                    <a href={card.linkedin}><SiLinkedin /></a>
                    <a href={card.twitter}><FaXTwitter /></a>
                    <a href={card.portfolio}><RxGlobe /></a>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default TeamCard