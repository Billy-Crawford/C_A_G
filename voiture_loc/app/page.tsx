// app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import BackToHomeIcon from "@/components/BackToHomeIcon";

export default function HomePage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login"); // Redirige vers la page de connexion
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue chez CAG</h1>
      <button
        onClick={handleLoginClick}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
      >
        Connexion
      </button>
      <BackToHomeIcon /> {/* Icône de retour à la page d'accueil */}
    </div>
  );
}
