import React from "react";

const SayHelloButton = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1c2042] gap-[8px] justify-center items-center px-[18px] py-[7px] rounded-none hover:bg-[#2a2f5a] transition-colors duration-200 ${className}`}
    >
      <span className="text-[12px] font-medium leading-[15px] tracking-[1px] text-left text-white font-inter">
        SAY HELLO
      </span>
      <img
        src="/images/Happy.png"
        alt="Happy emoji"
        className="w-[22px] h-[24px]"
      />
    </button>
  );
};

export default SayHelloButton;
