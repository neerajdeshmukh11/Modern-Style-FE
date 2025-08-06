import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ButtonGradient from "./assets/svg/ButtonGradient";

import Preloader from "./components/Preloader";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 4500); // Delay 4.5 seconds
  return () => clearTimeout(timer);
}, []);


  return (
    <>
      <CustomCursor />
      
      {/* Show only Preloader during loading */}
      {isLoading && <Preloader />}
      
      {/* Show the complete app only after loading */}
      {!isLoading && (
        <>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header openNavigation={openNavigation} setOpenNavigation={setOpenNavigation} />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            
            <Footer />
          </div>
          <ButtonGradient />
        </>
      )}
    </>
  );
};

export default App;
