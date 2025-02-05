
import positionsData from "./positionsData";
import { SlLocationPin } from "react-icons/sl";
import { SlClock } from "react-icons/sl";

const PositionsListCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
      {positionsData.map((pos, i) => (
        <div key={i} className="border-t border-slate-300 py-8 flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-xl">{pos.title}</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-300 text-slate-800 text-sm">{pos.dept}</span>
          </div>
          <p className="text-slate-600 my-4">{pos.des}</p>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-2"><SlLocationPin className="text-lg" /> Location</span>
            <span className="flex items-center gap-2"><SlClock className="text-lg" /> Contract Type</span>
          </div>

          <button className="bg-transparent px-4 py-2 rounded-lg border border-slate-600 text-sm hover:bg-primary hover:text-white duration-700">Apply Now</button>
        </div>
      ))}
    </section>
  );
};

export default PositionsListCard;
