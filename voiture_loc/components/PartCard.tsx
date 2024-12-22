// components/PartCard.tsx
"use client";

import React from "react";

interface PartCardProps {
  imageUrl: string; // Ajout de la prop imageUrl
  title: string;
  description: string;
}

const PartCard: React.FC<PartCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="part-card bg-white border rounded shadow-md p-4">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default PartCard;
