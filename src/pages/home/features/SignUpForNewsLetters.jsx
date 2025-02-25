import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { TbLoader } from "react-icons/tb";
import axios from "axios"; // Import Axios for API requests

const SignUpForNewsLetters = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); //Whether its: "idle" | "loading" | "success" | "error"
  const [message, setMessage] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  // Automatically hide status message after 3 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(""); // Clear status after 3 seconds
        setShowOverlay(false);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [status]);

  // Function to Validate Email Format
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  };

  // Handle Form Submission
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setShowOverlay(true);

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Invalid email address. Try again.");
      return;
    }

    setStatus("loading");
    setMessage("Subscribing...");

    try {
      const response = await axios.post("http://localhost:5000/api/subscribe", { email });

      setStatus("success");
      setMessage(response.data.message);
      setEmail(""); // Reset input on success
    } catch (error) {
      setStatus("error");
      setMessage(error.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <section className="bg-newslettersbg bg-cover bg-center bg-no-repeat px-6 lg:px-24 py-24 flex flex-col items-center relative">
      <h2 className="text-4xl font-medium my-2 text-white">Sign up to our newsletter</h2>
      <h3 className="text-lg text-white">
        Be the first to hear about our latest products and services
      </h3>

      {/* Form */}
      <form onSubmit={handleSubscribe} className="mt-12 flex w-full max-w-2xl bg-white p-2 rounded-lg shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-l-lg border-none text-gray-800 focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-black/80 duration-700 text-white px-10 rounded-[8.5px] font-medium"
          disabled={status === "loading"}
        >
          {status === "loading" ? <TbLoader className="animate-spin text-xl" /> : "Subscribe"}
        </button>
      </form>

      {/* Status Overlay */}
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center">
            {status === "success" && (
              <div className="flex flex-col items-center text-green-500">
                <FaCheckCircle className="text-4xl mb-2" />
                <p className="text-lg">{message}</p>
              </div>
            )}
            {status === "loading" && (
              <div className="flex flex-col items-center text-gray-600">
                <TbLoader className="text-4xl mb-2 animate-spin" />
                <p className="text-lg">{message}</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex flex-col items-center text-red-500">
                <VscError className="text-4xl mb-2" />
                <p className="text-lg">{message}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SignUpForNewsLetters;