import React from "react";

const ActionButtons = () => {
  const handleGetInTouch = () => {
    // Add your get in touch functionality here
    console.log("Get in Touch clicked!");
  };

  const handleSeeOurWork = () => {
    // Add your see our work functionality here
    console.log("See Our Work clicked!");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start items-center w-full gap-4 sm:gap-[36px]">
      <button
        onClick={handleGetInTouch}
        className="text-[16px] sm:text-[18px] font-normal leading-[20px] sm:leading-[22px] text-left text-[#183942] font-syne border border-black rounded-[12px] px-[12px] sm:px-[16px] py-[8px] sm:py-[12px] hover:bg-gray-50 transition-colors"
      >
        Get in Touch
      </button>

      <button
        onClick={handleSeeOurWork}
        className="flex justify-center items-center w-auto sm:w-[10%] gap-2 hover:opacity-80 transition-opacity"
      >
        <span className="text-[16px] sm:text-[18px] font-normal leading-[20px] sm:leading-[22px] text-left underline text-[#183942] font-syne">
          See Our Work
        </span>
        <img
          src="/images/img_clarity_arrow_line.svg"
          alt="Arrow"
          className="w-[20px] sm:w-[24px] md:w-[26px] h-[20px] sm:h-[24px] md:h-[26px]"
        />
      </button>
    </div>
  );
};

export default ActionButtons;
