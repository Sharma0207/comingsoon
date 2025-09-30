import React from "react";

const ImagineHandMobile = ({ onOpenCta }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-w-[402px] min-h-[400px] mx-auto bg-white">
      <header className="flex flex-col items-center justify-center w-[272px] h-[46px] relative">
        <img
          className="relative w-full h-[21.31px]"
          alt="Background banner"
          src="/images/Rectangle 6.png"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[241px] [font-family:'Syne',Helvetica]  text-white text-[11px] text-center tracking-[0] leading-tight">
          Get ready to level up your digital presence 🚀
        </p>
        <img
          className="absolute top-3 left-0 w-[17px] h-4 object-cover"
          alt="Pulsing dot animation"
          src="/images/pulsing.png"
        />
      </header>

      <main className="flex flex-col items-center gap-[21px] mt-[26px]">
        <img
          className="w-[66.67%] h-[8.11%]"
          alt="Decorative line"
          src="/images/Line.svg"
        />

        <h1 className="w-[324px] font inter font-black text-transparent text-[29px] text-center tracking-[3.77px] leading-8">
          <span className="text-[#1f392c] tracking-[1.09px]">Spark your </span>
          <span className="text-[#1f392ce3] tracking-[1.09px]">
            {" "}
            brand's <br />
          </span>
          <span className="text-[#1f392c] tracking-[1.09px]">
            {" "}
            imaginative flair <br />
          </span>
          <span className="text-[#1f392ce6] tracking-[1.09px]">with</span>
          <span className="text-[#1f392c] tracking-[1.09px]"> us</span>
        </h1>

        <p className="w-[324px] [font-family:'Syne-Regular',Helvetica] font-normal text-[#1f392c] text-[14.9px] text-center tracking-[-0.15px] leading-5">
          Our team combines strategy, design, and technology to breathe life
          into your brand. Collaborate with us to leave a lasting impression on
          your audience.
        </p>
      </main>

      <div className="flex justify-center mt-6 w-full">
        <button
          onClick={onOpenCta}
          className="flex items-center justify-center w-[114px] h-[21px] cursor-pointer relative rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f392c] focus:ring-opacity-50"
          aria-label="Let's Connect - Contact us to start your project"
        >
          <img
            className="w-full h-full object-cover"
            alt=""
            src="/images/LET-CONNET-BUTTON.svg"
          />
          <span className="absolute text-[10px] leading-[14px] text-white [font-family:'Outfit-Medium',Helvetica]">
            Let's connect
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImagineHandMobile;
