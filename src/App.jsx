import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Layouts/Footer";
import AboutsUs from "./pages/Aboutus/AboutsUs";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutsUs/>} />
      </Routes>
      <Footer />
    </Router>
   );
};

export default App;
