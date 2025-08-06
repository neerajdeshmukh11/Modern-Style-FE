import React from "react";
import backgroundImg from '../assets/hero/hero-background.jpg';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-tl from-[#0c011a] to-[#1b1a2b] overflow-hidden">
      {/* Hero Background with blur and color overlay */}
      <img
        src={backgroundImg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-80"
      />

      {/* Only Animated Text (no image, no navbar) */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mt-10 text-center animate-fadeIn">
          <h2 className="text-2xl font-bold tracking-wide text-white neon-text drop-shadow-lg">
            Loading your <span className="text-ai-blue">AI</span> Experience <br /> with Encegen
          </h2>
          <div className="mt-2 flex items-center justify-center gap-1">
            <span className="preloader-dot delay-0"></span>
            <span className="preloader-dot delay-100"></span>
            <span className="preloader-dot delay-200"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
