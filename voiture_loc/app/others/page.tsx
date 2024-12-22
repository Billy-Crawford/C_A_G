// app/others/page.tsx
import OtherNavbar from "@/components/OtherNavbar";

const Others = () => {
  return (
    <div>
      <OtherNavbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Autres</h1>
        <p>Voici d'autres options ou services que nous proposons.</p>
        {/* Ajoutez des détails ou un formulaire pour les autres services ici */}
      </main>
    </div>
  );
};

export default Others;
