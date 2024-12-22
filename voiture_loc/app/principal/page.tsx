// app/principal/page.tsx
"use client"

import OtherNavbar from "@/components/OtherNavbar";
import { Hero, SearchBar, Footer } from "@/components";
import CustomFilter from "@/components/customFilter";
import BackToHomeIcon from "@/components/BackToHomeIcon";
import { useState } from "react";

export default function PrincipalPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Logique de recherche ici
  };

  return (
    <div>
      <OtherNavbar />
      <main className="overflow-hidden">
        <Hero /> {/* Composant Hero pour l'affichage de la section héro */}
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-3xl font-bold">
              Découvrez le monde du luxe routier avec{" "}
              <span className="text-blue-500">_GEDULD 😊</span>
            </h1>
          </div>

          <div className="home__filters">
            <SearchBar
              onSearch={handleSearch} // Fournir la fonction onSearch
              placeholder="Rechercher une voiture..."
            />
            <div className="home__filter-container">
              {/* <CustomFilter title='fuel'/>
              <CustomFilter title='year'/> */}
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm">
              Découvrir nos voitures
            </button>
          </div>
        </div>
      </main>
      <Footer /> {/* Footer ajouté */}
      <BackToHomeIcon /> {/* Icône de retour ajoutée */}
    </div>
  );
}
