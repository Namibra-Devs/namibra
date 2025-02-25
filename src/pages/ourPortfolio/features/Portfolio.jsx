import { useState } from "react";
import portfolioData from "./portfolioData";
import { motion } from "framer-motion"; // Import Framer Motion

const categories = [
  "Show All",
  "Website Designs",
  "Mobile App Designs",
  "Web & Mobile App Development",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  // Get projects based on selected category
  const filteredProjects =
    selectedCategory === "Show All"
      ? portfolioData.flatMap((category) => category.projects) // Flatten all projects
      : portfolioData
          .filter((category) => category.category === selectedCategory)
          .flatMap((category) => category.projects);

  return (
    <section id="portfolio" className="px-6 lg:px-24 py-24">
    
      {/* Tabs */}
      <div className="flex space-x-2 md:space-x-6 justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-xs md:text-lg font-medium ${
              selectedCategory === category
                ? "text-black bg-gray-200 py-2 px-2 md:px-4 border-b-2 border-gray-300 rounded-lg"
                : "text-gray-500 py-2 px-4 bg-gray-50 rounded-lg"
            } hover:text-black transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }} // Animation on mount
            animate={{ opacity: 1, scale: 1, y: 0 }} // Final state
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            className="min-h-44 shadow-custom-light rounded-2xl overflow-hidden"
            >
            <div className="overflow-hidden">
              <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-300 scale-110 hover:scale-125"
              />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-500 leading-tight">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;