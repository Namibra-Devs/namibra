import PositionsListCard from "./PositionsListCard";

const OpenPositions = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-24">
        <div className="mb-14 text-center">
          <h3 className="text-xl text-slate-600">Open Positions</h3>
          <h2 className="heading text-3xl font-semibold text-black">
            Join Our Dynamic Team.
          </h2>
        </div>
        <PositionsListCard />
      </div>
    </section>
  );
};

export default OpenPositions;
