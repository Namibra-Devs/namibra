import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full lg:w-2/3 bg-gray-100 pl-6 lg:pl-14 pr-6 lg:pr-24 py-24">
      <h2 className="text-4xl font-bold mb-4">Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
            <div className="flex space-x-4">
            <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
                type="text"
                name="phone"
                placeholder="Enter number"
                value={formData.phone}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
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
            <button type="submit" onClick={handleSubmit} className="w-full bg-primary hover:bg-gray-950 duration-700 ease py-3 px-10 rounded text-lg font-semibold text-white">
              Submit Your Message
            </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
