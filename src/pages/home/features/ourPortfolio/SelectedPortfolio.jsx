import ButtonFilled from "../../../../components/buttons/ButtonFilled";
import portfolioData from "../../../ourPortfolio/features/portfolioData";

const SelectedPortfolio = () => {
  return (
    <section className="flex flex-col gap-10">
          {portfolioData[0].projects.slice(0, 2).map((project) => (
            <div key={project.id}>
              <img src={project.image} alt={project.title} className="w-full mb-10" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
    
          <div className="text-center mt-10">
            <ButtonFilled label="View More"link="/portfolio" />
          </div>
    </section>
  )
}

export default SelectedPortfolio