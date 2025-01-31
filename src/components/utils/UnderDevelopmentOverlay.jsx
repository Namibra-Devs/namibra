import MaintainanceIllustrationSvg from "../../assets/site-maintainance-svg.svg";
import { GoGear } from "react-icons/go";
const UnderDevelopmentOverlay = () => {

    const handleExplore = () => {
        // Just hide the overlay
        const overlay = document.getElementById('under-development-overlay');
        if (overlay) {
        overlay.style.display = 'none'; // Hide the overlay using inline style
        }
    };

  const handleExit = () => {
    window.location.href = "https://www.google.com"; // Or any other URL
  };

  return (
    <div id="under-development-overlay" className="fixed top-0 left-0 w-full h-full bg-primary z-50 flex flex-col items-center justify-center">
      <div className="text-center p-6">
        <div className="relative flex justify-center mb-4">
          <img src={MaintainanceIllustrationSvg} alt="" />
          <GoGear className="absolute bottom-5 text-white text-2xl animate-spin-delay" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-white">Site Under Development (Namibra.io)</h2>
        <p className="mb-4 text-white text-sm">Would you like to explore it?</p>
        <div className="flex justify-center space-x-4">
          <button onClick={handleExplore} className="bg-blue-500 hover:bg-blue-700 duration-700 ease text-white font-bold py-2 px-10 rounded-full">
            Yes
          </button>
          <button onClick={handleExit} className="border-2 hover:bg-blue-950 hover:border-blue-700 duration-700 ease text-white font-bold py-2 px-10 rounded-full">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

  

export default UnderDevelopmentOverlay