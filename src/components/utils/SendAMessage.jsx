import {useState} from "react";


//React Icons
import { TbLoader } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";
import { RiArrowDropDownFill } from "react-icons/ri";
const SendAMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  console.log(formData);

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try{
      const response = await fetch("https://api.namibra.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if(response.ok){
        setStatus("success");
        setFormData({name: "", phone: "", email: "", service: "", message: ""});
        setTimeout(() => setStatus("idle"), 3000); 

      }else{
        setStatus("error");
      }
    }catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000); 
    }
  }

  return (
    <div className="bg-white/15 backdrop-blur-0 backdrop-brightness-90 w-full  z-20 text-white p-6 lg:p-10 rounded">
      <h2 className="text-2xl font-bold text-center">Request a call-back</h2>
      <p className="text-center text-white mb-10">Get in touch with us</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Number - Flex Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="flex-1 w-full bg-transparent border border-white/30 rounded py-3 px-4 text-[15px] text-white placeholder-white focus:outline-none focus:ring-0 focus:ring-white focus:border-white"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Number"
            className="flex-1 w-full bg-transparent border border-white/30 rounded py-3 px-4 text-[15px] text-white placeholder-white focus:outline-none focus:ring-0 focus:ring-white focus:border-white"
          />
        </div>
        {/* Email & Services List - Flex Row */}
        <div className="flex flex-col gap-4 w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="flex-1 w-full bg-transparent border border-white/30 rounded py-3 px-4 text-[15px] text-white placeholder-white focus:outline-none focus:ring-0 focus:ring-white focus:border-white"/>
          <div className="relative w-full">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex-1 w-full appearance-none bg-transparent text-white border border-white/30 rounded py-3 px-4 text-[15px] focus:outline-none focus:bg-primary focus:ring-0 focus:ring-white focus:border-white"
          >
            <option className="text-white" value="">Select a service</option>
            <option className="text-white" value="sales_master">Sales Master</option>
            <option className="text-white" value="cast_right">Cast Right</option>
            <option className="text-white" value="erp">ERP</option>
            <option className="text-white" value="other">Other</option>
          </select>

            {/* Custom White Arrow */}
            <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
                <RiArrowDropDownFill className="text-3xl" />
            </div>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project"
          rows="5"
          className="w-full bg-transparent border border-white/30 rounded py-2 px-4 text-[15px] text-white placeholder-white focus:outline-none focus:ring-0 focus:ring-white focus:border-white"></textarea>

        {/* Button */}
        <button
          type="submit"
          className={`w-full flex items-center justify-center gap-2 bg-transparent hover:bg-primary hover:border-primary hover:bg-opacity-80
            text-white font-semibold text-[20px] py-3 border border-white/30 rounded duration-700 ease ${
              status === "loading" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={status === "loading"}
        >
          {status === "loading" && <TbLoader className="animate-spin text-white text-xl" />}
          {status === "success" && <FaCircleCheck className="text-green-500 text-xl" />}
          {status === "error" && <VscError className="text-red-600 text-xl" />}

          {status === "loading"
            ? "Sending..."
            : status === "success"
            ? "Sent!"
            : status === "error"
            ? "Error! Try again"
            : "Send A Message"}
        </button>
      </form>
    </div>
  );
};

export default SendAMessage;
