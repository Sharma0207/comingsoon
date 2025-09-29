import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroContentMobile = ({ onOpenCta }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start space-y-3  gap-1 text-left">
      <p className="font-black text-3xl xs:text-4xl sm:text-5xl md:text-5xl leading-5 tracking-tight text-[#183942] max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[450px]">
        <span>We</span>
        <span className="text-[#183942d1]"> are</span>
        <br />
        <span className="text-4xl xs:text-6xl sm:text-7xl md:text-8xl leading-tight tracking-tight text-[#183942] max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[450px]">
          Flexirl.com
        </span>
      </p>
      <div className="flex flex-col justify-start items-start ">
        <p className="font-syne font-normal text-xs xs:text-sm sm:text-base md:text-lg tracking-tighter leading-snug text-[#183942c4] max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[450px] text-left">
          We enjoy the pleasure of{" "}
          <span className="text-[#EF4B6E] font-normal">working</span>
          <br />
          with some really cool disruptive startups <br /> from all{" "}
          <span className="text-[#EF4B6E] font-normal">around the globe.</span>
        </p>
      </div>
      {/* Updated container to use flex-row and horizontal spacing for all sizes */}
      <div className="flex flex-row items-center space-x-4 mt-2 xs:mt-3 sm:mt-4 md:mt-6">
        <button onClick={onOpenCta} className="px-3 xs:px-4 py-1 xs:py-2 rounded-[47px] border border-solid border-[#183942] text-[#183942] font-syne text-xs xs:text-sm md:text-base hover:bg-[#183942] hover:text-white transition-colors duration-200 shadow-sm hover:shadow-md">
          Get in Touch
        </button>
        <div className="flex items-center space-x-1 xs:space-x-2">
          <a href="#projects" onClick={(e)=>{e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'});}} className="font-syne font-normal text-xs xs:text-sm md:text-base text-[#183942] hover:underline cursor-pointer">
            See Our Works
          </a>
          <GoArrowUpRight className="w-3 xs:w-4 h-3 xs:h-4 text-[#183942]" />
        </div>
      </div>
    </div>
  );
};

export default HeroContentMobile;
