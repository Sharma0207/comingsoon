import React from "react";
import ArrowRight from "/images/arrowr.svg";
import PNGOfficeImage from "/images/office.svg";
import fridayChristmas1 from "/images/NAMSTE.gif";

export const Hellosection = ({ onOpenCta }) => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          {/* Left: SAY HELLO with gif and button */}
          <div className="lg:w-3/5 w-full z-10">
            <div
              className="flex items-center flex-wrap lg:flex-nowrap gap-4 cursor-pointer"
              onClick={onOpenCta}
              role="button"
              aria-label="Open contact"
            >
              <h1 className="[font-family:'Inter',Helvetica] font-extralight text-[#183942] text-[56px] sm:text-[72px] md:text-[96px] lg:text-[110px] leading-[1] tracking-[1px] drop-shadow-md">
                SAY
              </h1>

              {/* Small gif inline */}
              <img
                src={fridayChristmas1}
                alt="decorative gif"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-sm"
              />

              <h1 className="[font-family:'Inter',Helvetica] font-extralight text-[#183942] text-[56px] sm:text-[72px] md:text-[96px] lg:text-[110px] leading-[1] tracking-[-4px] drop-shadow-md">
                HELLO<span className="text-[#ef4b6e]">!</span>
              </h1>
            </div>

            <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-md lg:max-w-lg">
              We love making things. If you have a project, idea or just want to
              say hi, reach out — we’d love to chat and explore how we can help.
            </p>

            {/* Get in touch button */}
            {/* <div className="mt-6">
              <button
                onClick={onOpenCta}
                className="relative inline-flex items-center px-6 py-3 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition-colors duration-200 group"
              >
                <span className="pr-6 font-extralight text-gray-800 group-hover:text-white transition-colors duration-200">
                  Get in touch
                </span>
                <span className="absolute right-1 flex items-center justify-center w-10 h-10 bg-[#183942] text-white rounded-full">
                  <img src={ArrowRight} alt="arrow" className="w-4 h-4" />
                </span>
              </button>
            </div> */}
            {/* Get in touch button */}
            <div className="mt-6">
              <a
                href="https://calendly.com/flexirl-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-6 py-3 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition-colors duration-200 group"
              >
                <span className="pr-6 font-extralight text-gray-800 group-hover:text-white transition-colors duration-200">
                  Schedule a call
                </span>
                <span className="absolute right-1 flex items-center justify-center w-10 h-10 bg-[#183942] text-white rounded-full">
                  <img src={ArrowRight} alt="arrow" className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Right: decorative office image */}
          <div className="lg:w-2/5 w-full flex justify-center lg:justify-end relative">
            <img
              src={PNGOfficeImage}
              alt="Office"
              className="flex-shrink-0 w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain pointer-events-none lg:ml-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hellosection;
