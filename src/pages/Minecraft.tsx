import { Layout } from "@/components/layout/Layout";

const Minecraft = () => {
    return (
        <Layout>
            <section className="py-20">
                <h1 className="text-3xl font-bold mb-6">Gestion de Serveur Minecraft</h1>
                <p className="mb-4">Découvrez mes serveurs Minecraft et faites une demande pour rejoindre.</p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium mb-1">Nom d'utilisateur Minecraft</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full rounded-md border px-3 py-2"
                            placeholder="Votre pseudo Minecraft"
                        />
                    </div>
                    <div>
                        <label htmlFor="reason" className="block text-sm font-medium mb-1">Raison de la demande</label>
                        <textarea
                            id="reason"
                            rows={4}
                            className="w-full rounded-md border px-3 py-2"
                            placeholder="Pourquoi voulez-vous rejoindre ?"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Envoyer la demande</button>
                </form>
            </section>
        </Layout>
    );
};

export default Minecraft;