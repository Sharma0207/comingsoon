import React, { useEffect, useRef } from "react";

const ScrollText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      const loadScript = (src) =>
        new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => resolve();
          script.onerror = (err) => reject(err);
          document.body.appendChild(script);
        });

      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        );

        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);

          const marquees = document.querySelectorAll(".nayla-marquee");
          marquees.forEach((marquee, index) => {
            const direction = marquee.classList.contains("left-to-right")
              ? 1
              : -1;

            const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
            const distance =
              (isDesktop ? 100 : 85) + index * (isDesktop ? 16 : 12);

            window.gsap.to(marquee, {
              x: `${direction * distance}%`,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: isDesktop ? "top 99%" : "top 99%",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
        }
      } catch (err) {
        console.error("Failed to load GSAP scripts:", err);
      }
    };

    loadScripts();

    return () => {
      window.ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const marqueeTexts = [
    { text: "We", direction: "right-to-left" },
    { text: "Develop", direction: "left-to-right" },
    { text: "Design", direction: "right-to=left" },
    { text: "Market", direction: "left-to-right" },
    { text: "Brand", direction: "right-to-left" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative pb-6 md:pb-8 lg:pb-10 px-4 sm:px-8 overflow-hidden -mt-[65vh] md:-mt-[77vh] lg:-mt-[68vh] xs:-mt-[70vh]"
    >
      <style>
        {`
          .nayla-marquee {
            white-space: nowrap;
            font-family: 'Inter', Helvetica, sans-serif;
            font-size: clamp(3rem, 17vw, 22rem);
            font-weight: 250;
              text-transform: uppercase;
            letter-spacing: -0.07em;
            line-height: .56;
            padding: 0.8rem 0;
            user-select: none;
            will-change: transform, color;
          }
          // .fade-mask {
          //   -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          //   mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 90%);
          // }
          .seperator {
            font-size: .3em;
            vertical-align: middle;
            margin: 0 1rem;
            display: inline-block;
            opacity: .6;
          }
        `}
      </style>

      <div className="flex flex-col -mt-3  gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {marqueeTexts.map((item, index) => (
          <div key={index} className="overflow-hidden fade-mask">
            <h2
              className={`nayla-marquee ${item.direction} cursor-default text-black`}
            >
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollText;
