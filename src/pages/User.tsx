import { Layout } from "@/components/layout/Layout";

const Users = () => {
  return (
    <Layout>
      <section className="py-20">
        <h1 className="text-3xl font-bold mb-6">Gestion des Informations Utilisateur</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border px-3 py-2"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border px-3 py-2"
              placeholder="Votre email"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Mettre à jour</button>
        </form>
      </section>
    </Layout>
  );
};

export default Users;