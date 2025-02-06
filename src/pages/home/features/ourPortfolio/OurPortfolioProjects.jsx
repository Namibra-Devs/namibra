import Shape from "../../../../assets/icons/shape.png";
import ArrowC from "../../../../assets/icons/Arrow.png";
import SelectedPortfolio from "./SelectedPortfolio";
// import ProjectOne from "../../../../assets/our-portfolio/projectone.png";


const OurPortfolioProjects = () => {

  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-24">
        <h3 className="subtitle my-8 text-black flex items-center gap-2">
          <img src={ArrowC} alt="Arrow" className="w-10" />
          Our Portfolio
        </h3>
        <div className="flex flex-col items-center text-center mb-14">
          <span>
            <img src={Shape} alt="Ahape" className="w-28" />
          </span>
          <h2 className="text-3xl font-medium text-black my-2">
            Our Projects
          </h2>
          <h3 className="text-slate-600 text-sm px-0 lg:px-64">
            We have delivered a vast range of solutions that have made a
            significant difference in our clients' businesses. Here are some of
            our projects.
          </h3>
        </div>
        <SelectedPortfolio/>
      </div>
    </section>
  );
};

export default OurPortfolioProjects;
