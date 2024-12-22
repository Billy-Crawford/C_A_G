// components/CarCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CarCardProps {
  images: string[];
  descriptions: string[];
}

const CarCard: React.FC<CarCardProps> = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="car-card relative w-full max-w-md mx-auto overflow-hidden">
      <div className="relative w-full h-64">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Car image ${index}`}
              layout="fill"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 text-white text-center py-2">
        <p>{descriptions[currentIndex]}</p>
      </div>
    </div>
  );
};

export default CarCard;
