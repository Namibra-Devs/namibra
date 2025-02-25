import ButtonFilled from "../../../../components/buttons/ButtonFilled";
import portfolioData from "../../../ourPortfolio/features/portfolioData";

const SelectedPortfolio = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioData[0].projects.slice(0, 3).map((project) => (
            <div key={project.id} className="min-h-44 shadow-custom-light rounded-2xl overflow-hidden">
               <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-300 scale-110 hover:scale-105"/>
                <div className="px-4 py-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-500 leading-tight">{project.description}</p>
                </div>
            </div>
          ))}
    </div>
    <div className="text-center mt-10">
        <ButtonFilled label="View More" link="/portfolio#portfolio" />
    </div>
    </>
  )
}

export default SelectedPortfolio