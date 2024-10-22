import React, {useState} from "react";
import herobg from "../../public/earthbond-hero-bg.svg";
import Navbar from "./Navbar";
import PrimaryButton from "./PrimaryButton";
import TertiaryButton from "./TertiaryButton";
import Modal from "./Modal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="flex flex-row justify-center max-w-[100%] rounded-[12px] px-[24px] lg:px-[48px] py-[24px] lg:py-[24px] items-start bg-cover bg-center bg-no-repeat h-screen max-h-[752px] gap-[16px] lg:gap-[50px] m-[12px] lg:m-[20px]" style={{ backgroundImage: `url(${herobg})` }}>
      <div className="flex flex-col max-w-[1200px] w-full h-[550px] lg:h-[409px] justify-between">
        <Navbar />
        <div className="flex flex-row">
          <div className="flex flex-col w-full gap-[24px] lg:gap-[45px]">
            <div className="flex flex-col gap-[48px] lg:gap-[24px] justify-center items-center">
              <div className="flex flex-col gap-[8px] items-center">
                <p className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] text-[#FFFFFF] text-center lg:max-w-[890px] font-monasans font-black uppercase">
                  Harness <span className="text-[#FFCD1D]">Solar Energy</span> for a Sustainable Future
                </p>
                <p className="text-center text-[#FFFFFF] text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-[26px] max-w-[786px]">
                  Discover how Earthbond’s solar energy projects are making a
                  difference in reducing carbon footprints.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-[16px]">
                <PrimaryButton text="Contact Us for Carbon Credits" onClick={openModal} />
                <TertiaryButton text="Learn About Our Impact" />
                {isModalOpen && <Modal closeModal={closeModal} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
