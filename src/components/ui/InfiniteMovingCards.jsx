"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import RatingBar from "../ui/RatingBar";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "medium",
  className,
}) {
  const animationDuration = {
    slow: 40,
    medium: 25,
    fast: 15,
  };

  // Repeat items 4 times to ensure seamless scroll
  const loopItems = [...items, ...items, ...items, ...items];

  const controls = useAnimation();

  useEffect(() => {
    // start animation
    controls.start(
      { x: direction === "left" ? "-50%" : "50%" },
      {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: animationDuration[speed],
      }
    );
  }, [controls, direction, speed]);

  return (
    <div
      className={cn(
        "relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex gap-4 sm:gap-6"
        // animation controls allow pause/resume on hover
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => {
          controls.start(
            { x: direction === "left" ? "-50%" : "50%" },
            {
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: animationDuration[speed],
            }
          );
        }}
        animate={controls}
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-2xl shadow-md p-4 sm:p-6
              xs:w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px]
              min-h-[260px] md:min-h-[300px]
              hover:scale-105 transition-transform duration-300"
            style={{
              backgroundColor: item.bgColor,
              color: item.textColor,
            }}
          >
            {/* Top: rating and (desktop) avatar */}
            <div className="w-full flex items-start justify-between mb-3">
              <div className="w-full flex justify-center md:justify-start">
                <RatingBar
                  rating={item.rating}
                  maxRating={5}
                  readOnly={true}
                  variant="filled"
                  size="small"
                  className=""
                />
              </div>

              {/* Larger avatar shown on md+ to balance layout */}
              {/* <img
                src={item.avatar}
                alt={item.name}
                className="hidden md:block w-12 h-12 rounded-full object-cover ml-3 flex-shrink-0"
              /> */}
            </div>

            {/* Content */}
            <p className="text-xs sm:text-sm md:text-base text-center md:text-left flex-1 leading-relaxed">
              "{item.text}"
            </p>

            {/* Footer: author info (avatar removed on all breakpoints) */}
            <div className="flex items-center mt-3 md:mt-4">
              <div className="flex flex-col w-full text-center md:text-left">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-[11px] sm:text-xs opacity-80">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
