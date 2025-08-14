import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import GetInTouch from "../components/GetInTouch";
import backgroundImage from "../assets/hero/hero-background.jpg";

const HomePage = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Hero />
      <AboutUs />
      <OurTeam />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
