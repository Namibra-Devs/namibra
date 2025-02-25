import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { TbLoader } from "react-icons/tb";
import { VscError } from "react-icons/vsc";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
        setFormData({name: "", phone: "", email: "", message: "", subscribe: false});
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
    <div className="w-full lg:w-2/3 bg-gray-100 pl-6 lg:pl-14 pr-6 lg:pr-24 py-24">
      <h2 className="text-4xl font-bold mb-4">Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
            <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
                type="text"
                name="phone"
                placeholder="Enter number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            </div>

            <input
            type="email"
            name="email"
            placeholder="Enter email here"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />

            <textarea
            name="message"
            placeholder="Type here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none"
            />

            <div className="flex items-center">
            <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mr-2"
            />
            <label className="text-gray-600 text-xs">
                Subscribe to our mailing list to get updates on our special offers, discounts, and upcoming events?
            </label>
            </div>
        </div>
        <div className="mt-10 w-full">
            <button type="submit" onClick={handleSubmit} className={`w-full text-white flex justify-center items-center gap-1 bg-primary hover:bg-gray-950 duration-700 ease 
              py-3 px-10 rounded text-lg font-semibold text-white"
              ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
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
                : "Send Your Message"}
            </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
