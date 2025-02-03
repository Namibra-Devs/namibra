import { Link } from "react-router-dom";
const ButtonFilled = ({ label, link }) => {
  return (
    <Link to={link}>
      <button className="bg-primary hover:bg-gray-950 duration-700 ease py-3 px-10 rounded text-xl font-semibold text-white">
        {label}
      </button>
    </Link>
  );
};

export default ButtonFilled;
