// import React, { useState, useEffect } from "react";

// const Loader = ({ onLoadingComplete }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => onLoadingComplete(), 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 30);

//     return () => clearInterval(interval);
//   }, [onLoadingComplete]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#e8f4f8] via-[#d4e9f0] to-[#c9e4ed]">
//       {/* Floating bean-like shapes in background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="absolute w-32 h-32 rounded-full opacity-20 animate-float-slow"
//           style={{
//             background: "linear-gradient(135deg, #3b5998 0%, #2d4373 100%)",
//             top: "10%",
//             left: "15%",
//             animationDelay: "0s",
//           }}
//         ></div>
//         <div
//           className="absolute w-24 h-24 rounded-full opacity-15 animate-float-slow"
//           style={{
//             background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
//             top: "60%",
//             right: "20%",
//             animationDelay: "1s",
//           }}
//         ></div>
//         <div
//           className="absolute w-40 h-40 rounded-full opacity-10 animate-float-slow"
//           style={{
//             background: "linear-gradient(135deg, #3b5998 0%, #2d4373 100%)",
//             bottom: "15%",
//             left: "25%",
//             animationDelay: "2s",
//           }}
//         ></div>
//       </div>

//       <div className="relative z-10 text-center px-4">
//         {/* Main loader content */}
//         <div className="relative mb-12">
//           {/* Creating flex text */}
//           <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8">
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0s" }}
//             >
//               C
//             </span>
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0.1s" }}
//             >
//               r
//             </span>
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0.2s" }}
//             >
//               e
//             </span>
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0.3s" }}
//             >
//               a
//             </span>
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0.4s" }}
//             >
//               t
//             </span>
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0.5s" }}
//             >
//               i
//             </span>
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0.6s" }}
//             >
//               n
//             </span>
//             <span
//               className="inline-block text-[#2d3e50] animate-bounce-subtle"
//               style={{ animationDelay: "0.7s" }}
//             >
//               g
//             </span>
//             <span className="inline-block mx-2 sm:mx-3"></span>
//             <span
//               className="inline-block text-[#ec4899] animate-bounce-subtle"
//               style={{ animationDelay: "0.8s" }}
//             >
//               f
//             </span>
//             <span
//               className="inline-block text-[#ec4899] animate-bounce-subtle"
//               style={{ animationDelay: "0.9s" }}
//             >
//               l
//             </span>
//             <span
//               className="inline-block text-[#ec4899] animate-bounce-subtle"
//               style={{ animationDelay: "1s" }}
//             >
//               e
//             </span>
//             <span
//               className="inline-block text-[#ec4899] animate-bounce-subtle"
//               style={{ animationDelay: "1.1s" }}
//             >
//               x
//             </span>
//           </h1>

//           {/* Animated bean characters */}
//           <div className="flex justify-center items-center gap-4 mb-8">
//             {[...Array(3)].map((_, i) => (
//               <div
//                 key={i}
//                 className="relative animate-bean-bounce"
//                 style={{ animationDelay: `${i * 0.2}s` }}
//               >
//                 <div
//                   className="w-12 h-16 rounded-full shadow-lg relative overflow-hidden"
//                   style={{
//                     background:
//                       i === 0
//                         ? "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)"
//                         : i === 1
//                           ? "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)"
//                           : "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
//                     transform: "rotate(-5deg)",
//                   }}
//                 >
//                   {/* Bean face details */}
//                   <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-2">
//                     <div className="w-2 h-2 bg-[#2d3e50] rounded-full"></div>
//                     <div className="w-2 h-2 bg-[#2d3e50] rounded-full"></div>
//                   </div>
//                   <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-[#2d3e50] rounded-full"></div>
//                 </div>
//                 {/* Bean shadow */}
//                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-black opacity-10 rounded-full blur-sm"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Progress bar */}
//         <div className="w-64 sm:w-80 md:w-96 mx-auto">
//           <div className="h-2 bg-white bg-opacity-40 rounded-full overflow-hidden backdrop-blur-sm border border-white border-opacity-30">
//             <div
//               className="h-full rounded-full transition-all duration-300 ease-out relative"
//               style={{
//                 width: `${progress}%`,
//                 background:
//                   "linear-gradient(90deg, #3b5998 0%, #ec4899 50%, #3b5998 100%)",
//                 backgroundSize: "200% 100%",
//                 animation: "shimmer 2s infinite",
//               }}
//             >
//               <div className="absolute inset-0 bg-white opacity-30"></div>
//             </div>
//           </div>
//           <p className="text-[#2d3e50] text-sm mt-4 font-semibold">
//             {progress}%
//           </p>
//         </div>

//         {/* Subtle tagline */}
//         <p className="mt-8 text-[#4a5568] text-sm font-medium opacity-60">
//           In <span className="text-[#ec4899]">Real Life</span>
//         </p>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#e8f4f8] via-[#d4e9f0] to-[#c9e4ed]">
      {/* Floating bean-like shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-32 h-32 rounded-full opacity-20 animate-float-slow"
          style={{
            background: "linear-gradient(135deg, #3b5998 0%, #2d4373 100%)",
            top: "10%",
            left: "15%",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="absolute w-24 h-24 rounded-full opacity-15 animate-float-slow"
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
            top: "60%",
            right: "20%",
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="absolute w-40 h-40 rounded-full opacity-10 animate-float-slow"
          style={{
            background: "linear-gradient(135deg, #3b5998 0%, #2d4373 100%)",
            bottom: "15%",
            left: "25%",
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Main loader content */}
        <div className="relative mb-12">
          {/* Creating flex text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8">
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0s" }}
            >
              C
            </span>
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0.1s" }}
            >
              r
            </span>
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0.2s" }}
            >
              e
            </span>
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0.3s" }}
            >
              a
            </span>
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0.4s" }}
            >
              t
            </span>
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0.5s" }}
            >
              i
            </span>
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0.6s" }}
            >
              n
            </span>
            <span
              className="inline-block text-[#2d3e50] animate-bounce-subtle"
              style={{ animationDelay: "0.7s" }}
            >
              g
            </span>
            <span className="inline-block mx-2 sm:mx-3"></span>
            <span
              className="inline-block text-[#ec4899] animate-bounce-subtle"
              style={{ animationDelay: "0.8s" }}
            >
              f
            </span>
            <span
              className="inline-block text-[#ec4899] animate-bounce-subtle"
              style={{ animationDelay: "0.9s" }}
            >
              l
            </span>
            <span
              className="inline-block text-[#ec4899] animate-bounce-subtle"
              style={{ animationDelay: "1s" }}
            >
              e
            </span>
            <span
              className="inline-block text-[#ec4899] animate-bounce-subtle"
              style={{ animationDelay: "1.1s" }}
            >
              x
            </span>
          </h1>

          {/* Animated bean characters with different expressions */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {/* Bean 1 - Cool with sunglasses */}
            <div
              className="relative animate-bean-bounce"
              style={{ animationDelay: "0s" }}
            >
              <div
                className="w-12 h-16 rounded-full shadow-lg relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
                  transform: "rotate(-5deg)",
                }}
              >
                {/* Sunglasses */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-1 items-center">
                  <div className="w-3 h-2.5 bg-[#2d3e50] rounded-sm"></div>
                  <div className="w-1 h-0.5 bg-[#2d3e50]"></div>
                  <div className="w-3 h-2.5 bg-[#2d3e50] rounded-sm"></div>
                </div>
                {/* Cool smile */}
                <div
                  className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-5 h-2 border-b-2 border-[#2d3e50] rounded-full"
                  style={{
                    borderBottomLeftRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                ></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-black opacity-10 rounded-full blur-sm"></div>
            </div>

            {/* Bean 2 - Winking with tongue out */}
            <div
              className="relative animate-bean-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="w-12 h-16 rounded-full shadow-lg relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
                  transform: "rotate(-5deg)",
                }}
              >
                {/* Winking eyes */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {/* Left eye closed (wink) */}
                  <div className="w-2.5 h-0.5 bg-[#2d3e50] rounded-full mt-1"></div>
                  {/* Right eye open */}
                  <div className="w-2 h-2 bg-[#2d3e50] rounded-full"></div>
                </div>
                {/* Open mouth with tongue */}
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-[#2d3e50] rounded-full"></div>
                  <div
                    className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2.5 bg-[#ec4899] rounded-full"
                    style={{ clipPath: "ellipse(50% 60% at 50% 40%)" }}
                  ></div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-black opacity-10 rounded-full blur-sm"></div>
            </div>

            {/* Bean 3 - Star eyes (amazed) */}
            <div
              className="relative animate-bean-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="w-12 h-16 rounded-full shadow-lg relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                  transform: "rotate(-5deg)",
                }}
              >
                {/* Star eyes */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="relative w-2.5 h-2.5">
                    <div className="absolute inset-0 text-[#2d3e50] text-xs font-bold">
                      ✦
                    </div>
                  </div>
                  <div className="relative w-2.5 h-2.5">
                    <div className="absolute inset-0 text-[#2d3e50] text-xs font-bold">
                      ✦
                    </div>
                  </div>
                </div>
                {/* Surprised mouth */}
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-2.5 h-3 bg-[#2d3e50] rounded-full"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-black opacity-10 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80 md:w-96 mx-auto">
          <div className="h-2 bg-white bg-opacity-40 rounded-full overflow-hidden backdrop-blur-sm border border-white border-opacity-30">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out relative"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, #3b5998 0%, #ec4899 50%, #3b5998 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s infinite",
              }}
            >
              <div className="absolute inset-0 bg-white opacity-30"></div>
            </div>
          </div>
          <p className="text-[#2d3e50] text-sm mt-4 font-semibold">
            {progress}%
          </p>
        </div>

        {/* Subtle tagline */}
        <p className="mt-8 text-[#4a5568] text-sm font-medium opacity-60">
          in <span className="text-[#ec4899]">REAL LIFE</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
