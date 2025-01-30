import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/layouts/Footer";
import AboutsUs from "./pages/Aboutus/AboutsUs";
import Services from "./pages/services/Services";
import Careers from "./pages/careers/Careers";
import OurPortfolio from "./pages/ourPortfolio/OurPortfolio";
import Testimonials from "./pages/testimonials/Testimonials";
import ExpertiseStudy from "./pages/expertiseStudy/ExpertiseStudy";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutsUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/portfolio" element={<OurPortfolio/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/expertise-study" element={<ExpertiseStudy/>} />
      </Routes>
      <Footer />
    </Router>
   );
};

export default App;
