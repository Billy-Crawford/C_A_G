// app/buy-car/page.tsx
"use client"

import OtherNavbar from "@/components/OtherNavbar";

const BuyCar = () => {
  return (
    <div>
      <OtherNavbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Acheter une Voiture</h1>
        <p>Découvrez les voitures disponibles à la vente ici.</p>
        {/* Ajoutez un formulaire de recherche ou d'autres informations ici */}
      </main>
    </div>
  );
};

export default BuyCar;
