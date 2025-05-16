
import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section id="profile" className="py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex flex-col items-center md:items-end">
            <Avatar className="w-48 h-48">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
                alt="Profile photo" 
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-3">John Doe</h1>
            <h2 className="text-2xl text-muted-foreground mb-4">Développeur Full Stack</h2>
            <p className="text-lg mb-4">
              Passionné de création d'applications web modernes et intuitives. Spécialisé dans les technologies React, Node.js et TypeScript.
            </p>
            
            <div className="flex items-center gap-2 mb-6 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Paris, France</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button>Me contacter</Button>
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
            Je suis un développeur web full-stack passionné par la création d'applications web modernes et intuitives.
            Avec plusieurs années d'expérience dans le domaine, j'ai travaillé sur différents projets allant des sites vitrines aux applications web complexes.
          </p>
          <p>
            Ma passion pour l'apprentissage continu me permet de rester à jour avec les dernières technologies et tendances du web.
            Je suis particulièrement intéressé par les technologies React, Node.js, TypeScript et les architectures cloud modernes.
          </p>
          <div className="flex items-center mt-6">
            <div className="mr-4">
              <Star className="text-yellow-500 h-5 w-5" />
            </div>
            <p className="text-muted-foreground italic">
              "L'innovation distingue un leader d'un suiveur."
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
                      <h3 className="text-xl font-medium">Développeur Full Stack Senior</h3>
                      <p className="text-muted-foreground">Tech Solutions Inc.</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2020 - Présent</span>
                  </div>
                  <p className="mt-2">
                    Développement d'applications web avec React et Node.js. Mise en place d'architectures cloud sur AWS.
                    Gestion d'équipe et mentoring de développeurs juniors.
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
                      <h3 className="text-xl font-medium">Développeur Front-End</h3>
                      <p className="text-muted-foreground">WebCreative Agency</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2017 - 2020</span>
                  </div>
                  <p className="mt-2">
                    Création d'interfaces utilisateur dynamiques avec React et Vue.js. Intégration d'APIs RESTful.
                    Optimisation des performances des applications web.
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
                      <h3 className="text-xl font-medium">Master en Informatique</h3>
                      <p className="text-muted-foreground">Université de Paris</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2015 - 2017</span>
                  </div>
                  <p className="mt-2">
                    Spécialisation en développement web et technologies cloud. Projets majeurs incluant
                    le développement d'applications web scalables et l'intelligence artificielle.
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
                      <h3 className="text-xl font-medium">Licence en Informatique</h3>
                      <p className="text-muted-foreground">Université de Lyon</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2012 - 2015</span>
                  </div>
                  <p className="mt-2">
                    Fondamentaux de la programmation, structures de données, algorithmique et
                    introduction aux technologies du web.
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
