// app/car-parts/page.tsx
import OtherNavbar from "@/components/OtherNavbar";

const CarParts = () => {
  return (
    <div>
      <OtherNavbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Je Cherche une Pièce Détachée</h1>
        <p>
          Vous pouvez rechercher des pièces détachées pour votre voiture ici.
        </p>
        {/* Ajoutez un formulaire de recherche ou d'autres informations ici */}
      </main>
    </div>
  );
};

export default CarParts;
