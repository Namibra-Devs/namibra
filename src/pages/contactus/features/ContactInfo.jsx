import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { PiLink } from "react-icons/pi";

const ContactInfo = () => {
  return (
    <div className="w-full lg:w-1/2 pl-6 lg:pl-24 py-24 bg-white flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-4">We are here to help.</h2>
      <p className="text-gray-600 text-lg mb-6">
        Leave us a message using the form, or send us an e-mail, and we will be in touch shortly.
      </p>

      <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-3">
            <HiOutlineMail className="text-2xl text-gray-700" />
            <p className="text-gray-700 text-lg font-semibold">info@Namibra.com.ng</p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
            <HiOutlinePhone className="text-2xl text-gray-700" />
            <p className="text-gray-700 text-lg font-semibold">+233 0902-222-1212</p>
            </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mt-14">
            <a href="#" className="blogpost-social-icon"><PiLink className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></a>
            <a href="#" className="blogpost-social-icon"><FaLinkedin className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></a>
            <a href="#" className="blogpost-social-icon"><RiTwitterXFill className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></a>
            <a href="#" className="blogpost-social-icon"><FaFacebook className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></a>
        </div>
    </div>
  );
};

export default ContactInfo;
