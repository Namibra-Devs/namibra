import logo from "../../assets/logo.png";
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import instagramIcon from "../../assets/icons/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20 relative overflow-hidden">
      <div className="mx-auto px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-40">
        {/* Left Section - Logo, Name, Contact */}
        <div className="flex-1">
          <div>
            <a href="/" className="text-4xl lg:text-4xl font-bold">
              Namibra
            </a>
          </div>
          <p className="text-lg my-3">
            Lorem ipsum diolor emet atet lorem ipsum dilore amet lorem iosum
            dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;
            mkldkmmckmm lksdls slddslkksd l
          </p>
          <p className="text-[18px]">+2338096542356</p>
          <p className="text-[18px]">info@namibra.com</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-5 text-sm">
            <li>
              <a href="/aboutus" className="hover:text-gray-400 text-[18px]">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400 text-[18px]">
                Services
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-gray-400 text-[18px]">
                Careers
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="hover:text-gray-400 text-[18px]"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-400 text-[18px]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex-2">
          <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 flex justify-center items-center w-full">
        <img src={logo} alt="Namibra" className="w-5 animate-spin-delay" />
      </div>{" "}
      {/* Bottom Section - Copyright */}
      <div className="text-center text-sm text-gray-400 mt-14">
        © 2023 Namibra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
