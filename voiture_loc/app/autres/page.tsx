// app/autres/page.tsx
"use client"

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CustomButton from "@/components/CustomButton"; // Exemple d'utilisation
import Footer from "@/components/Footer";

const OtherPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Logique de recherche ici
  };

  return (
    <div>
      <main className="padding-x padding-y max-width">
        <div className="hero flex flex-col items-center">
          <h1 className="text-4xl font-bold">Découvrez nos autres services</h1>
          <p className="text-lg mt-4">
            Explorez nos services supplémentaires qui pourraient vous
            intéresser.
          </p>
          <SearchBar
            onSearch={handleSearch}
            placeholder="Rechercher un service..."
          />
          <div className="mt-6">
            <CustomButton
              title="En savoir plus"
              containerStyles="bg-primary-blue text-white rounded-full"
              handleClick={() => alert("En savoir plus")}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OtherPage;
