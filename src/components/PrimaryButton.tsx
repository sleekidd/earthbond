import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;  
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick} 
      className="bg-white font-normal text-[16px] text-[#074229] px-[24px] rounded-[4px] h-[56px]"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
