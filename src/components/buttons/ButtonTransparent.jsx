const ButtonTransparent = ({ label }) => {
  return (
    <button className="bg-transparent border hover:bg-gray-950 hover:border-primary hover:bg-opacity-80 duration-700 ease py-3 px-14 rounded text-xl font-semibold text-white">
      {label}
    </button>
  );
};

export default ButtonTransparent;
