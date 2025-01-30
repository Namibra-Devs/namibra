import Navbar from "../Layouts/Navbar"

const CareersHero = () => {
  return (
    <section className="bg-careersbg bg-cover bg-center bg-no-repeat min-h-screen w-full">
    <Navbar />
    <div className="flex justify-center items-center min-h-screen py-20 px-6 lg:px-10">
      <h2 className="text-[30px] md:text-[48px] max-w-full md:max-w-xl text-center text-white leading-tight font-semibold">
        Empower Your Career With Namibra
      </h2>
    </div>
  </section>
  )
}

export default CareersHero