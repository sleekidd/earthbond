import React from "react";
import WhyUsProp from "../WhyUs/WhyUsProp";
import cell from "../../assets/solar-cell.svg";
import panel from "../../assets/solar-panels.svg";
import energy from "../../assets/renewable-energy.svg";
import Checkmark from "../../assets/Check icon.svg";
import PrimaryButton from "../PrimaryButton";

const WhyUs: React.FC = () => {
  return (
    <div className="flex flex-col justify-center max-w-[100%] rounded-[12px] bg-[#074229] bg-cover bg-center bg-no-repeat gap-8 m-[20px] py-[56px]">
      <div className="flex flex-col items-start w-[100%] lg:w-[1200px] mx-auto gap-[24px] px-4 lg:px-0">
        <p className="text-[32px] max-w-[360px] leading-[42px] lg:text-[40px] text-white lg:max-w-[1280px] lg:leading-[44px] font-medium text-start">
          Why Purchase Earthbond’s Carbon Credits?
        </p>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-row items-start gap-[8px]">
            <img src={Checkmark} alt="" />
            <p className="text-start max-w-[100%] lg:max-w-[670px] text-white">
              Help your company meet sustainability goals.
            </p>
          </div>
          <div className="flex flex-row items-start gap-[8px]">
            <img src={Checkmark} alt="" />
            <p className="text-start max-w-[100%] lg:max-w-[670px] text-white">
            Offset your carbon emissions through renewable energy projects.
            </p>
          </div>
          <div className="flex flex-row items-start gap-[8px]">
            <img src={Checkmark} alt="" />
            <p className="text-start max-w-[100%] lg:max-w-[670px] text-white">
            Support clean energy development in Africa.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto flex flex-row gap-4 lg:w-[1200px] mx-auto">
        <div className="flex flex-nowrap gap-4 px-4 lg:px-0">
          <WhyUsProp
            icon={cell}
            title="Earthbond for Enterpreneurs"
            description="We empower entrepreneurs by offering access to carbon credits and sustainable energy solutions."
          />
          <WhyUsProp
            icon={panel}
            title="Earthbond for Companies"
            description="We help companies achieve sustainability by offering carbon credits from our solar energy projects."
          />
          <WhyUsProp
            icon={energy}
            title="Earthbond for Large Organizations"
            description="We partner with large organizations to offer scalable carbon credit solutions from solar energy projects."
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-[100%] lg:w-[1200px] mx-auto gap-[24px] px-4 lg:px-0">
        <p className="text-[18px] max-w-[360px] leading-[28px] lg:text-[24px] text-white lg:max-w-[1280px] lg:leading-[32px] font-bold text-start">
        Interested in Carbon Credits?
        </p>
        <div className="flex flex-col gap-[16px]">
          <PrimaryButton text="Get in Touch with Us" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
