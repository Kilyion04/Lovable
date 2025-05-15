
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">
          Bienvenue sur mon <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10">
          Développeur web passionné créant des expériences numériques modernes et intuitives avec les dernières technologies.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link to="/projects">
              Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Me contacter</Link>
          </Button>
        </div>
      </section>

      {/* Featured Content Previews */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Projects Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Mes Projets</CardTitle>
              <CardDescription>Découvrez une sélection de mes travaux récents</CardDescription>
            </CardHeader>
            <CardContent className="h-40 overflow-hidden">
              <div className="flex space-x-2 overflow-x-auto pb-4">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150"
                  alt="Projet 1"
                  className="w-48 h-32 object-cover rounded-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150"
                  alt="Projet 2"
                  className="w-48 h-32 object-cover rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="ml-auto">
                <Link to="/projects">
                  Tous les projets <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Skills Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Mes Compétences</CardTitle>
              <CardDescription>Technologies et outils maîtrisés</CardDescription>
            </CardHeader>
            <CardContent className="h-40">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
              <div className="mt-4">
                <div className="mb-2">
                  <div className="flex justify-between text-sm">
                    <span>JavaScript</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1.5">
                    <div className="bg-primary rounded-full h-1.5" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="ml-auto">
                <Link to="/skills">
                  Toutes les compétences <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Preview */}
          <Card>
            <CardHeader>
              <CardTitle>À Propos</CardTitle>
              <CardDescription>En savoir plus sur mon parcours</CardDescription>
            </CardHeader>
            <CardContent className="h-40">
              <p className="line-clamp-5">
                Je suis un développeur web full-stack passionné par la création d'applications web modernes et intuitives.
                Avec plusieurs années d'expérience dans le domaine, j'ai travaillé sur différents projets allant des sites vitrines aux applications web complexes.
                Ma passion pour l'apprentissage continu me permet de rester à jour avec les dernières technologies et tendances du web.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="ml-auto">
                <Link to="/about">
                  En savoir plus <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Contact Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Me Contacter</CardTitle>
              <CardDescription>Des questions ou des projets à discuter?</CardDescription>
            </CardHeader>
            <CardContent className="h-40 flex items-center justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Envoyez-moi un message <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full text-sm text-muted-foreground">
                <span>Email: contact@exemple.com</span>
                <span>Tel: +33 6 12 34 56 78</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
