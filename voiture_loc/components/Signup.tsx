"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Utilisation de `next/navigation` avec l'App Directory
import { registerUser } from "../utils/api"; // Assurez-vous d'avoir cette fonction dans utils/api

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Typage plus strict de l'erreur
  const [successMessage, setSuccessMessage] = useState(false); // État pour afficher le message de succès
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Réinitialiser l'erreur avant chaque soumission

    try {
      const userData = { username, email, password };
      await registerUser(userData); // Appel API centralisé

      // Afficher le message de succès
      setSuccessMessage(true);

      // Après une animation (1 à 2 secondes), effacer les données du formulaire et rediriger
      setTimeout(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setSuccessMessage(false); // Cacher le message de succès
        router.push("/login"); // Rediriger vers la page de connexion
      }, 2000); // 2 secondes d'animation
    } catch (err) {
      console.error(err); // Affichez l'erreur complète pour le débogage
      setError("Une erreur s'est produite lors de l'inscription.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Inscription</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="font-medium text-sm">
              Nom d'utilisateur
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>

          {/* Affichage de l'erreur si l'inscription échoue */}
          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            S'inscrire
          </button>
        </form>

        {/* Affichage du message de succès avec animation */}
        {successMessage && (
          <div
            style={{
              marginTop: "20px",
              color: "green",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Inscription réussie !
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm">
            Vous avez déjà un compte ?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Connectez-vous ici
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
