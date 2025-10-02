// import React, { useEffect, useRef, useState } from "react";

// import a from "/images/a.jpg";
// import d from "/images/abc.png";
// import e from "/images/abcd.png";
// import f from "/images/abcdef.png";
// import g from "/images/pro1.jpg";
// import h from "/images/proj2.jpg";
// import b from "/images/proj3.jpg";

// const StatsSection = () => {
//   const sectionRef = useRef(null);
//   const startedRef = useRef(false);
//   const rafIdsRef = useRef([]);
//   const lastInteractionRef = useRef(Date.now());

//   const [clientsCount, setClientsCount] = useState(0);
//   const [reviewsCount, setReviewsCount] = useState(0);
//   const [ratingValue, setRatingValue] = useState(0);
//   const [usersCount, setUsersCount] = useState(0);

//   // Bay Window Carousel StateA
//   const [isDragging, setIsDragging] = useState(false);
//   const [rotation, setRotation] = useState(0);
//   const [dragStart, setDragStart] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const rotationTargetRef = useRef(0);
//   const velocityRef = useRef(0);
//   const rafRef = useRef(null);

//   // Project images
//   const projectImages = [a, b, d, e, f, g, h];

//   // Check if mobile on mount and resize
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//     setDragStart(clientX);
//     setIsDragging(true);
//     lastInteractionRef.current = Date.now();
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//     const deltaX = (clientX - dragStart) * (isMobile ? 0.8 : 0.35);
//     rotationTargetRef.current -= deltaX;
//     velocityRef.current = -deltaX;
//     setDragStart(clientX);
//     lastInteractionRef.current = Date.now();
//     if (e.touches && e.cancelable) e.preventDefault();
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     lastInteractionRef.current = Date.now();
//   };

//   // Counter animation
//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const animateValue = (setter, from, to, duration, formatFn) => {
//       const start = performance.now();
//       const localIds = [];
//       const step = (now) => {
//         const progress = Math.min((now - start) / duration, 1);
//         const value = from + (to - from) * progress;
//         setter(formatFn ? formatFn(value) : Math.floor(value));
//         if (progress < 1) {
//           const id = requestAnimationFrame(step);
//           localIds.push(id);
//           rafIdsRef.current.push(id);
//         } else {
//           setter(formatFn ? formatFn(to) : to);
//         }
//       };
//       const id = requestAnimationFrame(step);
//       localIds.push(id);
//       rafIdsRef.current.push(id);
//       return () => {
//         localIds.forEach((i) => cancelAnimationFrame(i));
//       };
//     };

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             startedRef.current = true;

//             rafIdsRef.current.forEach((i) => cancelAnimationFrame(i));
//             rafIdsRef.current = [];

//             setClientsCount(0);
//             setReviewsCount(0);
//             setRatingValue(0);
//             setUsersCount(0);

//             animateValue(setClientsCount, 0, 60, 1200, (v) => Math.floor(v));
//             animateValue(setReviewsCount, 0, 450, 1400, (v) => Math.floor(v));
//             animateValue(setRatingValue, 0, 9.8, 1200, (v) =>
//               Number(v.toFixed(1))
//             );
//             animateValue(setUsersCount, 0, 500, 1600, (v) => Math.floor(v));
//           } else {
//             startedRef.current = false;
//             rafIdsRef.current.forEach((i) => cancelAnimationFrame(i));
//             rafIdsRef.current = [];
//             setClientsCount(0);
//             setReviewsCount(0);
//             setRatingValue(0);
//             setUsersCount(0);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(el);
//     return () => {
//       observer.disconnect();
//       rafIdsRef.current.forEach((i) => cancelAnimationFrame(i));
//       rafIdsRef.current = [];
//     };
//   }, []);

//   // Event listeners
//   useEffect(() => {
//     const handleGlobalMouseMove = (e) => handleMouseMove(e);
//     const handleGlobalMouseUp = () => handleMouseUp();

//     if (isDragging) {
//       document.addEventListener("mousemove", handleGlobalMouseMove);
//       document.addEventListener("mouseup", handleGlobalMouseUp);
//       document.addEventListener("touchmove", handleGlobalMouseMove, {
//         passive: false,
//       });
//       document.addEventListener("touchend", handleGlobalMouseUp);
//     }

//     return () => {
//       document.removeEventListener("mousemove", handleGlobalMouseMove);
//       document.removeEventListener("mouseup", handleGlobalMouseUp);
//       document.removeEventListener("touchmove", handleGlobalMouseMove);
//       document.removeEventListener("touchend", handleGlobalMouseUp);
//     };
//   }, [isDragging, dragStart]);

//   // Smooth animation loop
//   useEffect(() => {
//     const animate = () => {
//       const idle =
//         Date.now() - lastInteractionRef.current > 2000 && !isDragging;
//       if (idle) rotationTargetRef.current += isMobile ? 0.25 : 0.1;
//       if (!isDragging) {
//         rotationTargetRef.current += velocityRef.current;
//         velocityRef.current *= isMobile ? 0.92 : 0.9;
//         if (Math.abs(velocityRef.current) < 0.001) velocityRef.current = 0;
//       }
//       setRotation(
//         (prev) =>
//           prev + (rotationTargetRef.current - prev) * (isMobile ? 0.22 : 0.15)
//       );
//       rafRef.current = requestAnimationFrame(animate);
//     };
//     rafRef.current = requestAnimationFrame(animate);
//     return () => rafRef.current && cancelAnimationFrame(rafRef.current);
//   }, [isDragging, isMobile]);

//   return (
//     <section ref={sectionRef} className="w-full bg-[#183942] py-12 lg:py-20">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header & description */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="h-px w-24 bg-[#ffffff7c] mx-auto mb-6" />
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
//             Projects To Impact
//           </h2>
//           <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
//             We design websites that are not just visuals—they're experiences.,
//             <br />
//             Every detail is crafted to inspire, engage, and make your brand
//             unforgettable.
//           </p>
//         </div>

//         {/* Responsive Bay Window Carousel */}
//         <div className="mb-16 w-full flex justify-center">
//           <div
//             className="relative"
//             style={{
//               perspective: isMobile ? "350px" : "2500px",
//               width: isMobile ? "100%" : "min(1000px, 95vw)",
//               height: isMobile ? "auto" : "min(600px, 65vh)",
//               aspectRatio: isMobile ? "16 / 9" : undefined,
//               WebkitMaskImage: "none",
//               maskImage: "none",
//               overflow: "visible",
//               paddingBottom: isMobile ? undefined : "1.5rem",
//             }}
//           >
//             <div
//               className={`w-full h-full relative ${isDragging ? "cursor-grabbing" : "cursor-grab"} transition-transform duration-100 ease-out`}
//               style={{
//                 transformStyle: "preserve-3d",
//                 transform: `rotateY(${rotation}deg)`,
//               }}
//               onMouseDown={handleMouseDown}
//               onTouchStart={handleMouseDown}
//             >
//               {projectImages.map((image, index) => {
//                 // Mobile configuration - much wider spacing to show one full image
//                 const angleStep = isMobile ? 90 : 60;
//                 const angle = index * -angleStep;
//                 const z = isMobile ? -200 : -1000;
//                 const originZ = isMobile ? 100 : 450;
//                 const scale = isMobile ? 0.95 : 0.8;

//                 // Mobile: Match container and keep rectangle
//                 const mobileWidth = "100%";
//                 const mobileHeight = "100%";

//                 return (
//                   <div
//                     key={index}
//                     className={`absolute transition-opacity duration-300 ease-out ${
//                       hoveredIndex !== null
//                         ? hoveredIndex === index
//                           ? "opacity-100"
//                           : "opacity-80"
//                         : "opacity-100"
//                     }`}
//                     style={{
//                       transformStyle: "preserve-3d",
//                       transform: `rotateY(${angle}deg) translateZ(${z}px) scale(${scale})`,
//                       transformOrigin: `50% 50% ${originZ}px`,
//                       backfaceVisibility: "hidden",
//                       width: mobileWidth,
//                       height: mobileHeight,
//                       inset: "0",
//                       backgroundColor: "transparent",
//                       border: "none",
//                       padding: "0",
//                       boxShadow: isMobile
//                         ? "0 8px 24px rgba(0,0,0,0.25)"
//                         : undefined,
//                     }}
//                     onMouseEnter={() => setHoveredIndex(index)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                   >
//                     {isMobile ? (
//                       <div className="w-full h-full rounded-xl overflow-hidden bg-[#0b1220] flex flex-col ring-1 ring-black/10">
//                         <div className="h-8 bg-[#f3f4f6] flex items-center gap-2 px-3">
//                           <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
//                           <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
//                           <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
//                           <div className="ml-3 flex-1 h-5 rounded-full bg-white/70" />
//                         </div>
//                         <div className="flex-1 bg-[#0b1220]">
//                           <div
//                             className="w-full h-full"
//                             style={{
//                               backgroundImage: `url(${image})`,
//                               backgroundSize: "contain",
//                               backgroundPosition: "center",
//                               backgroundRepeat: "no-repeat",
//                               width: "100%",
//                               height: "100%",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     ) : (
//                       <div
//                         className="relative min-w-[1020px] h-full flex items-center justify-center py-8"
//                         style={{ background: "transparent" }}
//                       >
//                         {/* iMac Frame - Larger and more prominent */}
//                         <div className="relative w-full max-w-[650px] mx-auto scale-110">
//                           {/* Screen */}
//                           <div className="relative bg-[#2a2a2a] rounded-t-3xl border-[10px] border-[#2a2a2a] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
//                             {/* Top bezel light reflection */}
//                             <div className="absolute top-1 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full blur-sm" />

//                             {/* macOS Traffic Lights */}
//                             <div className="absolute top-3 left-4 flex gap-2 z-10">
//                               <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
//                               <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
//                               <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
//                             </div>

//                             {/* Screen content - Full image display with contain */}
//                             <div className="relative aspect-[16/10] bg-white overflow-hidden rounded-t-xl">
//                               <img
//                                 src={image}
//                                 alt="Project preview"
//                                 className="w-full h-full object-contain"
//                                 draggable="false"
//                               />
//                             </div>
//                           </div>

//                           {/* Bottom chin - thinner and sleeker */}
//                           <div className="relative h-10 bg-gradient-to-b from-[#e5e5e5] via-[#d8d8d8] to-[#c5c5c5] rounded-b-2xl flex items-center justify-center shadow-lg">
//                             {/* Apple logo */}
//                             <div className="w-4 h-4 flex items-center justify-center">
//                               <svg
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                                 className="w-3.5 h-3.5 text-black/30"
//                               >
//                                 <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//                               </svg>
//                             </div>
//                           </div>

//                           {/* Stand - more elegant */}
//                           <div className="relative flex flex-col items-center">
//                             {/* Stand neck */}
//                             <div
//                               className="w-14 h-12 bg-gradient-to-b from-[#d5d5d5] to-[#c0c0c0] shadow-md"
//                               style={{
//                                 clipPath:
//                                   "polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)",
//                               }}
//                             />

//                             {/* Stand base */}
//                             <div className="w-36 h-2.5 bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] rounded-full shadow-lg -mt-0.5" />

//                             {/* Shadow */}
//                             <div className="w-44 h-1.5 bg-black/8 blur-sm rounded-full mt-0.5" />
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Stats area */}
//         <div className="bg-transparent">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
//             {/* Left: descriptive text */}
//             <div className="lg:col-span-2 order-1 lg:order-1">
//               <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
//                 <span className="font-medium">Our</span>
//                 <span className="font-semibold"> Impacts</span>
//                 <span className="text-[#ef4b6e]">.</span>
//               </h3>

//               <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
//                 We are a digital agency,crafting Data-driven digital product
//                 design &amp; technology firm that transforms business. Flexirl
//                 focuses on human-centered UI/UX Design, UX Research, Web and
//                 mobile app development — offering end-to-end services that your
//                 users will love.
//               </p>
//             </div>

//             {/* Right: numeric stats */}
//             <div className="lg:col-span-3 order-2 lg:order-2 mt-6 lg:mt-0">
//               <div className="grid grid-cols-2 gap-8 lg:gap-12">
//                 <div className="flex flex-col items-start text-left">
//                   <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
//                     {clientsCount}
//                     <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
//                   </div>
//                   <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
//                     Clients
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-start text-left">
//                   <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
//                     {reviewsCount}
//                     <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
//                   </div>
//                   <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
//                     Positive Reviews
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-start text-left">
//                   <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
//                     {ratingValue}
//                     <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
//                   </div>
//                   <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
//                     Rating Out of 10
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-start text-left">
//                   <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
//                     {usersCount}
//                     <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
//                   </div>
//                   <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
//                     Users Satisfied
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
import React, { useEffect, useMemo, useRef, useState } from "react";

import a from "/images/a.jpg";
import d from "/images/abc.png";
import e from "/images/abcd.png";
import f from "/images/abcdef.png";
import g from "/images/pro1.jpg";
import h from "/images/proj2.jpg";
import b from "/images/proj3.jpg";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const startedRef = useRef(false);
  const rafIdsRef = useRef([]);
  const lastInteractionRef = useRef(Date.now());
  const rotationTargetRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef(null);

  const [clientsCount, setClientsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? 1440 : window.innerWidth
  );

  const projectImages = useMemo(() => [a, b, d, e, f, g, h], []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const updateViewport = () => setViewportWidth(window.innerWidth);

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const isMobile = viewportWidth <= 640;
  const isTablet = viewportWidth > 640 && viewportWidth <= 1024;

  const deviceConfig = useMemo(() => {
    if (isMobile) {
      return {
        dragMultiplier: 0.8,
        autoRotateStep: 0.25,
        velocityDamping: 0.92,
        rotationSmoothing: 0.22,
        angleStep: 90,
        translateZ: -200,
        originZ: 100,
        cardScale: 0.95,
        minWidth: "100%",
        carousel: {
          perspective: "380px",
          width: "100%",
          height: "auto",
          aspectRatio: "16 / 9",
          paddingBottom: undefined,
        },
        frame: {
          maxWidth: "100%",
          scale: 0.82,
        },
        cardShadow: "none",
      };
    }

    if (isTablet) {
      return {
        dragMultiplier: 0.5,
        autoRotateStep: 0.16,
        velocityDamping: 0.9,
        rotationSmoothing: 0.18,
        angleStep: 72,
        translateZ: -820,
        originZ: 360,
        cardScale: 0.88,
        minWidth: "min(780px, 90vw)",
        carousel: {
          perspective: "1700px",
          width: "min(840px, 92vw)",
          height: "min(520px, 62vh)",
          aspectRatio: undefined,
          paddingBottom: "1.25rem",
        },
        frame: {
          maxWidth: "540px",
          scale: 0.94,
        },
        cardShadow: "none",
      };
    }

    return {
      dragMultiplier: 0.35,
      autoRotateStep: 0.1,
      velocityDamping: 0.88,
      rotationSmoothing: 0.15,
      angleStep: 60,
      translateZ: -1000,
      originZ: 450,
      cardScale: 0.8,
      minWidth: "min(1020px, 85vw)",
      carousel: {
        perspective: "2500px",
        width: "min(1080px, 90vw)",
        height: "min(620px, 65vh)",
        aspectRatio: undefined,
        paddingBottom: "1.5rem",
      },
      frame: {
        maxWidth: "650px",
        scale: 1.08,
      },
      cardShadow: "none",
    };
  }, [isMobile, isTablet]);

  const {
    dragMultiplier,
    autoRotateStep,
    velocityDamping,
    rotationSmoothing,
    angleStep,
    translateZ,
    originZ,
    cardScale,
    minWidth,
    carousel,
    frame,
    cardShadow,
  } = deviceConfig;

  const handleMouseDown = (e) => {
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    setIsDragging(true);
    lastInteractionRef.current = Date.now();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = (clientX - dragStart) * dragMultiplier;
    rotationTargetRef.current -= deltaX;
    velocityRef.current = -deltaX;
    setDragStart(clientX);
    lastInteractionRef.current = Date.now();
    if (e.touches && e.cancelable) e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    lastInteractionRef.current = Date.now();
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const animateValue = (setter, from, to, duration, formatFn) => {
      const start = performance.now();
      const localIds = [];
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = from + (to - from) * progress;
        setter(formatFn ? formatFn(value) : Math.floor(value));
        if (progress < 1) {
          const id = requestAnimationFrame(step);
          localIds.push(id);
          rafIdsRef.current.push(id);
        } else {
          setter(formatFn ? formatFn(to) : to);
        }
      };
      const id = requestAnimationFrame(step);
      localIds.push(id);
      rafIdsRef.current.push(id);
      return () => {
        localIds.forEach((i) => cancelAnimationFrame(i));
      };
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startedRef.current = true;

            rafIdsRef.current.forEach((i) => cancelAnimationFrame(i));
            rafIdsRef.current = [];

            setClientsCount(0);
            setReviewsCount(0);
            setRatingValue(0);
            setUsersCount(0);

            animateValue(setClientsCount, 0, 60, 1200, (v) => Math.floor(v));
            animateValue(setReviewsCount, 0, 450, 1400, (v) => Math.floor(v));
            animateValue(setRatingValue, 0, 9.8, 1200, (v) =>
              Number(v.toFixed(1))
            );
            animateValue(setUsersCount, 0, 500, 1600, (v) => Math.floor(v));
          } else {
            startedRef.current = false;
            rafIdsRef.current.forEach((i) => cancelAnimationFrame(i));
            rafIdsRef.current = [];
            setClientsCount(0);
            setReviewsCount(0);
            setRatingValue(0);
            setUsersCount(0);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      rafIdsRef.current.forEach((i) => cancelAnimationFrame(i));
      rafIdsRef.current = [];
    };
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchmove", handleGlobalMouseMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalMouseMove);
      document.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging, dragStart]);

  useEffect(() => {
    const animate = () => {
      const idle =
        Date.now() - lastInteractionRef.current > 2000 && !isDragging;
      if (idle) {
        rotationTargetRef.current += autoRotateStep;
      }
      if (!isDragging) {
        rotationTargetRef.current += velocityRef.current;
        velocityRef.current *= velocityDamping;
        if (Math.abs(velocityRef.current) < 0.001) {
          velocityRef.current = 0;
        }
      }
      setRotation(
        (prev) => prev + (rotationTargetRef.current - prev) * rotationSmoothing
      );
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isDragging, autoRotateStep, rotationSmoothing, velocityDamping]);

  return (
    <section ref={sectionRef} className="w-full bg-[#183942] py-12 lg:py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="h-px w-24 bg-[#ffffff7c] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Projects To Impact
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            We design websites that are not just visuals—they're experiences.,
            <br />
            Every detail is crafted to inspire, engage, and make your brand
            unforgettable.
          </p>
        </div>

        <div className="mb-16 w-full flex justify-center">
          <div
            className={`relative ${isMobile ? "" : "max-w-full"}`}
            style={{
              perspective: carousel.perspective,
              width: carousel.width,
              height: carousel.height,
              aspectRatio: carousel.aspectRatio,
              WebkitMaskImage: "none",
              maskImage: "none",
              overflow: "visible",
              paddingBottom: carousel.paddingBottom,
            }}
          >
            <div
              className={`w-full h-full relative ${isDragging ? "cursor-grabbing" : "cursor-grab"} transition-transform duration-100 ease-out`}
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {projectImages.map((image, index) => {
                const angle = index * -angleStep;

                return (
                  <div
                    key={image}
                    className={`absolute transition-opacity duration-300 ease-out ${
                      hoveredIndex !== null
                        ? hoveredIndex === index
                          ? "opacity-100"
                          : "opacity-80"
                        : "opacity-100"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${angle}deg) translateZ(${translateZ}px) scale(${cardScale})`,
                      transformOrigin: `50% 50% ${originZ}px`,
                      backfaceVisibility: "hidden",
                      width: "100%",
                      height: "100%",
                      inset: "0",
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0",
                      boxShadow: cardShadow,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className="relative h-full flex items-center justify-center py-4 md:py-8"
                      style={{
                        background: "transparent",
                        minWidth,
                        margin: "0 auto",
                      }}
                    >
                      <div
                        className="relative w-full mx-auto"
                        style={{
                          maxWidth: frame.maxWidth,
                          transform: `scale(${frame.scale})`,
                          transformOrigin: "center top",
                        }}
                      >
                        <div className="relative bg-[#2a2a2a] rounded-t-2xl md:rounded-t-3xl border-[6px] md:border-[10px] border-[#2a2a2a] shadow-[0_10px_40px_rgba(0,0,0,0.3)] md:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                          <div className="absolute top-0.5 md:top-1 left-1/4 right-1/4 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full blur-sm" />
                          <div className="absolute top-2 md:top-3 left-3 md:left-4 flex gap-1.5 md:gap-2 z-10">
                            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56] shadow-sm" />
                            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f] shadow-sm" />
                          </div>
                          <div className="relative aspect-[16/10] bg-white overflow-hidden rounded-t-lg md:rounded-t-xl">
                            <img
                              src={image}
                              alt="Project preview"
                              className="w-full h-full object-contain"
                              draggable="false"
                            />
                          </div>
                        </div>

                        <div className="relative h-8 md:h-10 bg-gradient-to-b from-[#e5e5e5] via-[#d8d8d8] to-[#c5c5c5] rounded-b-xl md:rounded-b-2xl flex items-center justify-center shadow-md md:shadow-lg">
                          <div className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-black/30"
                            >
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                          </div>
                        </div>

                        <div className="relative flex flex-col items-center">
                          <div
                            className="w-10 h-8 md:w-14 md:h-12 bg-gradient-to-b from-[#d5d5d5] to-[#c0c0c0] shadow-md"
                            style={{
                              clipPath:
                                "polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)",
                            }}
                          />
                          <div className="w-28 h-2 md:w-36 md:h-2.5 bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] rounded-full shadow-md md:shadow-lg -mt-0.5" />
                          <div className="w-32 h-1 md:w-44 md:h-1.5 bg-black/8 blur-sm rounded-full mt-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 order-1 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                <span className="font-medium">Our</span>
                <span className="font-semibold"> Impacts</span>
                <span className="text-[#ef4b6e]">.</span>
              </h3>
              <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                We are a digital agency, crafting data-driven digital product
                design & technology that transforms business. Flexirl focuses on
                human-centered UI/UX, research, and end-to-end development that
                users love.
              </p>
            </div>

            <div className="lg:col-span-3 order-2 lg:order-2 mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-8 lg:gap-12">
                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {clientsCount}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Clients
                  </div>
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {reviewsCount}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Positive Reviews
                  </div>
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {ratingValue}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Rating Out of 10
                  </div>
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {usersCount}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Users Satisfied
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
