
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gamepad, Server } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const Minecraft = () => {
    const [selectedServer, setSelectedServer] = useState("survival");

    const servers = [
        {
            id: "survival",
            name: "Serveur Survie",
            version: "1.20.4",
            description: "Un monde ouvert où vous pouvez construire, explorer, et survivre avec d'autres joueurs.",
        },
        {
            id: "creative",
            name: "Serveur Créatif",
            version: "1.20.4",
            description: "Libérez votre créativité dans un environnement sans limites de ressources.",
        },
        {
            id: "minigames",
            name: "Serveur Mini-jeux",
            version: "1.20.2",
            description: "Une collection de mini-jeux amusants à jouer avec vos amis.",
        }
    ];

    return (
        <Layout>
            <div className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <section className="mb-12" id="servers">
                        <div className="flex items-center mb-6">
                            <Gamepad className="h-8 w-8 mr-3 text-primary" />
                            <h1 className="text-3xl md:text-4xl font-bold">Gestion de Serveur Minecraft</h1>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-lg">
                                    Découvrez mes serveurs Minecraft et faites une demande pour rejoindre notre communauté de joueurs.
                                    Nous proposons différents types de serveurs adaptés à tous les styles de jeu.
                                </p>
                                
                                <div className="bg-card rounded-lg p-6 shadow-sm border">
                                    <h2 className="text-xl font-semibold mb-4">Choisissez votre serveur</h2>
                                    <RadioGroup 
                                        value={selectedServer} 
                                        onValueChange={setSelectedServer}
                                        className="space-y-4"
                                    >
                                        {servers.map(server => (
                                            <div key={server.id} className={`flex items-start space-x-3 p-3 rounded-md transition-colors ${selectedServer === server.id ? 'bg-muted' : ''}`}>
                                                <RadioGroupItem value={server.id} id={server.id} className="mt-1" />
                                                <div>
                                                    <label htmlFor={server.id} className="flex items-center cursor-pointer font-medium">
                                                        <Server className="h-5 w-5 mr-2 text-primary" />
                                                        {server.name}
                                                    </label>
                                                    <p className="text-sm mt-1">Version: {server.version}</p>
                                                    <p className="text-sm text-muted-foreground mt-1">{server.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            </div>
                            
                            <div className="bg-card rounded-lg p-6 shadow-sm border">
                                <h2 className="text-2xl font-semibold mb-6">Demande d'accès</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium mb-2">Nom d'utilisateur Minecraft</label>
                                        <Input
                                            type="text"
                                            id="username"
                                            className="w-full"
                                            placeholder="Votre pseudo Minecraft"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                        <Input
                                            type="email"
                                            id="email"
                                            className="w-full"
                                            placeholder="Votre adresse email"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="reason" className="block text-sm font-medium mb-2">Raison de la demande</label>
                                        <Textarea
                                            id="reason"
                                            rows={4}
                                            className="w-full"
                                            placeholder="Pourquoi voulez-vous rejoindre notre serveur ?"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="experience" className="block text-sm font-medium mb-2">Expérience Minecraft</label>
                                        <select 
                                            id="experience" 
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        >
                                            <option value="">Sélectionnez votre niveau</option>
                                            <option value="beginner">Débutant</option>
                                            <option value="intermediate">Intermédiaire</option>
                                            <option value="advanced">Avancé</option>
                                            <option value="expert">Expert</option>
                                        </select>
                                    </div>
                                    
                                    <div className="font-medium mb-2">Serveur sélectionné: {servers.find(s => s.id === selectedServer)?.name}</div>
                                    
                                    <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-full">
                                        Envoyer la demande
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                    
                    <section className="bg-card rounded-lg p-6 shadow-sm border" id="rules">
                        <h2 className="text-2xl font-semibold mb-4">Règles du serveur</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Respectez tous les joueurs</li>
                            <li>Ne détruisez pas les constructions des autres</li>
                            <li>Pas de triche ou de hacks</li>
                            <li>Pas de spam dans le chat</li>
                            <li>Amusez-vous et soyez créatifs !</li>
                        </ul>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Minecraft;
