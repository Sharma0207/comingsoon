import React, { useEffect, useRef, useState } from "react";

import a from "/images/a.jpg";
import b from "/images/ab.png";
import d from "/images/abc.png";
import e from "/images/abcd.png";
import f from "/images/abcdef.png";
import g from "/images/pro1.jpg";
import h from "/images/proj2.jpg";
const StatsSection = () => {
  const sectionRef = useRef(null);
  const startedRef = useRef(false);
  const rafIdsRef = useRef([]);
  const lastInteractionRef = useRef(Date.now());

  const [clientsCount, setClientsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  // Bay Window Carousel State
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const rotationTargetRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef(null);

  // Project images
  const projectImages = [d, h, a, g, f, e, b, d, h, a, f, d, h, g, e, a, d, h]; // Your project images with duplicates

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    const deltaX = (clientX - dragStart) * (isMobile ? 0.8 : 0.35);
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

  // Counter animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

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

  // Event listeners
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

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      const idle =
        Date.now() - lastInteractionRef.current > 2000 && !isDragging;
      if (idle) rotationTargetRef.current += isMobile ? 0.25 : 0.1;
      if (!isDragging) {
        rotationTargetRef.current += velocityRef.current;
        velocityRef.current *= isMobile ? 0.92 : 0.9;
        if (Math.abs(velocityRef.current) < 0.001) velocityRef.current = 0;
      }
      setRotation(
        (prev) =>
          prev + (rotationTargetRef.current - prev) * (isMobile ? 0.22 : 0.15)
      );
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [isDragging, isMobile]);

  return (
    <section ref={sectionRef} className="w-full bg-[#183942] py-12 lg:py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="h-px w-24 bg-[#ffffff7c] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Projects To Impact
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            We design websites that are not just visuals—they’re experiences.,
            <br />
            Every detail is crafted to inspire, engage, and make your brand
            unforgettable.
          </p>
        </div>

        {/* Responsive Bay Window Carousel */}
        <div className="mb-16 w-full flex justify-center">
          <div
            className="relative"
            style={{
              perspective: isMobile ? "350px" : "2000px",
              width: isMobile ? "100%" : "min(900px, 100vw)",
              height: isMobile ? "auto" : "min(450px, 60vh)",
              aspectRatio: isMobile ? "16 / 9" : undefined,
              WebkitMaskImage: isMobile
                ? "none"
                : "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 8%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0) 100%)",
              maskImage: isMobile
                ? "none"
                : "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 8%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0) 100%)",
              overflow: "visible",
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
                // Mobile configuration - much wider spacing to show one full image
                const angleStep = isMobile ? 90 : 45; // 90 degrees = only show one image at a time on mobile
                const angle = index * -angleStep;
                const z = isMobile ? -200 : -700; // Much closer to camera on mobile
                const originZ = isMobile ? 100 : 350; // Adjusted transform origin
                const scale = isMobile ? 0.95 : 0.92; // Slightly larger on mobile

                // Mobile: Match container and keep rectangle
                const mobileWidth = isMobile ? "100%" : "100%";
                const mobileHeight = isMobile ? "100%" : "100%";

                return (
                  <div
                    key={index}
                    className={`absolute transition-opacity duration-300 ease-out rounded-xl shadow-2xl ${
                      hoveredIndex !== null
                        ? hoveredIndex === index
                          ? "opacity-100"
                          : "opacity-80"
                        : "opacity-100"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${angle}deg) translateZ(${z}px) scale(${scale})`,
                      transformOrigin: `50% 50% ${originZ}px`,
                      backfaceVisibility: "hidden",
                      width: mobileWidth,
                      height: mobileHeight,
                      inset: "0",
                      backgroundColor: isMobile ? "transparent" : "transparent",
                      border: undefined,
                      padding: "0px",
                      boxShadow: isMobile
                        ? "0 8px 24px rgba(0,0,0,0.25)"
                        : undefined,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {isMobile ? (
                      <div className="w-full h-full rounded-xl overflow-hidden bg-[#0b1220] flex flex-col ring-1 ring-black/10">
                        <div className="h-8 bg-[#f3f4f6] flex items-center gap-2 px-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          <div className="ml-3 flex-1 h-5 rounded-full bg-white/70" />
                        </div>
                        <div className="flex-1 bg-[#0b1220]">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `url(${image})`,
                              backgroundSize: "contain",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        className="w-full h-full rounded-lg"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats area */}
        <div className="bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: descriptive text */}
            <div className="lg:col-span-2 order-1 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                <span className="font-medium">Our</span>
                <span className="font-semibold"> Impacts</span>
                <span className="text-[#ef4b6e]">.</span>
              </h3>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                We are a digital agency,crafting Data-driven digital product
                design &amp; technology firm that transforms business. Flexirl
                focuses on human-centered UI/UX Design, UX Research, Web and
                mobile app development — offering end-to-end services that your
                users will love.
              </p>
            </div>

            {/* Right: numeric stats */}
            <div className="lg:col-span-3 order-2 lg:order-2 mt-6 lg:mt-0">
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
