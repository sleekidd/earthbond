import React, {useState} from "react";
import Logo from '../assets/earthbond-logo.svg'
import PrimaryButton from "./PrimaryButton";
import Modal from "./Modal";

const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-row justify-between max-w-[1200px]">
        <img src={Logo} alt="" className="w-[140px]" />
        <PrimaryButton text="Get Started" onClick={openModal} />
          {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Navbar;
