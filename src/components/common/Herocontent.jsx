import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroContent = ({ onOpenCta }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10 text-left">
      {/* Title */}
      <p className="font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight text-[#183942] w-[300px] xs:w-[350px] sm:w-[400px] md:w-[500px] lg:w-[616px] xl:w-full">
        <span>We</span>
        <span className="text-[#183942d1]"> are</span>
        <br />
        <span>Flexirl.com</span>
      </p>

      {/* Description */}
      <div className="flex flex-col justify-center items-start">
        <p className="font-syne font-normal text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-tighter leading-snug text-[#183942c4] max-w-[250px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-lg xl:max-w-xl">
          We enjoy the pleasure of{" "}
          <span className="text-[#ef4b6e] font-normal">working</span>
          <br />
          with some really cool disruptive startups <br /> from all{" "}
          <span className="text-[#ef4b6e] font-normal">around the globe.</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 xs:space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 mt-4 xs:mt-5 sm:mt-6">
        <div className="relative">
          <button onClick={onOpenCta} className="flex items-center justify-center px-2 xs:px-3 sm:px-4 py-1 xs:py-2 sm:py-2 rounded-[47px] border border-solid border-black text-[#183942] font-syne text-xs xs:text-sm sm:text-base md:text-lg hover:bg-black hover:text-white transition-colors duration-200 shadow-sm hover:shadow-md">
            Get in Touch
          </button>
        </div>
        <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 lg:space-x-4 xl:space-x-5">
          <a href="#projects" onClick={(e)=>{e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'});}} className="font-syne font-normal text-xs xs:text-sm sm:text-base md:text-lg hover:underline cursor-pointer">
            See Our Works
          </a>
          <GoArrowUpRight className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 text-[#183942]" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
