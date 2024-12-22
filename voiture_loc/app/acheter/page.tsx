// app/acheter/page.tsx
"use client"

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import Footer from "@/components/Footer";

const BuyPage = () => {
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
    "Voiture neuve avec garantie.",
    "Modèle d'occasion en excellent état.",
    "Voiture de collection à vendre.",
  ];

  return (
    <div>
      <main className="padding-x padding-y max-width">
        <div className="hero flex flex-col items-center">
          <h1 className="text-4xl font-bold">Achetez votre voiture</h1>
          <p className="text-lg mt-4">
            Explorez notre sélection de voitures à vendre et trouvez celle qui
            vous convient.
          </p>
          <SearchBar
            onSearch={handleSearch}
            placeholder="Rechercher une voiture..."
          />
        </div>
        <div className="mt-12">
          <CarCard images={carImages} descriptions={carDescriptions} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyPage;
