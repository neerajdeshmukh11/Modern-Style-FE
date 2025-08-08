import { curve, heroBackground } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";

// import HeroSlider from "./HeroSlider"; // Import your slider component

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Unlock the Power of Intelligent &nbsp;AI&nbsp; Solutions with{" "}
            <span className="inline-block relative">
              Encegen{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Transform your workflows and accelerate growth through custom AI, software integrations, and digital expertise.
          </p>

          {/* Add some spacing before slider */}
          {/* <div className="mt-16">
            <HeroSlider />
          </div> */}
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;