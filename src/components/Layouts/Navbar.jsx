import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import instagramIcon from "../../assets/icons/instagram.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-6 px-6 md:px-10">
        {/* Logo & Name */}
        <div className="text-white text-2xl font-bold flex items-center gap-3 relative z-50">
          <Link to="/"><img src={logo} alt="" className="h-[40px]" /></Link>
          <a href="/" className="text-white text-[30px]">Namibra</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/careers" className="nav-link">Careers</Link>
          <Link to="/portfolio" className="nav-link">Our Portfolio</Link>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="social-icon"><img src={facebookIcon} alt="Facebook" className="w-[25px] h-[25px]" /></a>
          <a href="#" className="social-icon"><img src={twitterIcon} alt="Twitter" className="w-[25px] h-[25px]" /></a>
          <a href="#" className="social-icon"><img src={linkedinIcon} alt="LinkedIn" className="w-[25px] h-[25px]" /></a>
          <a href="#" className="social-icon"><img src={instagramIcon} alt="Instagram" className="w-[25px] h-[25px]" /></a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <img src={isOpen ? menuIcon : menuIcon} alt="Menu" className="duration-500 ease text-white" />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-5 space-y-6">
            <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about-us" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/services" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/careers" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link to="/portfolio" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Our Portfolio</Link>

            <div className="flex space-x-6">
              <a href="#" className="hover:opacity-80"><img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-80"><img src={twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-80"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-80"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
