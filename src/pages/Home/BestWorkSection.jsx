import React from "react";
import DesignStare from "../Home/DesignStare";

const BestWorksSection = () => {
  return (
    <section
      id="bestworks"
      className="w-full bg-[#f9f5f2] py-8 sm:py-12 md:py-16 lg:py-0 ml-[4px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[150px] sm:gap-[170px] md:gap-[190px] lg:gap-[196px] justify-start items-center w-full p-[12px]">
          {/* Header section */}
          <div className="flex flex-col justify-start items-start w-auto">
            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[73px] text-center font-inter">
              <span className="font-medium uppercase text-[#183942]">D</span>
              <span className="font-medium lowercase text-[#183942]">esign</span>
              <span className="font-semibold lowercase text-[#183942]"> </span>
              <span className="font-light lowercase text-[#183942]">to</span>
              <span className="font-semibold lowercase text-[#183942]"> </span>
              <span className="font-light lowercase text-[#183942]">Stare</span>
            </h2>
          </div>
        </div>

        <div style={{ height: "520px", position: "relative" }}>
          <DesignStare
            bend={1.2}
            textColor="#ffffff"
            borderRadius={0.08}
            scrollSpeed={1.2}
            scrollEase={0.12}
          />
        </div>
      </div>
    </section>
  );
};

export default BestWorksSection;
