import LibertyEstate from "../../../assets/our-portfolio/liberty-estate.png";
import ProjectOne from "../../../assets/our-portfolio/projectone.png";

const portfolioData = [
  {
    id: 1,
    category: "Website Designs",
    projects: [
      {
        id: 101,
        image: LibertyEstate,
        title: "E-Commerce Website",
        category: "Website Designs",
        description: "An elegant e-commerce platform for online shopping.",
      },
      {
        id: 102,
        image: ProjectOne,
        title: "Travel App UI",
        category: "Mobile App Designs",
        description: "A modern travel booking mobile application UI.",
      },
      {
        id: 103,
        image: ProjectOne,
        title: "Construction Company Lpd",
        category: "Mobile App Designs",
        description: "A construction company mobile and web application UI.",
      },
    ],
  },
  {
    id: 2,
    category: "Mobile App Designs",
    projects: [
      {
        id: 201,
        image: ProjectOne,
        title: "Travel App UI",
        category: "Mobile App Designs",
        description: "A modern travel booking mobile application UI.",
      },
      {
        id: 202,
        image: LibertyEstate,
        title: "Fitness App",
        category: "Web & Mobile App Development",
        description: "A complete fitness tracking mobile application.",
      },
    ],
  },
  {
    id: 3,
    category: "Web & Mobile App Development",
    projects: [
      {
        id: 301,
        image: LibertyEstate,
        title: "Portfolio Website",
        category: "Website Designs",
        description: "A stylish personal portfolio website.",
      },
      {
        id: 302,
        image: ProjectOne,
        title: "Portfolio Website",
        category: "Website Designs",
        description: "A stylish personal portfolio website.",
      },
    ],
  },
];

export default portfolioData;
