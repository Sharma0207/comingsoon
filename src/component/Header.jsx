import React from "react";
import comingSoonVideo from "../assets/comingsoon.mp4";
import logoirl from "../assets/logoirl.png";

const Header = () => (
  <header className="relative flex justify-between items-start mb-20">
    <h1 className="text-lg font-bold">
      <span className="text-yellow-400 text-3xl">FLEX</span>
      <span className="text-white text-sm">
        <span className="text-yellow-400 text-3xl">I</span>n
        <span className="text-yellow-400 text-3xl">R</span>eal
        <span className="text-yellow-400 text-3xl">L</span>ife
      </span>
      <span className="text-sm text-gray-400 ml-1 self-end">.com</span>
    </h1>
    {/* Watch icon on the right */}

    {/* Tilted logo */}
    {/* Tilted logo */}
    {/* Big diagonal logo */}
    {/* <img
      src={logoirl}
      alt="flexIRL logo"
      className="absolute top-[20%] left-[-5%] w-[30%] rotate-[-25deg] pointer-events-none select-none bg-gray-500/20 p-8"
    /> */}
    {/* Huge diagonal background logo */}
    <img
      src={logoirl}
      alt="flexIRL logo"
      className="absolute top-1/2 left-1/4 -translate-x-[54%] -translate-y-[55%]
             w-[85%] rotate-[-25deg] opacity-15 pointer-events-none select-none z-0"
    />

    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-lg">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={comingSoonVideo}
        loop
        autoPlay
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </header>
);

export default Header;
