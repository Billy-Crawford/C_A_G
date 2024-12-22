import axios from "axios";

// Créez une instance Axios avec une configuration de base
const apiClient = axios.create({
  baseURL: "http://192.168.1.66:8000/api", // Utilisez l'adresse IP de la machine où Django est exécuté
  headers: {
    "Content-Type": "application/json",
  },
});

// Gestion des erreurs globales (facultatif)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erreur API :", error.response || error.message);
    return Promise.reject(error);
  }
);

// Exemple de fonction pour enregistrer un utilisateur
export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await apiClient.post("/comptes/register/", userData);
  return response.data;
};

// Fonction pour se connecter
export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  // Vous devez envoyer username et password au backend, donc utilisez un objet avec ces deux propriétés
  const response = await apiClient.post("/comptes/login/", {
    username,
    password,
  });
  return response.data; // Supposons que l'API renvoie un token
};

// Vous pouvez ajouter d'autres fonctions ici pour d'autres endpoints
export default apiClient;
