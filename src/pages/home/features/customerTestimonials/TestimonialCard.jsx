import ButtonFilled from "../../../../components/buttons/ButtonFilled";
import cardData from "./testimonialsData";
import StarFull from "../../../../assets/icons/star-full.png";
import StarEmpty from "../../../../assets/icons/star-empty.png";
const TestimonialCard = () => {

  return (
    <div className="text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white">
            <div className="text-left">
              <span className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }, (_, idx) => (
                  <img
                    key={idx}
                    src={idx < card.rate ? StarFull : StarEmpty}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </span>
              <p className="text-gray-600 my-2 italic">{card.message}</p>
              <div className="flex items-center gap-2">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-sm font-sans">
                    {card.name}
                  </h1>
                  <p className="text-slate-500 text-sm">{card.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonFilled label="View More" />
    </div>
  );
};

export default TestimonialCard;
