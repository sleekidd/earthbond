import React from 'react';

interface ButtonProps {
  text: string;
}

const TertiaryButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="font-normal text-[16px] text-white px-[24px] rounded-[4px] h-[56px] border-[1px] border-white"
    >
      {text}
    </button>
  );
};

export default TertiaryButton;
