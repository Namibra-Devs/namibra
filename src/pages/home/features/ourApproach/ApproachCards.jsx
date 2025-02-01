import cardData from "./approachData"

const ApproachCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-custom-light group hover:shadow-inner transition-all duration-700 ease rounded-2xl overflow-hidden">
          <img src={card.image} alt={card.title} className="w-full h-42 object-cover group-hover:brightness-75 duration-700" />
          <div className="p-10 text-center">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ApproachCards