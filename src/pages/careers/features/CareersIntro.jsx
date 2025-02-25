import Career1 from "../../../assets/careers/img1.jpg";
import Career2 from "../../../assets/careers/img2.jpg";

const CareersIntro = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 py-24">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-12 gap-6 lg:gap-14">
          <div className="w-full lg:max-w-[50%] rounded-lg">
            <img
              src={Career1}
              alt="career image"
              className="rounded-2xl w-full min-h-72 object-cover"
            />
          </div>
          <div className="w-full lg:max-w-[50%]">
            <h2 className="heading text-3xl font-semibold text-black">
              Empower Your Career with Namibra: Where Innovation Thrives.
            </h2>

            <p className="mt-3 mb-6 text-slate-600">
              Our team is comprised of passionate individuals who thrive on
              creativity, collaboration, and pushing the boundaries of what's
              possible.
              <br />
              <br />
              As a leading digital agency, we're dedicated to
              empowering businesses and individuals with cutting-edge solutions
              that drive growth and success. If you're ready to join a dynamic
              team and make a real impact in the digital world, explore our
              career opportunities below.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-end gap-14">
          <div className="w-full lg:max-w-[50%]">
            <h3 className="heading text-3xl font-semibold text-black">
              Company Culture
            </h3>
            <p className="mt-3 text-slate-600">
              At Namibra, our vibrant company culture thrives on collaboration,
              communication, and excellence. We value diversity and inclusivity,
              fostering an environment where every team member's unique talents
              are celebrated and respected. We believe in continuous learning
              and professional growth, empowering our employees to take
              ownership of their work and strive for excellence.
              <br />
              <br />
              Transparency and open dialogue are at the heart of our culture,
              ensuring that everyone has a voice and can contribute to our
              collective success. Above all, we are passionate about making a
              positive impact in the digital world, delivering exceptional
              results for our clients, and creating a supportive and inclusive
              workplace where everyone can thrive.
            </p>
          </div>
          <div className="w-full lg:max-w-[50%] rounded-lg overflow-hidden">
            <img
              src={Career2}
              alt="career image"
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersIntro;
