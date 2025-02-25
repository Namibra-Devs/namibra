import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="fixed h-screen inset-0 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-9xl font-bold tracking-widest text-white animate-pulse">
        404
      </h1>
      <p className="text-xl md:text-2xl text-center mt-4 text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/80 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out"
      >
        <FaHome size={15} className="-mt-0.5" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
