import { LiaQuoteRightSolid } from "react-icons/lia";
import { LiaQuoteLeftSolid } from "react-icons/lia";

import testimonyData from "./testimonyData"

const TeamTestimonialsList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
      {testimonyData.map((testy, i) => (
        <div key={i} className="relative min-h-72 border-2 border-slate-200 rounded-lg p-4">
          <span className="absolute right-6 top-4 flex items-center"><LiaQuoteLeftSolid className="text-gray-300 text-3xl" /><LiaQuoteRightSolid className="text-gray-300 text-3xl" /></span>
          <div className="mb-4 flex items-center gap-3">
            <img src={testy.profile} alt={testy.name} className="w-14 h-14 mb-1 object-cover rounded-full" />
            <span>
                <h2 className="text-lg font-semibold">{testy.name}</h2>
                <p className="text-slate-600 text-sm">{testy.role}</p>
            </span>
          </div>
          <p className="text-slate-600 my-4">{testy.description}</p>
        </div>
      ))}
    </section>
  )
}

export default TeamTestimonialsList