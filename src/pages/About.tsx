
import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <section id="profile" className="py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex flex-col items-center md:items-end">
            <Avatar className="w-48 h-48">
              <AvatarImage 
                src="/placeholder.svg"
                alt="Photo de profil de Benoît Grout" 
              />
              <AvatarFallback>BG</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-3">Benoît Grout</h1>
            <h2 className="text-2xl text-muted-foreground mb-4">Informaticien Indépendant</h2>
            <p className="text-lg mb-4">
              Expert en solutions informatiques pour les particuliers et professionnels. Spécialisé dans le dépannage, le conseil et l'assistance technique.
            </p>
            
            <div className="flex items-center gap-2 mb-6 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Sallaumines, France</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">Me contacter</Link>
              </Button>
              <Button variant="outline">
                Télécharger CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="biography" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Biographie</h2>
        <div className="space-y-4 text-lg">
          <p>
            Je suis un informaticien indépendant passionné par l'assistance technique et le dépannage informatique.
            Avec plusieurs années d'expérience dans le domaine, j'ai travaillé sur différents projets et résolu de nombreux problèmes informatiques
            pour particuliers et professionnels.
          </p>
          <p>
            Mon objectif est de rendre l'informatique accessible à tous en proposant des solutions adaptées aux besoins de chacun.
            Je suis particulièrement intéressé par les technologies réseau, la sécurité informatique, et les serveurs de jeux comme Minecraft.
          </p>
          <div className="flex items-center mt-6">
            <div className="mr-4">
              <Star className="text-yellow-500 h-5 w-5" />
            </div>
            <p className="text-muted-foreground italic">
              "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme."
            </p>
          </div>
        </div>
      </section>
      
      <section id="experience" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Expérience</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-muted p-2 rounded-md">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">Informaticien Indépendant</h3>
                      <p className="text-muted-foreground">DOKKUL</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2021 - Présent</span>
                  </div>
                  <p className="mt-2">
                    Dépannage informatique, installation et configuration de réseaux, maintenance de serveurs, assistance technique.
                    Support clients particuliers et professionnels dans la région des Hauts-de-France.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-muted p-2 rounded-md">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">Administrateur Réseau</h3>
                      <p className="text-muted-foreground">Diverses entreprises</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2016 - 2021</span>
                  </div>
                  <p className="mt-2">
                    Administration et maintenance des infrastructures réseau. Configuration des équipements, 
                    résolution des problèmes de connectivité, mise en place de solutions de sécurité.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section id="education" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Formation</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-muted p-2 rounded-md">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">BTS Services Informatiques aux Organisations</h3>
                      <p className="text-muted-foreground">AFPA</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2016</span>
                  </div>
                  <p className="mt-2">
                    Spécialisation en administration des systèmes et réseaux. Projets incluant
                    la conception et la mise en place d'infrastructures informatiques complètes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-muted p-2 rounded-md">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">BAC Pro Systèmes Électroniques Numériques</h3>
                      <p className="text-muted-foreground">Lycée Auguste Béhal</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2014</span>
                  </div>
                  <p className="mt-2">
                    Formation aux fondamentaux des systèmes électroniques et informatiques.
                    Apprentissage des techniques de maintenance et de dépannage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
