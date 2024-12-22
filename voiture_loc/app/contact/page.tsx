// app/contact/page.tsx
import OtherNavbar from "@/components/OtherNavbar";

const Contact = () => {
  return (
    <div>
      <OtherNavbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Nous Contacter</h1>
        <p>Contactez-nous à l'adresse suivante : contact@cag.com</p>
        {/* Ajoutez un formulaire de contact ou d'autres informations ici */}
      </main>
    </div>
  );
};

export default Contact;
