// app/louer/page.tsx
"use client"; // Assurez-vous que c'est marqué comme composant client si vous utilisez des hooks

import { useState } from "react";
import CarCard from "@/components/CarCard";
import Footer from "@/components/Footer";

const LouerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Logique de recherche ici
  };

  const carImages = [
    "/images/car1.jpg",
    "/images/car2.jpg",
    "/images/car3.jpg",
  ];

  const carDescriptions = [
    "Voiture luxueuse et confortable.",
    "Voiture sportive avec de hautes performances.",
    "Voiture familiale avec beaucoup d'espace.",
  ];

  return (
    <div className="page-container">
      <header className="header">
        <h1 className="text-3xl font-bold mb-4">Louer une Voiture</h1>
      </header>
      <main className="main-content">
        {/* Ajouter ici la barre de recherche si nécessaire */}
        <div className="car-cards-container mt-8">
          <CarCard images={carImages} descriptions={carDescriptions} />
          {/* Ajoutez plus de CarCard ici si nécessaire */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LouerPage;
