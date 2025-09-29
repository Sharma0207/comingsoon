import React, { useRef, useEffect } from "react";
import ImagineHandMobile from "../../components/MobileComponents/ImagineHandMobile";

const AFTER_HERO_BG_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fd7deb4639dab45149e2d6b8962802a13%2F76ba39c88ac74f01a8b32507e184201e?format=webp&width=1600";

export const ImagineHandSection = ({ onOpenCta }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
        else el.classList.remove("in-view");
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full relative">
      {/* Mobile & Tablet - unchanged */}
      <div className="block lg:hidden">
        <ImagineHandMobile onOpenCta={onOpenCta} />
      </div>

      {/* Desktop (lg and above) */}
      <div className="hidden lg:block w-full relative">
        <section
          ref={sectionRef}
          className="relative w-full overflow-hidden transition-colors"
          style={{
            backgroundImage: `url(${AFTER_HERO_BG_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />

          {/* Content */}
          <div className="relative max-w-[1200px] mx-auto px-8 lg:px-12 xl:px-16 py-24 lg:py-28 xl:py-36 flex flex-col items-center justify-center text-center min-h-[580px]">
            <h1 className="reveal-up relative w-full max-w-[980px] [font-family:'Inter',Helvetica] font-black text-transparent text-5xl lg:text-6xl xl:text-7xl tracking-[4px] lg:tracking-[6.6px] leading-[56px] lg:leading-[72px] xl:leading-[80px]">
              <span className="text-[#1f392c] tracking-[3.2px]">
                Spark your{" "}
              </span>
              <span className="text-[#1f392ce3] tracking-[3.2px]">
                brand&#39;s <br />
              </span>
              <span className="text-[#1f392c] tracking-[3.2px]">
                <span className="imaginative-ring hidden lg:inline-block align-middle">
                  <span className="relative z-10">imaginative</span>
                  <svg
                    className="ring-svg"
                    viewBox="0 0 100 50"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <ellipse cx="50" cy="25" rx="48" ry="22" pathLength="100" />
                  </svg>
                </span>
                <span className="inline lg:hidden">imaginative</span> flair
                {"  "}
                <br />
              </span>
              <span className="text-[#1f392ce6] tracking-[3.2px]">with</span>
              <span className="text-[#1f392c] tracking-[3.2px]"> us</span>
            </h1>

            <p className="reveal-up delay-1 relative mt-6 w-full max-w-[820px] [font-family:'Syne',Helvetica] font-regular text-[#1f392c] text-xl lg:text-[26px] text-center leading-8 lg:leading-8">
              Our team combines strategy, design, and technology to breathe life
              into your brand. Collaborate with us to leave a lasting impression
              on your audience.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImagineHandSection;
