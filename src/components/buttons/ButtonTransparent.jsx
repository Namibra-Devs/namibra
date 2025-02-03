import { Link } from "react-router-dom";

const ButtonTransparent = ({ label, link }) => {
  return (
    <Link to={link}>
      <button className="bg-transparent border hover:bg-gray-950 hover:border-primary hover:bg-opacity-80 duration-700 ease py-3 px-10 rounded text-xl font-semibold text-white">
        {label}
      </button>
    </Link>
  );
};

export default ButtonTransparent;
