import React from "react";
import HeroContentMobile from "./HeroContentMobile";
import beansvideo from "../../assets/beanshero.mp4";
import { StyledFixedNavigation } from "../common/FixedNavigation";

const HeroSectionMobile = ({ onOpenCta }) => {
  return (
    <section className="w-screen min-h-screen bg-[#D4F0FC] relative  overflow-hidden">
      <div className="w-full mx-auto">
        <div className="w-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={beansvideo}
            alt="3D animation showcase"
            className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px] object-cover object-center"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start px-4 xs:px-6 sm:px-8 md:px-12 mt-6 xs:mt-8 sm:mt-10 md:mt-12">
          <HeroContentMobile onOpenCta={onOpenCta} />
          {/* Place mobile/tablet navigation below the hero buttons to align with UI */}
          <div className="w-full mt-4">
            <StyledFixedNavigation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMobile;
