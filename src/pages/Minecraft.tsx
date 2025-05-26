
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gamepad, Server, Book } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Minecraft = () => {
    return (
        <Layout>
            <div className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <section id="introduction" className="mb-12">
                            <div className="flex items-center mb-6">
                                <Gamepad className="h-8 w-8 mr-3 text-primary" />
                                <h1 className="text-3xl md:text-4xl font-bold">Gestion de Serveur Minecraft</h1>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-lg">
                                    Découvrez mes serveurs Minecraft et faites une demande pour rejoindre notre communauté de joueurs.
                                    Nous proposons différents types de serveurs adaptés à tous les styles de jeu.
                                </p>
                                <p className="text-lg">
                                    En tant qu'étudiant en 5ème année à CESI École d'Ingénieurs et alternant chez SIA Habitat,
                                    j'ai développé une passion pour l'informatique et les technologies, dont Minecraft.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={200}>
                        <section id="servers" className="mb-12">
                            <div className="flex items-center mb-6">
                                <Server className="h-6 w-6 mr-3 text-primary" />
                                <h2 className="text-2xl font-bold">Nos Serveurs</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ScrollReveal delay={300}>
                                    <div className="bg-card rounded-lg p-6 shadow-sm border">
                                        <div className="flex items-center mb-4">
                                            <Server className="h-5 w-5 mr-2 text-primary" />
                                            <h3 className="text-xl font-medium">Serveur Survie</h3>
                                        </div>
                                        <p className="mb-2">Version: 1.20.4</p>
                                        <p className="text-muted-foreground">Un monde ouvert où vous pouvez construire, explorer, et survivre avec d'autres joueurs.</p>
                                    </div>
                                </ScrollReveal>
                                
                                <ScrollReveal delay={400}>
                                    <div className="bg-card rounded-lg p-6 shadow-sm border">
                                        <div className="flex items-center mb-4">
                                            <Server className="h-5 w-5 mr-2 text-primary" />
                                            <h3 className="text-xl font-medium">Serveur Créatif</h3>
                                        </div>
                                        <p className="mb-2">Version: 1.20.4</p>
                                        <p className="text-muted-foreground">Libérez votre créativité dans un environnement sans limites de ressources.</p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </section>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={500}>
                        <section id="access-request" className="mb-12">
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
                                    
                                    <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-full">
                                        Envoyer la demande
                                    </button>
                                </form>
                            </div>
                        </section>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={600}>
                        <section id="rules" className="bg-card rounded-lg p-6 shadow-sm border">
                            <div className="flex items-center mb-4">
                                <Book className="h-6 w-6 mr-3 text-primary" />
                                <h2 className="text-2xl font-semibold">Règles du serveur</h2>
                            </div>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Respectez tous les joueurs</li>
                                <li>Ne détruisez pas les constructions des autres</li>
                                <li>Pas de triche ou de hacks</li>
                                <li>Pas de spam dans le chat</li>
                                <li>Amusez-vous et soyez créatifs !</li>
                            </ul>
                        </section>
                    </ScrollReveal>
                </div>
            </div>
        </Layout>
    );
};

export default Minecraft;
