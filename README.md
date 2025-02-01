# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---NAMIBRA---

## Overview

Namibra is a modern and responsive website built using React.js, Vite, and Tailwind CSS. It features a fully responsive Navbar, dynamic routing with React Router, and custom social media icons.

## Features

-Responsive Transparent Navbar with navigation menus and social media icons.

-Mobile-Friendly Menu that toggles when clicked.

-React Router for seamless navigation between pages.

-Custom PNG Icons for social media stored in assets/icons/.

-Tailwind CSS Styling for a clean and modern design.

-Installed React Icons

-Installed Framer Motion for animations

-Used Transparent Texture for the Moving Animation via: https://www.transparenttextures.com

## Folder Structure

namibra/
│── public/
│── src/
│ ├── assets/
│ │ ├── icons/
│ │ │ ├── facebook.png
│ │ │ ├── twitter.png
│ │ │ ├── linkedin.png
│ │ │ ├── instagram.png
│ ├── components/
│ │ ├── Buttons/
│ │ ├── HeroSections/
│ │ ├── Layouts/
│ │ │ ├── Footer.jsx
│ │ │ ├── Navbar.jsx
│ │ ├── Utils/
│ ├── pages/
│ │ ├── Aboutus/
│ │ ├── Careers/
│ │ ├── Contacts/
│ │ ├── ExpertiseStudy/
│ │ ├── Home/
│ │ ├── OurPortfolio/
│ │ ├── Services/
│ │ ├── Testimonials/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│── \_redirects
│── .gitignore
│── index.html
│── netlify.toml
│── package-lock.json
│── package.json
│── postcss.config.cjs
│── README.md
│── tailwind.config.js
│── vite.config.js

--+ Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/namibra.git
cd namibra

2. Install Dependencies

npm install

3. Start Development Server

npm run dev

The project will be available at http://localhost:5173.

4. Build for Production

npm run build

Technologies Used

React.js – Frontend framework

Vite – Fast development build tool

Tailwind CSS – Styling framework

React Router – Client-side routing

--+ Customization

To change social media icons, replace the images in src/assets/icons/.

--+ License

This project is licensed under the MIT License.
