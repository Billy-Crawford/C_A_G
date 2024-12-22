// app/profile/page.tsx
import OtherNavbar from "@/components/OtherNavbar";

const Profile = () => {
  return (
    <div>
      <OtherNavbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Mon Profil</h1>
        <p>Voici vos informations utilisateur. Vous pouvez les modifier ici.</p>
        {/* Ajoutez un formulaire de modification des informations ici */}
      </main>
    </div>
  );
};

export default Profile;
