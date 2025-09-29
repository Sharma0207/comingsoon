import React, { useEffect, useRef, useState } from "react";

const FlexirlLineReveal = ({ lines, align = 'center' }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const defaultTextLines = [
    { text: "Flexirl Wasn't Built,", size: "small" },
    { text: "It Was Dreamed", size: "small" },
    { text: "Meet the Dreamer", size: "large", hasRedDot: true },
  ];

  const textLines = lines && Array.isArray(lines) && lines.length ? lines : defaultTextLines;

  const sectionClasses = align === 'left' ? 'flex items-start justify-start px-0 py-0' : 'flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20';
  const innerClasses = align === 'left' ? 'max-w-3xl text-left' : 'max-w-5xl mx-auto text-left';

  return (
    <div className="max-h-screen bg-white">
      {/* Main Line Reveal Section */}
      <section
        ref={sectionRef}
        className={sectionClasses}
      >
        <div className={innerClasses}>
          {textLines.map((line, index) => (
            <div key={index} className="overflow-hidden mb-2 sm:mb-3 lg:mb-4">
              <h1
                className={`
                   leading-tight transition-all duration-1000 ease-out text-black
                  ${
                    line.size === "large"
                      ? "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                      : "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  }
                `}
                style={{
                  transform: isVisible ? "translateY(0%)" : "translateY(100%)",
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {line.text}
                {line.hasRedDot && <span className="text-red-500 ml-1">.</span>}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FlexirlLineReveal;
