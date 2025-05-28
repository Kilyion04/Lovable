import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, MapPin, GraduationCap, Briefcase, Phone, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const About = () => {
  return (
    <Layout>
      <ScrollReveal>
        <section id="profile" className="py-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex flex-col items-center md:items-end">
              <Avatar className="w-48 h-48">
                <AvatarImage 
                  src="/lovable-uploads/f8c4b4ef-1814-44c8-9c4a-67f6859379fb.png"
                  alt="Photo de profil de Kilyion Romary" 
                />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-3">Kilyion Romary</h1>
              <h2 className="text-2xl text-muted-foreground mb-4">Alternant Chargé Mission Data chez SIA Habitat</h2>
              <p className="text-lg mb-4">
                Étudiant en 5ème année à CESI École d'Ingénieurs Lille, Alternant chez SIA Habitat Douai
              </p>
              
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Lille, France</span>
              </div>
              
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>06 32 63 54 72</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>kilyion.romary@viacesi.fr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>kilyion.romary@sia-habitat.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a href="https://linkedin.com/in/kilyion-romary-806531216" className="text-primary hover:underline">LinkedIn</a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <a href="https://github.com/Kilyion04" className="text-primary hover:underline">GitHub</a>
                </div>
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
      </ScrollReveal>
      
      <ScrollReveal delay={200}>
        <section id="biography" className="py-10">
          <h2 className="text-2xl font-semibold mb-6">À propos</h2>
          <div className="space-y-4 text-lg">
            <p>
              Étudiant en 5ème année à CESI École d'Ingénieurs.
              Je suis actuellement alternant en contrat de professionnalisation chez SIA Habitat.
            </p>
            <p>
              Formé au PBL, j'ai acquis des compétences solides en développement et réseau, confirmées par mes différentes expériences professionnelles.
            </p>
            <p>
              Rigoureux, organisé et doté d'un excellent esprit d'équipe, je mets actuellement ces compétences au service de SIA Habitat, où je me forme en alternance. Mon objectif est de continuer à enrichir mon expertise et d'apporter une réelle valeur ajoutée avec un regard innovant dans chaque projet.
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
      </ScrollReveal>
      
      <ScrollReveal delay={400}>
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
                        <h3 className="text-xl font-medium">Alternant Chargé Mission Data</h3>
                        <p className="text-muted-foreground">SIA Habitat - Douai</p>
                      </div>
                      <span className="text-sm text-muted-foreground">09/2024 - En cours</span>
                    </div>
                    <p className="mt-2">
                      Alternance en contrat de professionnalisation dans le domaine de la data.
                      Développement de solutions data et amélioration des processus métiers.
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
                        <h3 className="text-xl font-medium">Stage Développement</h3>
                        <p className="text-muted-foreground">Entreprise industrielle</p>
                      </div>
                      <span className="text-sm text-muted-foreground">01/2023 - 04/2023</span>
                    </div>
                    <p className="mt-2">
                      Création d'applications internes pour tablette afin de gérer le matériel au sein d'une industrie 
                      ainsi que les visites au sein de l'entreprise à l'aide de Visual Studio.
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
                        <h3 className="text-xl font-medium">Stage Développement Web</h3>
                        <p className="text-muted-foreground">LSEE - Faculté des Sciences de Béthune</p>
                      </div>
                      <span className="text-sm text-muted-foreground">04/2022 - 07/2022</span>
                    </div>
                    <p className="mt-2">
                      Création d'un site utilisant EasyPHP et WordPress pour répertorier tout le matériel informatique 
                      du LSEE à la Faculté des Sciences de Béthune.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>
      
      <ScrollReveal delay={600}>
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
                        <h3 className="text-xl font-medium">CESI École d'Ingénieurs, Cycle Ingénieur (Alternant)</h3>
                        <p className="text-muted-foreground">Lille | SIA Habitat - Douai</p>
                      </div>
                      <span className="text-sm text-muted-foreground">08/2024 - En cours</span>
                    </div>
                    <p className="mt-2">
                      Formation en alternance spécialisée dans le domaine de la data et du développement.
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
                        <h3 className="text-xl font-medium">CESI École d'Ingénieurs, Cycle Ingénieur (Étudiant)</h3>
                        <p className="text-muted-foreground">Lille</p>
                      </div>
                      <span className="text-sm text-muted-foreground">09/2022 - 09/2024</span>
                    </div>
                    <p className="mt-2">
                      Formation en ingénierie informatique avec mobilité internationale (09/2023-02/2024).
                      Mise en place d'une solution Python pour déterminer un trajet économe en énergie.
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
                        <h3 className="text-xl font-medium">CESI École d'Ingénieurs, Cycle préparatoire</h3>
                        <p className="text-muted-foreground">Arras</p>
                      </div>
                      <span className="text-sm text-muted-foreground">09/2020 - 07/2022</span>
                    </div>
                    <p className="mt-2">
                      Formation préparatoire aux métiers de l'ingénierie informatique.
                      Apprentissage de la méthodologie PBL et des fondamentaux.
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
                        <h3 className="text-xl font-medium">1ère année de Licence Informatique</h3>
                        <p className="text-muted-foreground">Faculté Jean Perrin, Lens</p>
                      </div>
                      <span className="text-sm text-muted-foreground">09/2019 - 07/2020</span>
                    </div>
                    <p className="mt-2">
                      Initiation au monde du développement, apprentissage des langages de programmation.
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
                        <h3 className="text-xl font-medium">BAC Scientifique</h3>
                        <p className="text-muted-foreground">Lycée Pablo Picasso, Avion</p>
                      </div>
                      <span className="text-sm text-muted-foreground">09/2016 - 07/2019</span>
                    </div>
                    <p className="mt-2">
                      Formation scientifique générale avec spécialisation en mathématiques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={800}>
        <section id="skills" className="py-10">
          <h2 className="text-2xl font-semibold mb-6">Compétences Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Langages & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["C", "C++", "C#", "Python", "SQL", "PHP", "HTML", "CSS", "JavaScript"].map((tech) => (
                    <span key={tech} className="bg-muted px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Outils & Environnements</h3>
                <div className="flex flex-wrap gap-2">
                  {["MySQL Workbench", "PostgreSQL", "MongoDB", "Visual Studio", "VS Code", "Jupyter Notebook", "Arduino", "Cisco Packet Tracer"].map((tool) => (
                    <span key={tool} className="bg-muted px-3 py-1 rounded-full text-sm">{tool}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={1000}>
        <section id="qualities" className="py-10">
          <h2 className="text-2xl font-semibold mb-6">Qualités & Langues</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Qualités</h3>
                <ul className="space-y-2">
                  <li>• Organisation</li>
                  <li>• Travail en équipe</li>
                  <li>• Enthousiasme</li>
                  <li>• Autonomie</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Langues & Centres d'intérêt</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Langues</h4>
                    <p>Anglais : TOEIC niveau B2</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Sports</h4>
                    <p>Football, Musculation</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Centres d'intérêt</h4>
                    <p>Science, Géographie, Informatique/Technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
};

export default About;
