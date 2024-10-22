import React from 'react';

interface ButtonProps {
  text: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="bg-[#074229] font-normal text-[16px] text-white px-[24px] rounded-[4px] h-[56px]"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
