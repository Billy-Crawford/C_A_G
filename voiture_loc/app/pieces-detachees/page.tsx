// app/pieces-detachees/page.tsx
"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import PartCard from "@/components/PartCard";
import Footer from "@/components/Footer";

const PiecesDetacheesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Logique de recherche ici
  };

  return (
    <div>
      <header className="bg-gray-200 py-4 px-6">
        <h1 className="text-2xl font-bold">Pièces Détachées</h1>
        <SearchBar
          onSearch={handleSearch}
          placeholder="Rechercher des pièces détachées..."
        />
      </header>
      <main className="py-6 px-6">
        {/* Remplacez ce contenu par la liste de pièces détachées */}
        <PartCard
          title="Exemple de pièce"
          description="Description de la pièce"
          imageUrl="/images/part1.jpg"
        />
        {/* Ajoutez d'autres <PartCard /> ici */}
      </main>
      <Footer />
    </div>
  );
};

export default PiecesDetacheesPage;
