import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Layouts/Footer";
import AboutsUs from "./pages/Aboutus/AboutsUs";
import Services from "./pages/services/Services";
import Careers from "./pages/careers/Careers";
import OurPortfolio from "./pages/ourPortfolio/OurPortfolio";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutsUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/portfolio" element={<OurPortfolio/>} />
      </Routes>
      <Footer />
    </Router>
   );
};

export default App;
