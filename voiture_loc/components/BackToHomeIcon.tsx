// components/BackToHomeIcon.tsx
"use client";

import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa"; // Assurez-vous que react-icons est installé
import { usePathname } from "next/navigation";

const BackToHomeIcon = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") {
    return null; // Ne pas afficher sur la page d'accueil
  }

  return (
    <div
      className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-600"
      onClick={() => router.push("/")}
      title="Retour à l'accueil"
    >
      <FaHome size={24} />
    </div>
  );
};

export default BackToHomeIcon;
