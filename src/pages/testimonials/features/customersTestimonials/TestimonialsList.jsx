import ButtonFilled from "../../../../components/buttons/ButtonFilled";
import StarFull from "../../../../assets/icons/star-full.png";
import StarEmpty from "../../../../assets/icons/star-empty.png";
const TestimonialsList = ({testimonial, showMore}) => {

  return (
    <section className="text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        {testimonial.map((testimony, index) => (
          <div key={index} className="bg-white">
            <div className="text-left">
              <span className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }, (_, idx) => (
                  <img
                    key={idx}
                    src={idx < testimony.rate ? StarFull : StarEmpty}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </span>
              <p className="text-gray-600 my-2 italic">{testimony.message}</p>
              <div className="flex items-center gap-2">
                <img
                  src={testimony.img}
                  alt={testimony.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-sm font-sans">
                    {testimony.name}
                  </h1>
                  <p className="text-slate-500 text-sm">{testimony.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* "View More" button (Only show when needed) */}
      {showMore && (
        <div className="flex justify-center mt-4 text-center">
          <ButtonFilled label="Show More" link="/testimonials" />
        </div>
      )}
    </section>
  );
};

export default TestimonialsList;
