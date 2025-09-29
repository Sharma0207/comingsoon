import React, { useState, useEffect, useRef } from "react";
import FlexirlLineReveal from "@/components/ui/FlexirlLineReveal";
import f1 from "/images/f1.jpg";
import f2 from "/images/f2.jpg";
import f3 from "/images/f3.jpg";
import f22 from "/images/f22.jpg";

export const FounderSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Ayushya",
      role: "Co-founder & Creative Director",
      image: f1,
      bgColor: "#F59E0B",
      description:
        "Creative leader shaping brand narratives and visual direction",
      instagram: "https://instagram.com/ayushraj6507",
      linkedin: "https://www.linkedin.com/in/ayushya-raj-59a1922b2/",
      email: "info@flexirl.com",
    },
    {
      id: 2,
      name: "Balmukund",
      role: "Co-founder — Tech & Marketing Lead",
      image: f22,
      bgColor: "#06B6D4",
      description:
        "Driving product and growth through technology and marketing",
      instagram: "https://instagram.com/the_imperfectjourney",
      linkedin: "https://www.linkedin.com/in/balmukund-kumar02/",
      email: "info@flexirl.com",
    },
    {
      id: 3,
      name: "Anubhav",
      role: "Co-founder — Tech & Operations Lead",
      image: f3,
      bgColor: "#8B5CF6",
      description: "Ensuring reliable tech delivery and smooth operations",
      instagram: "https://instagram.com/anubhavkr_singh",
      linkedin: "https://www.linkedin.com/in/anubhav-kumar-778245262/",
      email: "info@flexirl.com",
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-white py-24 overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12">
            <div className="max-w-3xl">
              {/* Animated heading replaces static Our Team / Meet the founders */}
              <FlexirlLineReveal
                align="left"
                lines={[
                  { text: "Our Team", size: "small" },
                  { text: "Meet the Founders", size: "large", hasRedDot: true },
                ]}
              />

              <p className="text-base text-gray-600 leading-relaxed mt-4">
                We're a small team of creators who care deeply about design and
                product.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                    {/* Image Container with Color Overlay */}
                    <div className="relative h-[500px] overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80"
                        style={{ backgroundColor: member.bgColor }}
                      />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Bottom Gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Name and Role on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium opacity-90">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {member.description}
                      </p>

                      {/* Social links and email */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:scale-105 transition"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                                stroke="#111827"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                                stroke="#111827"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="18" cy="6" r="0.5" fill="#111827" />
                            </svg>
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:scale-105 transition"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2"
                                stroke="#111827"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2 9h4v12H2z"
                                stroke="#111827"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="4" cy="4" r="1.5" fill="#111827" />
                            </svg>
                          </a>
                        </div>

                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm text-gray-700 hover:underline"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none ${
                      hoveredIndex === index
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                    style={{ borderColor: member.bgColor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-amber-100 opacity-50 blur-2xl" />
        <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-cyan-100 opacity-50 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-violet-100 opacity-40 blur-2xl" />
      </section>
    </>
  );
};

export default FounderSection;
