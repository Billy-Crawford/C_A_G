// app/layout.tsx
"use client"; // Active les fonctionnalités client

import "./globals.css";
import BackToHomeIcon from "@/components/BackToHomeIcon";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {children}
        {/* N'affichez pas l'icône sur la page d'accueil */}
        {pathname !== "/" && <BackToHomeIcon />}
      </body>
    </html>
  );
}
