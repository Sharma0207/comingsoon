import React from "react";
import separatorImg from "/images/sun.svg"; // adjust path

const FixedRibbon = ({ servicesList }) => {
  // create repeated list to enable seamless marquee loop
  const items = servicesList.map((service, index) => (
    <React.Fragment key={"item-" + index}>
      <span className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[22px] sm:leading-[26px] md:leading-[30px] text-left text-white font-inter whitespace-nowrap">
        {service}
      </span>
      {index < servicesList.length - 1 && (
        <img
          src={separatorImg}
          alt="Service separator"
          className="w-[24px] sm:w-[28px] md:w-[32px] h-[24px] sm:h-[28px] md:h-[32px] self-center"
        />
      )}
    </React.Fragment>
  ));

  return (
    <div className="w-full bg-[#ef4b6e]">
      <div className="ribbon-container px-4 py-2">
        <div className="ribbon-track">
          {items}
          {items}
        </div>
      </div>
    </div>
  );
};

// Usage with default list if no prop is passed
FixedRibbon.defaultProps = {
  servicesList: [
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Design (Ui &Ux)",
    "Video Editing",
  ],
};

export default FixedRibbon;
