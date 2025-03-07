import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Services from "./pages/services/Services";
import Careers from "./pages/careers/Careers";
import OurPortfolio from "./pages/ourPortfolio/OurPortfolio";
import Testimonials from "./pages/testimonials/Testimonials";
import ExpertiseStudy from "./pages/expertiseStudy/ExpertiseStudy";
import Contactus from "./pages/contactus/Contactus";
import Footer from "./components/layouts/Footer";
import UnderDevelopmentOverlay from "./components/utils/UnderDevelopmentOverlay";
import Preloader from "./components/utils/Preloader";
import SmoothScrollToTop from "./components/utils/SmoothScrollToTop";
import Clients from "./pages/clients/Clients";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <SmoothScrollToTop />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <UnderDevelopmentOverlay />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/portfolio" element={<OurPortfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/expertise-study" element={<ExpertiseStudy />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact-us" element={<Contactus />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
