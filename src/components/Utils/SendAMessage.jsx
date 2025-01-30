import React from "react";

const SendAMessage = () => {
  return (
    <div className="bg-white/10 backdrop-blur-0 backdrop-brightness-90 text-white p-10 rounded-lg">
      <h2 className="text-[24px] font-bold text-center">Request a call-back</h2>
      <p className="text-center text-white mb-10">Get in touch with us</p>

      <form className="space-y-6">
        {/* Name & Number - Flex Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 bg-transparent border border-gray-400 rounded-lg py-3 px-4 text-[15px] text-white placeholder-white focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Your Number"
            className="flex-1 bg-transparent border border-gray-400 rounded-lg py-3 px-4 text-[15px] text-white placeholder-white focus:outline-none"
          />
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Describe your project"
          rows="4"
          className="w-full bg-transparent border border-gray-400 rounded-lg py-2 px-4 text-[15px] text-white placeholder-white focus:outline-none"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-transparent hover:bg-[#261818] hover:bg-opacity-80 text-white font-semibold text-[20px] py-3 border border-gray-400 rounded-lg transition"
        >
          Send A Request
        </button>
      </form>
    </div>
  );
};

export default SendAMessage;
