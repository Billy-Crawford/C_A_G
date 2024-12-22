"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Utilisation de `next/navigation` pour la redirection
import { loginUser } from "../utils/api"; // Fonction d'appel API pour la connexion

export default function Login() {
  const [username, setUsername] = useState(""); // Utilisation de `username` au lieu de `email`
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Réinitialiser l'erreur avant chaque soumission

    try {
      // Envoi des données pour la connexion
      const userData = { username, password }; // Envoi du nom d'utilisateur et du mot de passe
      const response = await loginUser(userData);

      // Vérifier si la réponse contient un token
      if (response.token) {
        // Enregistrer les données de l'utilisateur (par exemple, le token) dans le localStorage
        localStorage.setItem("token", response.token); // Stockage du token dans le localStorage

        // Redirection après une connexion réussie
        router.push("/principal"); // Modifier selon la page de destination après connexion
      } else {
        setError("Connexion échouée. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Nom d'utilisateur ou mot de passe incorrect"); // Affichage d'une erreur si la connexion échoue
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Se connecter</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="font-medium text-sm">
              Nom d'utilisateur
            </label>
            <input
              id="username"
              type="text"
              placeholder="Votre nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-medium text-sm">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>

          {/* Affichage de l'erreur si la connexion échoue */}
          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Se connecter
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Pas encore inscrit ?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Créez un compte
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
