
const SendAMessage = () => {
  return (
    <div className="bg-white/15 backdrop-blur-0 backdrop-brightness-90 w-full lg:w-10/12 z-20 text-white p-6 lg:p-10 rounded">
      <h2 className="text-2xl font-bold text-center">Request a call-back</h2>
      <p className="text-center text-white mb-10">Get in touch with us</p>

      <form className="space-y-6">
        {/* Name & Number - Flex Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 w-full bg-transparent border border-white/30 rounded py-3 px-4 text-[15px] text-white placeholder-white focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Your Number"
            className="flex-1 w-full bg-transparent border border-white/30 rounded py-3 px-4 text-[15px] text-white placeholder-white focus:outline-none"
          />
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Describe your project"
          rows="5"
          className="w-full bg-transparent border border-white/30 rounded py-2 px-4 text-[15px] text-white placeholder-white focus:outline-none"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-transparent hover:bg-primary hover:border-primary hover:bg-opacity-80 text-white font-semibold text-[20px] py-3 border border-white/30 rounded duration-700 ease"
        >
          Send A Request
        </button>
      </form>
    </div>
  );
};

export default SendAMessage;
