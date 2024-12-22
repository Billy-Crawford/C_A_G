// components/Hero.tsx
"use client";

import CarCard from "@/components/CarCard";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    // Logique pour le défilement (à compléter)
  };

  const carImages = [
    "/images/car-1.jpg",
    "/images/car-2.jpg",
    "/images/car-3.jpg",
    "/images/car-4.jpg", // Assurez-vous d'avoir ces images dans le dossier public
  ];

  const carDescriptions = [
    "Voiture de luxe 1 avec confort exceptionnel.",
    "Voiture sportive 2 idéale pour les grandes vitesses.",
    "Voiture familiale 3 avec beaucoup d'espace.",
    "Voiture citadine 4 parfaite pour la ville.",
  ];

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Trouver, reserver ou louer une voiture rapidement et facilement
        </h1>
        <p className="text-base md:text-lg">
          Rouler dans le confort n'a jamais ete aussi facile ! Simplifiez vous
          la vie avec GEDULD
        </p>

        <CustomButton
          title="Découvrir nos voitures"
          containerStyles="bg-primary-blue text-white rounded-full mt-8"
          handleClick={handleScroll}
        />
        <CarCard images={carImages} descriptions={carDescriptions} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/images/rr-sbg.png"
            alt="hero"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
