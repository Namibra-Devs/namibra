import ExpertiseCard from "./ExpertiseCard";

const OurExpertise = () => {
  return (
    <section className="bg-expertiseHomebg bg-center bg-cover bg-no-repeat">
      <div className="px-6 lg:px-24 py-24">
        <div className="text-left text-white mb-14 w-full lg:max-w-[50%]">
          <h3 className="text-white text-lg">Our Expertise</h3>
          <h2 className="text-4xl font-medium text-white my-4">
            At Namibra We are known for our outstanding results.
          </h2>
          <p className="text-lg text-white">
            By working together closely, we enable our clients to adopt the
            digital environment and make the most of its possibilities.
          </p>
        </div>
        <div className="-mb-64">
          <ExpertiseCard/>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
