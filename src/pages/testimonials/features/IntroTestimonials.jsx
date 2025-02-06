import Lady from "../../../assets/testimonials/lady.jpg"
import Man from "../../../assets/testimonials/man.jpg"

const IntroTestimonials = () => {
  return (
    <section className="bg-white px-6 lg:px-24 py-24">
      <div className="mb-14 text-left">
        <h2 className="heading text-3xl font-semibold text-black mb-3">
          Customer Testimonials
        </h2>
        <h3 className="text-lg text-slate-600">
          This's what our clients says about us.
        </h3>
      </div>

      <div className="flex flex-col items-start gap-20">
        <div>
          <h2 className="text-3xl font-semibold text-black mb-8">Shanti Jewellry</h2>
          <img src={Lady} alt="A Lady" className="rounded-lg" />
          <div className="border-l-2 border-gray-500 pl-4 py-3 mt-10">
            <p className="italic text-gray-600 text-2xl font-medium w-full lg:max-w-2xl">“Selecting Namibra for our web development project was a standout  decision. Their team's creativity, technical expertise, and attention to detail shone throughout the process. We're thrilled with the outcome  and eagerly look forward to future collaborations with Namibra.”</p>
            <h3 className="font-semibold text-2xl text-black mt-4">Madam. Ernestina Agyapong</h3>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-black mb-8">MD. Jins Savings & Loans, MD. Parkteletech Africa</h2>
          <img src={Man} alt="A Man" className="rounded-lg" />
          <div className="border-l-2 border-gray-500 pl-4 py-3 mt-10">
            <p className="italic text-gray-600 text-2xl font-medium w-full lg:max-w-2xl">“The team at Namibra is top-notch. They listened to our needs and delivered customized solutions that exceeded our expectations. We've seen significant growth and improvement since working with them.”</p>
            <h3 className="font-semibold text-2xl text-black mt-4">Mr. Yusif Abubakar</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroTestimonials;
