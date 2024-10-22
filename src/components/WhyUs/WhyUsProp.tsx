import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const WhyUsProp: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col gap-[24px] w-[384px] lg:max-w-[384px] h-[380px] rounded-[4px] px-6 py-12 items-start bg-[#fff]">
      <img
        className="flex flex-col items-center justify-center"
        src={icon}
        alt={title}
      />
      <div className="flex flex-col gap-[16px]">
        <div className="font-medium text-[18px] lg:text-[24px] text-[#074229] max-w-[280px]">
          {title}
        </div>
        <p className="text-[#444444] text-[16px] leading-[26px] text-start font-regular">
          {description}
        </p>
        <a href="" className="text-[#444444]">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default WhyUsProp;
