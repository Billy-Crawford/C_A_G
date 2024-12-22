"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Chart } from "chart.js"; // Bibliothèque pour les graphiques

const Dashboard = () => {
  const router = useRouter();

  // Fonction pour simuler l'ajout d'articles (ou autres actions)
  const handleAddArticle = () => {
    console.log("Article ajouté !");
  };

  const handleEditArticle = () => {
    console.log("Article modifié !");
  };

  const handleDeleteArticle = () => {
    console.log("Article supprimé !");
  };

  const handleViewSite = () => {
    window.open("/", "_blank");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section pour l'ajout d'articles */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Ajouter un article</h2>
          <form>
            <input
              type="text"
              placeholder="Nom de l'article"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="number"
              placeholder="Prix"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button
              type="button"
              className="w-full py-2 bg-blue-500 text-white rounded"
              onClick={handleAddArticle}
            >
              Ajouter
            </button>
          </form>
        </div>

        {/* Section pour la gestion des articles */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Gérer les articles</h2>
          <button
            className="w-full py-2 bg-green-500 text-white rounded mb-2"
            onClick={handleEditArticle}
          >
            Modifier un article
          </button>
          <button
            className="w-full py-2 bg-red-500 text-white rounded"
            onClick={handleDeleteArticle}
          >
            Supprimer un article
          </button>
        </div>

        {/* Section pour les promotions */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Gérer les promotions</h2>
          <button
            className="w-full py-2 bg-yellow-500 text-white rounded mb-2"
            onClick={() => console.log("Promotion ajoutée")}
          >
            Ajouter une promotion
          </button>
          <button
            className="w-full py-2 bg-yellow-700 text-white rounded"
            onClick={() => console.log("Promotion modifiée")}
          >
            Modifier une promotion
          </button>
        </div>

        {/* Section pour le suivi des opérations */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Suivi des opérations</h2>
          <p>
            Ici, vous pouvez suivre toutes les transactions et actions faites
            sur le site. (Simulation à ajouter)
          </p>
        </div>

        {/* Section pour l'aperçu du site */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Aperçu du site</h2>
          <button
            className="w-full py-2 bg-blue-500 text-white rounded"
            onClick={handleViewSite}
          >
            Voir le site
          </button>
        </div>

        {/* Section pour la gestion des utilisateurs */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Gestion des utilisateurs</h2>
          <button
            className="w-full py-2 bg-purple-500 text-white rounded mb-2"
            onClick={() => console.log("Utilisateur ajouté")}
          >
            Ajouter un utilisateur
          </button>
          <button
            className="w-full py-2 bg-purple-700 text-white rounded mb-2"
            onClick={() => console.log("Utilisateur modifié")}
          >
            Modifier un utilisateur
          </button>
          <button
            className="w-full py-2 bg-purple-900 text-white rounded"
            onClick={() => console.log("Utilisateur supprimé")}
          >
            Supprimer un utilisateur
          </button>
        </div>

        {/* Section pour les statistiques */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Statistiques</h2>
          <p>
            Graphiques et données en temps réel à ajouter ici (Chart.js, etc.).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
