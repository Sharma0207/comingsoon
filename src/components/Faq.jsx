import Button from "./ui/Button";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const faqs = [
    {
      id: 0,
      question: "What services does Flexirl specialize in?",
      answer:
        "We specialize primarily in website and mobile app development, creating custom solutions for businesses of all sizes. We also offer complementary digital marketing services including SEO, social media marketing, and PPC to help promote your digital products.",
    },
    {
      id: 1,
      question: "What types of websites and apps do you develop?",
      answer:
        "We develop a wide range of digital solutions including responsive websites, e-commerce platforms, web applications, iOS and Android mobile apps, progressive web apps (PWAs), and custom software solutions tailored to your business needs.",
    },
    {
      id: 2,
      question: "How long does it take to develop a website or app?",
      answer:
        "Development timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications and mobile apps typically require 8-16 weeks. We'll provide a detailed timeline during your consultation.",
    },
    {
      id: 3,
      question: "Do you work with small businesses or only large enterprises?",
      answer:
        "We work with businesses of all sizes, from startups needing their first website to large enterprises requiring complex application development. Our solutions are scalable and tailored to fit your budget and requirements.",
    },
    {
      id: 4,
      question: "What technologies do you use for development?",
      answer:
        "We use modern, industry-standard technologies including React, React Native, Node.js, Python, PHP, and various database solutions. We choose the best tech stack based on your project requirements and long-term goals.",
    },
    {
      id: 5,
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages including regular updates, security patches, bug fixes, and feature enhancements. We ensure your website or app continues to perform optimally after launch.",
    },
    {
      id: 6,
      question: "Can you help with both design and development?",
      answer:
        "Absolutely! We provide end-to-end services from initial concept and UI/UX design to full development and deployment. Our team handles everything to bring your vision to life with a seamless user experience.",
    },
    {
      id: 7,
      question: "What is your pricing structure for development projects?",
      answer:
        "Our pricing depends on project complexity, features, and timeline. We offer fixed-price packages for standard projects and hourly rates for custom development. Contact us for a free consultation and detailed quote.",
    },
    {
      id: 8,
      question: "How do I get started with my development project?",
      answer:
        "Getting started is simple! Contact us to schedule a free consultation where we'll discuss your requirements, goals, and vision. We'll then provide a detailed proposal with timeline and pricing for your project.",
    },
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="w-full py-4 sm:py-8 md:py-12 lg:py-0 ml-[10px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-auto">
          {/* Main FAQ container */}
          <div className="flex justify-start items-center w-full px-4 sm:px-8 md:px-12 lg:px-[56px] mr-[26px]">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[94%] bg-[#d8f6ff] rounded-[12px] sm:rounded-[30px] md:rounded-[44px] lg:rounded-[70px] p-4 sm:p-6 md:p-8 lg:px-[56px] lg:py-[52px]">
              <div className="flex flex-col lg:flex-row justify-start items-start w-full mb-[12px]">
                {/* Left side - FAQ title and description */}
                <div className="flex flex-col justify-start items-start w-full lg:w-[36%] mb-8 lg:mb-0">
                  <h2 className="text-[26px] sm:text-[44px] md:text-[60px] lg:text-[69px] font-bold leading-[32px] sm:leading-[54px] md:leading-[73px] lg:leading-[83px] text-left text-black font-syne">
                    Faqs
                  </h2>
                  <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[18px] sm:leading-[21px] md:leading-[23px] text-left text-[#939393] font-syne w-full lg:w-[66%] mt-[8px]">
                    Discover answers to the most commonly asked questions about
                    our development services
                  </p>
                </div>

                {/* Right side - FAQ list */}
                <div className="flex flex-col justify-start items-center self-end w-full lg:w-[64%] mt-[12px] mr-[8px]">
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full p-2 sm:p-4">
                    {faqs?.map((faq) => (
                      <div key={faq?.id} className="w-full">
                        <button
                          onClick={() => toggleFAQ(faq?.id)}
                          className={`flex justify-between items-center w-full text-left p-3 ${
                            expandedFAQ === faq?.id
                              ? "bg-white"
                              : "bg-transparent"
                          } border-b border-gray-300`}
                          aria-expanded={expandedFAQ === faq?.id}
                        >
                          <span className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-black font-roboto flex-1 text-left">
                            {faq?.question}
                          </span>
                          <FiChevronDown
                            className={`w-6 h-6 text-black transition-transform duration-200 ${
                              expandedFAQ === faq?.id ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {expandedFAQ === faq?.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.36, ease: "easeOut" }}
                              style={{ overflow: "hidden" }}
                            >
                              <div className="mt-2 p-3 sm:p-4 bg-white">
                                <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-gray-700">
                                  {faq?.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Bottom separator line */}
                  <div className="w-full h-[1px] bg-black mt-[6px]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services ticker */}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
