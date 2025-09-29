import React from "react";
import HeroContent from "../../components/common/Herocontent";
import beansvideo from "../../assets/beanshero.mp4";

const HeroSection = ({ onOpenCta }) => {
  return (
    <section className="bg-[#D4F0FC] py-4 md:py-8 lg:py-16 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-36 py-12 md:py-24">
          {/* Left Column - Hero Content Component */}
          <div className="w-full md:w-1/2 flex justify-start items-center">
            <HeroContent onOpenCta={onOpenCta} />
          </div>

          {/* Right Column - Video */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-lg aspect-[1.45] mix-blend-darken">
              <video
                autoPlay
                loop
                muted
                playsInline
                src={beansvideo}
                alt="3D animation showcase"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default HeroSection;

// import React from "react";
// import Header from "../../components/common/Header";
// import HeroContent from "../../components/common/HeroContent";
// import beansvideo from "../../assets/beanshero.mp4";

// const HeroSection = () => {
//   return (
//     <section className="bg-[#D4F0FC] py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 relative">
//       <div className=" w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-10">
//         <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
//           {/* Left Column - Hero Content Component */}
//           <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center p-2 xs:p-3 sm:p-4 md:p-0">
//             <HeroContent />
//           </div>

//           {/* Right Column - Video */}
//           <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 xs:mt-5 sm:mt-6 md:mt-0">
//             <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-[1.2] sm:aspect-[1.3] md:aspect-[1.4] lg:aspect-[1.45] mix-blend-darken rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 src={beansvideo}
//                 alt="3D animation showcase"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default HeroSection;
