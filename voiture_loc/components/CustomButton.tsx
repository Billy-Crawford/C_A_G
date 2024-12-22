// components/CustomButton.tsx
"use client";

import React from "react";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
}) => {
  return (
    <button
      className={`py-2 px-4 ${containerStyles}`}
      onClick={handleClick} // Utilisation correcte de handleClick
    >
      {title}
    </button>
  );
};

export default CustomButton;
