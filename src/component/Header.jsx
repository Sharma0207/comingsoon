import React from "react";
import comingSoonVideo from "../assets/comingsoon.mp4";
import logoirl from "../assets/logoirl.png";

const Header = () => (
  <header
    className="relative flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start 
               gap-8 sm:gap-0 mb-20 px-4 sm:px-8"
  >
    {/* Left Title */}
    <h1 className="relative z-10 text-center sm:text-left text-lg font-bold leading-tight">
      <span className="text-yellow-400 text-4xl sm:text-5xl">FLEX</span>
      <span className="block sm:inline text-white text-base sm:text-lg">
        <span className="text-yellow-400 text-3xl sm:text-4xl">I</span>n
        <span className="text-yellow-400 text-3xl sm:text-4xl">R</span>eal
        <span className="text-yellow-400 text-3xl sm:text-4xl">L</span>ife
      </span>
      <span className="block sm:inline text-sm text-gray-400 ml-1">.com</span>
    </h1>

    {/* Background tilted logo (hidden on small screens) */}
    <img
      src={logoirl}
      alt="flexIRL logo"
      className="hidden sm:block absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 
                 w-[120%] sm:w-[70%] lg:w-[90%] rotate-[-25deg] opacity-15 
                 pointer-events-none select-none z-0"
    />

    {/* Right video watch animation */}
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 overflow-hidden rounded-xl shadow-lg z-10">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={comingSoonVideo}
        loop
        autoPlay
        muted
        playsInline
      />
    </div>
  </header>
);

export default Header;
