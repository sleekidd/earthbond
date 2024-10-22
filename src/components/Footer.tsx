import React from "react";
// import herobg from "../assets/herobg.svg";
import logowhite from "../assets/earthbond-logo.svg";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-[#074B2E] rounded-[12px] py-[48px]">
      <div className="w-full lg:w-[1200px] flex flex-col mx-auto gap-8">
        <div className="flex flex-wrap lg:flex-row gap-8 text-white p-4 lg:p-0">
          <div className="w-[100%] lg:w-[30%] flex flex-col items-start justify-start gap-4">
            <img src={logowhite} alt="" />
            <p className="text-white text-[16px] leading-[26px] text-start lg:max-w-[280px]">
            We're the one-stop-shop for businesses that need reliable solar energy that saves them money on fuel for their generators
            </p>
          </div>
          <div className="w-[45%] lg:w-[20%] flex flex-col gap-4 text-start">
            <p className="font-semibold text-[14px] uppercase">Quick Links</p>
            <a href="">About Earthbond</a>
            <a href="">Our Mission</a>
            <a href="">Carbon Credits</a>
            <a href="">Blog</a>
            <a href="">Contact Us</a>
          </div>
          <div className="w-[45%] lg:w-[20%] flex flex-col gap-4 text-start">
            <p className="font-semibold text-[14px] uppercase">Legal</p>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Disclaimer</a>
          </div>
          <div className="w-[45%] lg:w-[20%] flex flex-col gap-4 text-start">
            <p className="font-semibold text-[14px] uppercase">Social Media Links</p>
            <a href="">Facebook</a>
            <a href="">X (Twitter)</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[1200px] gap-8 items-center">
          <hr className="w-full h-[1px] bg-[#E4E7EC] border-none" />
          <div className="items-center text-white">
            <p className="">© 2024 Earthbond. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
