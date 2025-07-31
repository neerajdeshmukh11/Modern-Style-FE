import React from "react";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
    </>
  );
};

export default HomePage;