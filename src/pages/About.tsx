
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, Briefcase, GraduationCap, Award, Info } from "lucide-react";
import { Timeline, TimelineItem, TimelineItemContent, TimelineItemIndicator, TimelineItemTitle } from "@/components/ui/timeline";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes valeurs et ce qui me motive en tant que développeur web.
          </p>
        </div>

        <Tabs defaultValue="bio" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="bio">Biographie</TabsTrigger>
              <TabsTrigger value="education">Formation</TabsTrigger>
              <TabsTrigger value="experience">Expérience</TabsTrigger>
              <TabsTrigger value="values">Valeurs</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="bio" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Qui suis-je ?</h2>
                <p className="mb-4">
                  Je suis un développeur web full-stack passionné par la création d'applications web modernes et intuitives.
                  Avec plusieurs années d'expérience dans le domaine, j'ai travaillé sur différents projets allant des sites vitrines aux applications web complexes.
                </p>
                <p className="mb-4">
                  Ma passion pour l'apprentissage continu me permet de rester à jour avec les dernières technologies et tendances du web.
                </p>
                <p className="mb-6">
                  Je m'intéresse particulièrement aux interfaces utilisateur intuitives, aux performances optimisées et à l'accessibilité pour tous les utilisateurs.
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Star className="text-yellow-500 h-5 w-5" />
                  </div>
                  <p className="text-muted-foreground">
                    "L'innovation distingue un leader d'un suiveur."
                  </p>
                </div>
              </div>
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" 
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  <CardTitle>En bref</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Spécialisations</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Développement Frontend</Badge>
                      <Badge>Développement Backend</Badge>
                      <Badge>UI/UX Design</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Langues</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Français (natif)</Badge>
                      <Badge variant="outline">Anglais (courant)</Badge>
                      <Badge variant="outline">Espagnol (intermédiaire)</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Localisation</h4>
                    <p>Paris, France</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Disponibilité</h4>
                    <p>Freelance & projets à temps plein</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <CardTitle>Parcours Académique</CardTitle>
                </div>
                <CardDescription>Mon parcours de formation et mes diplômes</CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  <TimelineItem>
                    <TimelineItemTitle>Master en Développement Web</TimelineItemTitle>
                    <TimelineItemContent>
                      <p className="font-medium">Université de Technologie</p>
                      <p className="text-muted-foreground">2020 - 2022</p>
                      <p className="mt-2">
                        Spécialisation en architecture logicielle et développement d'applications web modernes.
                        Projet de fin d'études sur l'optimisation des performances des applications React.
                      </p>
                    </TimelineItemContent>
                    <TimelineItemIndicator />
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineItemTitle>Licence en Informatique</TimelineItemTitle>
                    <TimelineItemContent>
                      <p className="font-medium">École Supérieure d'Informatique</p>
                      <p className="text-muted-foreground">2017 - 2020</p>
                      <p className="mt-2">
                        Formation généraliste en informatique avec une spécialisation en développement web.
                        Acquisition des fondamentaux en programmation, bases de données et réseaux.
                      </p>
                    </TimelineItemContent>
                    <TimelineItemIndicator />
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineItemTitle>Baccalauréat Scientifique</TimelineItemTitle>
                    <TimelineItemContent>
                      <p className="font-medium">Lycée International</p>
                      <p className="text-muted-foreground">2016 - 2017</p>
                      <p className="mt-2">
                        Obtention avec mention "Très bien" et spécialité Mathématiques.
                      </p>
                    </TimelineItemContent>
                    <TimelineItemIndicator />
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle>Certifications & Formations Complémentaires</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <p className="font-medium">Certification AWS Solutions Architect Associate</p>
                      <p className="text-muted-foreground">2023</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <p className="font-medium">Certification Google Cloud Developer</p>
                      <p className="text-muted-foreground">2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <p className="font-medium">Formation UX/UI Design</p>
                      <p className="text-muted-foreground">2021</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <CardTitle>Expérience Professionnelle</CardTitle>
                </div>
                <CardDescription>Mon parcours professionnel et mes réalisations</CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  <TimelineItem>
                    <TimelineItemTitle>Développeur Full-Stack Senior</TimelineItemTitle>
                    <TimelineItemContent>
                      <p className="font-medium">TechSolutions Inc.</p>
                      <p className="text-muted-foreground">2022 - Présent</p>
                      <p className="mt-2">
                        Développement d'applications web complexes pour des clients internationaux.
                        Mise en place d'architectures scalables et performance-oriented.
                        Leadership technique d'une équipe de 4 développeurs.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">AWS</Badge>
                      </div>
                    </TimelineItemContent>
                    <TimelineItemIndicator />
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineItemTitle>Développeur Frontend</TimelineItemTitle>
                    <TimelineItemContent>
                      <p className="font-medium">WebCreators Agency</p>
                      <p className="text-muted-foreground">2020 - 2022</p>
                      <p className="mt-2">
                        Conception et développement d'interfaces utilisateur pour des sites e-commerce et applications SaaS.
                        Optimisation des performances et amélioration de l'expérience utilisateur.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">Vue.js</Badge>
                        <Badge variant="outline">CSS/SASS</Badge>
                        <Badge variant="outline">Webpack</Badge>
                      </div>
                    </TimelineItemContent>
                    <TimelineItemIndicator />
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelineItemTitle>Stagiaire Développeur Web</TimelineItemTitle>
                    <TimelineItemContent>
                      <p className="font-medium">StartupInnovate</p>
                      <p className="text-muted-foreground">2019 (6 mois)</p>
                      <p className="mt-2">
                        Participation au développement d'une application de gestion de projet interne.
                        Mise en œuvre des fonctionnalités frontend et intégration avec l'API backend.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">HTML/CSS</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">jQuery</Badge>
                        <Badge variant="outline">PHP</Badge>
                      </div>
                    </TimelineItemContent>
                    <TimelineItemIndicator />
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="values">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Valeurs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Qualité avant tout</h3>
                    <p className="text-muted-foreground">
                      Je crois fermement qu'un code bien écrit et maintenu est la clé d'un produit durable et évolutif.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Apprentissage continu</h3>
                    <p className="text-muted-foreground">
                      Notre domaine évolue rapidement, et j'accorde une grande importance à rester à jour et à continuer d'apprendre.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Résolution de problèmes</h3>
                    <p className="text-muted-foreground">
                      Je vois chaque défi comme une opportunité d'apprendre et d'améliorer mes compétences en résolution de problèmes.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ma Philosophie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Je considère le développement web comme un art où la technique rencontre la créativité pour résoudre des problèmes concrets. 
                  </p>
                  <p>
                    Mon approche est centrée sur l'utilisateur : la technologie doit servir les personnes et non l'inverse.
                  </p>
                  <p>
                    Je m'efforce de créer des solutions qui sont non seulement fonctionnelles mais aussi accessibles et inclusives pour tous.
                  </p>
                  <div className="flex items-center pt-4">
                    <div className="mr-4">
                      <Star className="text-yellow-500 h-5 w-5" />
                    </div>
                    <p className="text-muted-foreground italic">
                      "Le code est comme l'humour. Quand vous devez l'expliquer, c'est mauvais."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default About;
