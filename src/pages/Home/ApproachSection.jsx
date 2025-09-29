import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import folder from "/images/Union.png";
import discover from "/images/discover.png";
import design from "/images/design.svg";
import deploy from "/images/deploy.svg";

const AboutSection = () => {
  const isLg = useMediaQuery("(min-width: 1024px)");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemLg = {
    hidden: { opacity: 0, x: 30, y: 8 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemSm = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[14px] justify-start items-center w-full mt-[-16px] sm:mt-[-24px] md:mt-[-28px] lg:mt-[-32px]">
          {/* Main content container */}
          <div className="flex flex-col gap-[18px] justify-start items-center w-full max-w-[1182px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[56px]">
            <div className="flex flex-col gap-[8px] justify-start items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                {/* Main heading */}
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[73px] text-center text-[#183942] font-inter">
                  <span className="font-semibold">Our</span>
                  <span className="font-extrabold"> Approach</span>
                  <span className="text-[#ef4b6e]">.</span>
                </h2>

                {/* Description text */}
                <div className="text-[13px] mt-4 sm:text-[14px] md:text-[15px] font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] text-center text-[#1e1e1e] font-syne w-full">
                  <p className="mb-4">
                    <span className="font-regular">
                      At Flexirl, we believe technology should be simple, smart,
                      and scalable. We help businesses harness the power of
                      digital solutions to grow faster, connect better, and
                      stand out in a crowded market. We do not just build — we
                      listen, analyze, and innovate. Our team dives deep into
                      your business goals and customer journeys to craft
                      tailored digital strategies that actually deliver results.
                    </span>
                  </p>
                  <p className="mb-4">
                    <span className="font-regular">
                      Opportunities are discovered, nurtured, and amplified
                      through modern tech solutions, creative design, and
                      data-driven strategies.
                    </span>
                    <span className="font-bold">
                      From websites and mobile apps to social media, marketing,
                      and SEO, our approach ensures your business is not just
                      online — it thrives online.
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">
                      Our prototype-driven, iterative model ensures every
                      solution we deliver is tested, refined, and perfected for
                      real-world impact. With Flexirl, your brand does not just
                      adapt to digital transformation — it leads it.
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Process steps - responsive grid: xs -> 1, sm -> 2, lg -> 4 */}
            <div className="relative w-full mt-4">
              {/* Decorative folder-like background (visible on desktop) */}
              <img
                src={folder}
                alt="decorative folder background"
                className="hidden lg:block absolute -left-12 top-6 w-56 md:w-72 lg:w-80 opacity-30 pointer-events-none z-1"
              />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full relative z-10"
              >
                {/* Discover */}
                <motion.div
                  variants={isLg ? itemLg : itemSm}
                  className="relative bg-white border border-[#e8e8e8] rounded-lg p-4 sm:p-6 min-h-[140px] flex flex-col justify-between shadow-sm"
                >
                  <img
                    src={discover}
                    alt="Discover process"
                    className="absolute right-3 top-3 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 object-cover"
                  />

                  <div className="flex flex-col gap-3 justify-start items-start z-10">
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-black font-inter">
                      Discover
                    </h3>
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#000000a5] font-syne max-w-[85%]">
                      We understand your business, audience, and digital
                      challenges.
                    </p>
                  </div>
                </motion.div>

                {/* Design */}
                <motion.div
                  variants={isLg ? itemLg : itemSm}
                  className="relative bg-white border border-[#e8e8e8] rounded-lg p-4 sm:p-6 min-h-[140px] flex flex-col justify-between shadow-sm"
                >
                  <div className="flex items-center justify-between w-full z-10">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-black font-inter">
                        Design
                      </h3>
                      <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#000000a5] font-syne max-w-[85%]">
                        We craft tailored websites, apps, visuals, and
                        campaigns.
                      </p>
                    </div>
                    <img
                      src={design}
                      alt="Design process"
                      className="w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 object-cover"
                    />
                  </div>
                </motion.div>

                {/* Deploy */}
                <motion.div
                  variants={isLg ? itemLg : itemSm}
                  className="relative bg-white border border-[#e8e8e8] rounded-lg p-4 sm:p-6 min-h-[140px] flex flex-col justify-between shadow-sm"
                >
                  <img
                    src={deploy}
                    alt="Deploy process"
                    className="absolute right-3 top-3 w-14 sm:w-18 md:w-24 h-14 sm:h-18 md:h-24 object-cover"
                  />
                  <div className="flex flex-col gap-2 z-10">
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-black font-inter">
                      Deploy
                    </h3>
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#000000a5] font-syne max-w-[85%]">
                      We launch tech solutions backed with marketing and SEO.
                    </p>
                  </div>
                </motion.div>

                {/* Deliver Growth */}
                <motion.div
                  variants={isLg ? itemLg : itemSm}
                  className="relative bg-white border border-[#e8e8e8] rounded-lg p-4 sm:p-6 min-h-[140px] flex flex-col justify-between shadow-sm"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1fcc1bf089804dbcb25502fab34b5e07%2F8b21c16fd54142c2832ba50711afb645?format=webp&width=800"
                    alt="Deliver growth"
                    className="absolute right-3 top-3 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 object-cover"
                  />
                  <div className="flex flex-col gap-3 z-10">
                    <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-black font-inter">
                      Deliver Growth
                    </h3>
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#000000a5] font-syne max-w-[90%]">
                      We monitor, analyze, and optimize for sustained business
                      impact.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom decorative image - center on small, right on larger */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
