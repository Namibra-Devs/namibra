import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import instagramIcon from "../../assets/icons/instagram.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add animation delay when opening mobile menu
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  return (
    <nav
      className={`${
        isScrolled ? "bg-primary shadow-custom-dark" : "bg-transparent"
      } transition-all duration-700 fixed top-0 left-0 w-full z-40`}
    >
      <div className="mx-auto flex justify-between items-center py-6 px-6 lg:px-24">
        {/* Logo & Name */}
        <div className="text-white text-2xl font-bold flex items-center gap-3 relative z-50">
          <Link to="/">
            <img src={logo} alt="" className="w-6 lg:w-8" />
          </Link>
          <a href="/" className="text-white text-2xl lg:text-[34px] tracking-tighter mt-1">
            Namibra
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 text-white">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/careers" className="nav-link">
            Careers
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/clients" className="nav-link">
            Clients
          </Link>
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="social-icon hover:-translate-y-2 duration-700">
            <img src={facebookIcon} alt="Facebook" className="w-[25px] h-[25px]" />
          </a>
          <a href="#" className="social-icon hover:-translate-y-2 duration-700">
            <img src={twitterIcon} alt="Twitter" className="w-[25px] h-[25px]" />
          </a>
          <a href="#" className="social-icon hover:-translate-y-2 duration-700">
            <img src={linkedinIcon} alt="LinkedIn" className="w-[25px] h-[25px]" />
          </a>
          <a href="#" className="social-icon hover:-translate-y-2 duration-700">
            <img src={instagramIcon} alt="Instagram" className="w-[25px] h-[25px]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-50">
          <img
            src={menuIcon}
            alt="Menu"
            className={`${isOpen ? "scale-100" : "scale-90"} w-9 duration-500 ease text-white`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center 
            transition-all duration-500 transform-gpu origin-top ${
              isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"
            }`}
        >
          {isVisible && (
            <div className="text-white flex flex-col justify-center items-center py-5 space-y-4 w-full px-6">
              <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about-us" className="mobile-link" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/services" className="mobile-link" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/careers" className="mobile-link" onClick={() => setIsOpen(false)}>
                Careers
              </Link>
              <Link to="/portfolio" className="mobile-link" onClick={() => setIsOpen(false)}>
                Our Portfolio
              </Link>
              <Link to="/clients" className="mobile-link" onClick={() => setIsOpen(false)}>
                Clients
              </Link>
              <Link to="/contact-us" className="mobile-link" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          )}

          {/* Social Media Icons (Mobile) */}
          {isVisible && (
            <div className="flex space-x-6 mt-10">
              <a href="#" className="hover:opacity-80">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
