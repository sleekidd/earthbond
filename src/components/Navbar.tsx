import React from "react";
import Logo from '../assets/earthbond-logo.svg'
import PrimaryButton from "./PrimaryButton";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between max-w-[1200px]">
        <img src={Logo} alt="" className="w-[140px]" />
        <PrimaryButton text="Get Started" />
    </div>
  );
};

export default Navbar;
