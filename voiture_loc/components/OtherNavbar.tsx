// components/OtherNavbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { FaCar, FaWrench, FaMoneyBill, FaEllipsisH } from "react-icons/fa";

const OtherNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    router.push("/profile"); // Remplacez par la route réelle pour le profil
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/CAG.png"
            width={100}
            height={100}
            alt="Logo"
            className="object-contain"
          />
        </Link>

        {/* Menu principal pour grands écrans */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/principal" className="flex items-center space-x-1">
            <FaCar size={20} />
            <span>Louer une voiture</span>
          </Link>
          <Link
            href="/pieces-detachees"
            className="flex items-center space-x-1"
          >
            <FaWrench size={20} />
            <span>Pièce détachée</span>
          </Link>
          <Link href="/acheter" className="flex items-center space-x-1">
            <FaMoneyBill size={20} />
            <span>Acheter une voiture</span>
          </Link>
          <Link href="/autres" className="flex items-center space-x-1">
            <FaEllipsisH size={20} />
            <span>Autres</span>
          </Link>

          <div className="relative">
            <button onClick={handleProfileClick} className="p-2">
              <Image
                src="/images/profil-3.jpg" // l'icône de profil réelle
                width={30}
                height={30}
                alt="Profile"
              />
            </button>
          </div>
        </div>

        {/* Menu pour petits écrans */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="p-2 flex items-center">
            <FaEllipsisH size={20} />
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-4 w-48 bg-white shadow-lg border border-gray-200 z-40">
              <Link
                href="/principal"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleMenuToggle}
              >
                Louer une voiture
              </Link>
              <Link
                href="/pieces-detachees"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleMenuToggle}
              >
                Pièce détachée
              </Link>
              <Link
                href="/acheter"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleMenuToggle}
              >
                Acheter une voiture
              </Link>
              <Link
                href="/autres"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleMenuToggle}
              >
                Autres
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleMenuToggle}
              >
                Nous contacter
              </Link>
              <Link href="/louer" className="flex items-center space-x-1">
                <FaCar size={20} />
                <span>Louer une voiture</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default OtherNavbar;
