import React from "react";
import PrimaryButton from "./PrimaryButton";
import TertiaryButton from "./TertiaryButton";
// import PrimaryButton from "./PrimaryButton";

const CTA: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] justify-between mx-[16px] lg:mx-auto rounded-[12px] gap-8 m-[20px] py-[56px]">
      <div className="flex flex-col w-full max-w-[1200px] lg:flex-row gap-[64px] justify-between items-start lg:items-center">
        <div className="flex flex-col gap-[16px] w-full max-w-[768px]">
          <h1 className="text-white font-bold text-[32px] lg:text-[40px] leading-[42px] lg:leading-[50px]">
            Ready to Offset Your Carbon Footprint?
          </h1>
          <p className="text-white text-[16px]">Contact Earthbond today to purchase carbon credits and support clean energy.</p>
        </div>
        <div className="flex flex-col gap-[16px]">
            <PrimaryButton text="Contact Us for Carbon Credits" />
            <TertiaryButton text="Learn About Our Impact" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
