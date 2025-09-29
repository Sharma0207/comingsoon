import React from "react";
import girl from "/images/girl.png";

import Stackcard from "./Stackcard";
import ScrollText from "../../components/ui/ScrollText";
import arrow from "/images/arrowservices.svg";

const ServicesSection = () => {
  return (
    <section
      className="w-full   bg-[#f8f8f8]  
     "
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header row: intro + visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-inter_28pt mb-4 ">
              <span className="block font-bold">Our</span>
              <span className="block font-extrabold ">services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 font-syne font-regular max-w-prose">
              We craft engaging, authentic, and effective services to help your
              business grow. From product development to motion graphics, we
              blend creativity with strategy to deliver measurable results.
            </p>
            <div className="mt-6">
              <img src={arrow} alt="Arrow" className="w-12 sm:w-14" />
            </div>
          </div>

          <div className="lg:col-span-7 block">
            <div className="relative w-full h-[220px] sm:h-[30px] md:h-[360px] lg:h-[420px]">
              <img
                src={girl}
                alt="Team member"
                className="absolute right-0 top-0 w-full h-full  max-w-[520px] ml-auto"
              />
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-[#f8f8f8] pointer-events-none" />
              {/* <img
                src={reddot}
                alt="Decor"
                className="absolute  left-72 top-32 w-12 opacity-100"
              /> */}
            </div>
            {/* Arrow below image for mobile/tablet
            <div className="flex justify-center mt-4 lg:mt-6">
              <img
                src="/images/img_arrow_button.svg"
                alt="Arrow down"
                className="w-8 sm:w-10"
              />
            </div> */}
          </div>
        </div>

        {/* Services cards grid */}
        {/* <div className="flex flex-col gap-6 mt-8 lg:max-h-[640px] lg:overflow-y-auto lg:snap-y lg:snap-mandatory">
          <div className="snap-start bg-[#183942] text-white rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#66aef0] mb-3">
              Product Development
            </h3>
            <p className="text-base sm:text-lg text-white">
              We build intuitive websites and apps backed by strong UX and
              engineering practices to create experiences users love.
            </p>
          </div>

          <div className="snap-start bg-[#bff1ff] text-black rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              Product Design
            </h3>
            <p className="text-base sm:text-lg">
              From visual systems to brand assets, we create design that speaks
              and converts — beautiful and useful.
            </p>
          </div>

          <div className="snap-start bg-[#ef4b6e] text-white rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              Digital Marketing
            </h3>
            <p className="text-base sm:text-lg">
              Social, content, and SEO strategies that increase awareness,
              engagement, and conversions for your brand.
            </p>
          </div>

          <div className="snap-start bg-[#ffced9] text-black rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
              Video &amp; Motion Graphics
            </h3>
            <p className="text-base sm:text-lg">
              Cinematic explainer videos and motion design that communicate your
              story clearly and memorably.
            </p>
          </div>
        </div> */}
      </div>
      <Stackcard />
    </section>
  );
};
export default ServicesSection;
