import PositionsListCard from "./PositionsListCard";

const OpenPositions = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-24">
        <div className="mb-14 text-center">
          <h2 className="heading text-3xl font-semibold text-black mb-3">
            Open Positions
          </h2>
          <h3 className="text-lg text-slate-600"> Join Our Dynamic Team.</h3>
        </div>
        <PositionsListCard />
      </div>
    </section>
  );
};

export default OpenPositions;
