import { Link } from "react-router-dom";
const ButtonOutline = ({ label, link }) => {
  return (
    <Link to={link}>
      <button className="bg-primary border hover:bg-gray-950 py-3 px-10 rounded text-[24px] font-semibold text-white">
        {label}
      </button>
    </Link>
  );
};

export default ButtonOutline;
