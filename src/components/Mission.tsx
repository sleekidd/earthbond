import React from "react";
import Mission1 from "../assets/our-mission.svg";
import Mission2 from "../assets/info1.svg";
import Mission3 from "../assets/sun-panel.svg";
import Mission4 from "../assets/global.svg";
import Mission5 from "../assets/growth.svg";
import SecondaryButton from "./SecondaryButton";

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col justify-center mx-[16px] lg:mx-auto max-w-[1200px] rounded-[12px] gap-8 m-[20px] py-[24px] lg:py-[56px]">
      <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[48px] justify-center items-center">
        <div className="flex flex-col w-full max-w-[576px] gap-[8px]">
          <p className="font-normal text-[18px] text-[#444]">Our Mission:</p>
          <h1 className="font-bold text-[32px] lg:text-[48px] leading-[42px] lg:leading-[56px] text-[#074229]">
            Empowering Africa with Clean Energy
          </h1>
        </div>
        <div className="flex flex-col w-full max-w-[576px]">
          <p className="font-normal text-[16px] leading-[28px] text-[#444]">
          At Earthbond, we're committed to driving sustainable development across Africa by harnessing the power of solar energy. Our mission is to reduce carbon emissions globally while providing clean, reliable energy to communities in need, contributing to a greener and more prosperous future for all.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[24px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex">
            <img src={Mission1} alt="" />
          </div>
          <div className="flex flex-row gap-[24px]">
            <div className="flex flex-col justify-between items-center bg-[#074229] rounded-[8px] pt-[32px] w-full max-w-[385px] lg:h-[435px] shadow-custom">
                <p className="text-[16px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-white max-w-[321px] px-[12px]">Expanding renewable energy projects across Africa.</p>
              <img src={Mission2} alt="" />
            </div>
            <div className="flex flex-col justify-between items-center bg-[#F7ECE1] rounded-[8px] pt-[32px] w-full max-w-[385px] lg:h-[435px] shadow-custom">
                <p className="text-[16px] lg:text-[24px]  leading-[24px] lg:leading-[32px] text-[#074229] max-w-[321px] px-[12px]">Promoting sustainable development and clean energy.</p>
              <img src={Mission3} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row lg:flex-col gap-[24px]">
          <div className="flex flex-col justify-between items-center bg-[#074229] rounded-[8px] pt-[32px] w-full max-w-[385px] lg:h-[407px] shadow-custom">
                <p className="text-[16px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-white max-w-[321px] px-[12px]">Reducing global carbon emissions.</p>
              <img src={Mission4} alt="" />
            </div>
            <div className="flex flex-col justify-between items-center bg-[#F7ECE1] rounded-[8px] pt-[32px] w-full max-w-[385px] lg:h-[329px] shadow-custom">
                <p className="text-[16px] lg:text-[24px]  leading-[24px] lg:leading-[32px] text-[#074229] max-w-[321px] px-[12px]">Promoting Earthbond’s Commitment</p>
              <img src={Mission5} alt="" />
            </div>
          </div>
          <SecondaryButton text="Join Us on Our Mission" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
