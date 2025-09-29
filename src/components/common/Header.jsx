import React, { useState, useEffect } from "react";
import SayHelloButton from "../ui/SayHelloButton";

const SmileyBlink = ({ onOpen, sticky }) => {
  const [blinking, setBlinking] = useState(false);

  const handleClick = () => {
    setBlinking(true);
    if (typeof onOpen === "function") onOpen();
    setTimeout(() => setBlinking(false), 250);
  };

  // Keep smiley color unchanged: always dark background with white icon
  const btnBg = "bg-[#0E0E2E] text-white";

  return (
    <button
      className={`${sticky ? "fixed top-2 right-2" : "absolute top-2 right-2 sm:top-3 sm:right-3"} lg:hidden w-9 h-9 sm:w-11 sm:h-11 rounded-full ${btnBg} flex items-center justify-center shadow-md active:scale-95 transition-all duration-300`}
      onClick={handleClick}
      aria-label="Smiley blink button"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="22" fill="#0E0E2E" />
        <g className={blinking ? "origin-center animate-blink" : ""}>
          <path d="M14 18 L18 22 L14 26 L22 22 L14 18 Z" fill="#FFFFFF" />
          <path d="M34 18 L30 22 L34 26 L26 22 L34 18 Z" fill="#FFFFFF" />
        </g>
        <path
          d="M15 30 C19 36, 29 36, 33 30"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </button>
  );
};

const Header = ({ onOpenCta }) => {
  const [sticky, setSticky] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  React.useEffect(() => {
    const home = document.querySelector('#home');
    const sayhello = document.querySelector('#sayhello');
    const onScroll = () => {
      let isSticky = false;
      if (home) {
        const trigger = home.offsetTop + home.offsetHeight - 10;
        isSticky = window.scrollY >= trigger;
      }
      if (sayhello) {
        const stopAt = sayhello.offsetTop - 80;
        if (window.scrollY >= stopAt) isSticky = false;
      }
      setSticky(isSticky);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  React.useEffect(() => {
    const ids = ['#home','#about','#services','#projects','#testimonial','#sayhello'];
    const sections = ids.map((id)=>document.querySelector(id));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((e)=>{ if (e.isIntersecting) setActiveHash('#'+e.target.id); });
    }, { rootMargin: '-30% 0px -70% 0px' });
    sections.forEach((s)=> s && io.observe(s));
    return () => sections.forEach((s)=> s && io.unobserve(s));
  }, []);

  return (
    <div
      className=" absolute top-7 sm:top-[30px] md:top-[12px] lg:top-[50px] left-[15px] right-[15px] flex justify-between items-center z-10"
    >
      {/* Flexirl Logo */}
      <h1 className="hidden lg:block text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold leading-[30px] sm:leading-[40px] md:leading-[48px] lg:leading-[54px] tracking-[1px] text-left text-black font-inter">
        <a href="#home">Flexirl</a>
      </h1>

      {/* Say Hello Button - Desktop (opens CTA slider) */}
      <div className="hidden lg:flex">
        <SayHelloButton className="flex" onClick={onOpenCta} />
      </div>

      {/* Mobile/Tablet Smiley Button with Blink on Click (opens CTA slider) */}
      <SmileyBlink onOpen={onOpenCta} sticky={sticky} />
    </div>
  );
};

export default Header;

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-12 z-50 bg-[#D4F0FC]">
//       {/* Flexirl Logo */}

//       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-wide font-inter">
//         Flexirl
//       </h1>

//       {/* Say Hello Button - Desktop */}
//       <div className="hidden lg:flex">
//         <SayHelloButton className="flex" />
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="lg:hidden p-3 text-black"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };
// export default Header;
