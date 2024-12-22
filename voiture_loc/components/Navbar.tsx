// // components/Navbar.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   const handleMenuToggle = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleProfileClick = () => {
//     router.push("/profile"); // Redirection vers la page profil
//   };

//   return (
//     <header className="w-full z-10 bg-white shadow-md">
//       <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-4 py-4">
//         <Link href="/" className="flex justify-center items-center">
//           <Image
//             src="/logo.svg" // Assurez-vous que ce logo existe
//             width={100}
//             height={100}
//             alt="Logo"
//             className="object-contain"
//           />
//         </Link>

//         <div className="flex items-center">
//           {/* Icône de profil */}
//           <button onClick={handleProfileClick} className="p-2">
//             <Image
//               src="/profile-icon.svg" // Remplacez par l'icône de profil réelle
//               width={30}
//               height={30}
//               alt="Profile"
//             />
//           </button>

//           {/* Menu déroulant */}
//           <div className="relative">
//             <button
//               onClick={handleMenuToggle}
//               className="flex items-center p-2"
//             >
//               <span>Ce que je veux</span>
//               {isMenuOpen ? (
//                 <FaChevronUp className="ml-2" />
//               ) : (
//                 <FaChevronDown className="ml-2" />
//               )}
//             </button>
//             {isMenuOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200">
//                 <Link
//                   href="/contact"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Nous contacter
//                 </Link>
//                 <div className="border-t border-gray-200">
//                   <Link
//                     href="/principal"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Louer une voiture
//                   </Link>
//                   <Link
//                     href="/car-parts"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Je cherche une pièce détachée
//                   </Link>
//                   <Link
//                     href="/buy-car"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Acheter une voiture
//                   </Link>
//                   <Link
//                     href="/other"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Autres
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
