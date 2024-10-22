import React from "react";
import SecondaryButton from "./SecondaryButton";

const Impact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center max-w-[100%] gap-8 m-[20px] py-[56px]">
      <div className="flex flex-col items-start w-[100%] lg:w-[996px] mx-auto gap-[24px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-[20px]">
          <div className="flex flex-col w-full max-w-[488px] gap-[16px]">
            <p className="text-[#074229] text-[32px] lg:text-[40px] leading-[42px] lg:leading-[50px] font-bold">
              Earthbond's Solar Energy Impact
            </p>
            <p className="text-[16px] leading-[26px] text-[#444]">
            Our solar energy projects have generated clean, renewable power while significantly reducing carbon emissions. Through our efforts, we’ve offset thousands of tons of CO2, contributing to a greener future and supporting sustainable development across Africa.
            </p>
            <div>
              <SecondaryButton text="See How Your Company Can Benefit" />
            </div>
          </div>
          <div className="group flex flex-col w-full justify-center max-w-[488px] p-[32px] shadow-custom gap-[16px] h-[342px] rounded-[8px] transition-all duration-300 hover:bg-gradient-to-br from-[rgba(55,244,205,0.5)] to-[rgba(7,66,41,0.5)]">
            <h1 className="text-[#074229] text-[56px] lg:text-[72px] font-bold leading-[56px] leading-[72px]">
              100 MW
            </h1>
            <p className="text-[#074229] text-[24px] font-bold leading-[24px]">
              Clean Energy Delivered
            </p>
            <p className="text-[#074229] text-[16px] leading-[26px]">
            We have successfully generated 100 megawatts of clean, renewable energy, reducing reliance on fossil fuels and promoting sustainability across Africa.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[20px]">
          <div className="group flex flex-col w-full justify-center max-w-[488px] p-[32px] shadow-custom gap-[16px] h-[342px] rounded-[8px] transition-all duration-300 hover:bg-gradient-to-br from-[rgba(55,244,205,0.5)] to-[rgba(7,66,41,0.5)]">
            <h1 className="text-[#074229] text-[56px] lg:text-[72px] font-bold leading-[56px] leading-[72px]">
              500,000
            </h1>
            <p className="text-[#074229] text-[24px] font-bold leading-[24px]">
              Tons of CO2 Offset
            </p>
            <p className="text-[#074229] text-[16px] leading-[26px]">
            Through our solar energy initiatives, We have offset 500,000 tons of carbon dioxide, significantly contributing to the fight against climate change and supporting a healthier planet.
            </p>
          </div>
          <div className="group flex flex-col w-full justify-center max-w-[488px] p-[32px] shadow-custom gap-[16px] h-[342px] rounded-[8px] transition-all duration-300 hover:bg-gradient-to-br from-[rgba(55,244,205,0.5)] to-[rgba(7,66,41,0.5)]">
            <h1 className="text-[#074229] text-[56px] lg:text-[72px] font-bold leading-[56px] leading-[72px]">
              1 Million
            </h1>
            <p className="text-[#074229] text-[24px] font-bold leading-[24px]">
              carbon credits for sale
            </p>
            <p className="text-[#074229] text-[16px] leading-[26px]">
            We offer 1 million carbon credits for sale, providing companies the opportunity to offset their emissions while supporting impactful renewable energy projects across Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
