// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

// Shared Components (visible on all pages, like Header and Footer)
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ButtonGradient from "./assets/svg/ButtonGradient"; // If this is a globally rendered element

// Import all your new page components (you need to create these files)
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage"; // For "Contact Us"

const App = () => {
  // You might have state for openNavigation here, passed to Header
  const [openNavigation, setOpenNavigation] = React.useState(false); // Example state

  return (
    <>
      <CustomCursor />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* Pass openNavigation and setOpenNavigation if Header uses them for mobile menu */}
        <Header openNavigation={openNavigation} setOpenNavigation={setOpenNavigation} />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Services Page */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Blogs Page */}
          <Route path="/blogs" element={<BlogsPage />} />

          {/* Careers Page */}
          <Route path="/careers" element={<CareersPage />} />

          {/* Contact Us Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Optional: A 404 Not Found Page */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;