import React from "react";
import { InfiniteMovingCards } from "../../components/ui/InfiniteMovingCards";
import quoteicon from "/images/coma.svg";

const testimonials = [
  {
    rating: 5,
    text: "As a makeup artist, I needed a portfolio that truly reflects my work. The team created a stunning portfolio website for me, and it has helped me showcase my art beautifully.",
    name: "Anchala Sharma",
    role: "Makeup Artist",
    bgColor: "#efefef",
    textColor: "#4b4f47",
  },
  {
    rating: 5,
    text: "The MMA team built our Mercantile Marine Academy EdTech website with precision and professionalism. Their work has been a huge step forward for our academy’s digital presence.",
    name: "MMA Team",
    role: "Mercantile Marine Academy",
    bgColor: "#183942",
    textColor: "#ffffff",
  },
  {
    rating: 5,
    text: "Khub bhalo bachi website! I am very happy with the creative design and animations provided. The team delivered exactly what I was looking for in terms of graphics and interactive experience.",
    name: "Mainak Guha Thakurta",
    role: "Graphic Designer",
    bgColor: "#efefef",
    textColor: "#4b4f47",
  },
  {
    rating: 5,
    text: "Our experience with logo design, posters, and digital marketing was excellent. The team at Maa Anjani Construction is truly satisfied with the creative solutions provided.",
    name: "Maa Anjani Construction",
    role: "Construction & Marketing",
    bgColor: "#183942",
    textColor: "#ffffff",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white dark:bg-black relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center mb-12">
          <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-normal text-center text-black dark:text-white font-syne">
            Hear it From Our Clients
          </h2>
          <div className="flex justify-center items-center w-full mt-4">
            <img src={quoteicon} alt="Quote" className="w-20 h-20 opacity-70" />
            <img
              src={quoteicon}
              alt="Quote"
              className="w-20 h-20 -ml-10 opacity-70"
            />
          </div>
        </div>

        {/* Infinite moving testimonials */}
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="medium"
          className="mt-8"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
