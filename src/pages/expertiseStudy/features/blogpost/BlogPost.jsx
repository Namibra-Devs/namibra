import { PiLink } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import DesignThinking from "../../../../assets/expertise-study/Placeholder.png"
import blogData from "./blogData";
import BlogList from "./BlogList";

const BlogPost = () => {
  return (
    <section className="bg-white px-6 lg:px-24 pt-24 pb-14">
        <div className="max-w-4xl">
            {/* Blog Header */}
            <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">Blog &gt; Designs</p>
                <div className="flex items-center space-x-3">
                    <span className="blogpost-social-icon"><PiLink className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></span>
                    <span className="blogpost-social-icon"><FaLinkedin className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></span>
                    <span className="blogpost-social-icon"><RiTwitterXFill className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></span>
                    <span className="blogpost-social-icon"><FaFacebook className="text-gray-600 hover:text-blue-600 duration-700 text-lg" /></span>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">Design Thinking & Design Systems.</h1>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
                Design Thinking and Design Systems are two distinct approaches employed in the field of design,
                each serving unique purposes in the creation and development of products and solutions. 
                Design Thinking revolves around understanding and addressing user needs through a human-centered approach. 
                It emphasizes empathy, creativity, and iteration to solve complex problems.
            </p>

            {/* Blog Image */}
            <div className="my-10">
                <img
                src={DesignThinking}
                alt="Design Systems"
                className="w-full rounded-lg shadow-lg"
                />
            </div>

            {/* Content */}
            <div className="space-y-6">
                <p className="text-lg font-semibold">
                In contrast, Design Systems focus on establishing consistent design standards and components
                to ensure visual and functional coherence across multiple products or platforms. 
                <span className="font-bold text-blue-600"> Design Systems streamline the design and development process </span> 
                by providing a shared language and toolkit for designers and developers to work efficiently and collaboratively.
                </p>

                <p className="text-gray-700">
                While Design Thinking encourages exploration and experimentation, aiming to uncover new insights 
                and opportunities for improvement, Design Systems emphasize structure and organization, 
                aiming to establish a unified design language and streamline the design process across an organization or project.
                </p>

                {/* Quote Section */}
                <blockquote className="border-l-2 border-gray-500 pl-4 italic text-gray-800">
                Both Design Thinking and Design Systems are crucial in the design process, with Design Thinking 
                focusing on the process of ideation and problem-solving, and Design Systems establishing design coherence 
                and efficiency through standardized components and guidelines. By understanding the unique purposes of each 
                approach, designers and developers can create innovative and user-centric solutions while maintaining 
                consistency and scalability across multiple products or platforms.
                </blockquote>

                {/* Conclusion */}
                <h2 className="text-2xl font-bold">Conclusion</h2>
                <p className="text-gray-700">
                At Namibra Inc., we leverage Design Thinking and Design Systems to ensure the required solutions 
                needed by our users are met while maintaining consistency in product development.
                </p>
            </div>
        </div>
        {/* Checkout More Stories from Blog List*/}
        <div className="mt-20">
            <h3 className="text-3xl font-semibold text-black mb-10">Checkout More Stories</h3>
            <BlogList blogs={blogData} showMore={false} />
        </div>
    </section>
  );
};

export default BlogPost;
