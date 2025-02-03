import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-24">
        <div className="mb-14 text-center">
          <h3 className="text-xl text-slate-600">Our Team</h3>
          <h2 className="heading text-3xl font-semibold text-black">
            Meet The Team That Operates Namibra
          </h2>
        </div>
        <TeamCard />
      </div>
    </section>
  );
}; 

export default OurTeam;