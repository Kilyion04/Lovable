
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Projet E-commerce",
    description: "Une plateforme de commerce électronique complète avec panier d'achat et paiement en ligne.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 2,
    title: "Application de Gestion",
    description: "Un tableau de bord d'administration pour gérer les utilisateurs, les produits et les commandes.",
    tags: ["TypeScript", "Next.js", "Prisma"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 3,
    title: "Site Portfolio",
    description: "Un site web portfolio responsive pour présenter mes projets et compétences.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 4,
    title: "Application Mobile",
    description: "Une application mobile cross-platform pour le suivi de fitness et d'activités sportives.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description: "Un tableau de bord interactif pour visualiser et analyser des données en temps réel.",
    tags: ["D3.js", "Angular", "Express"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
];

const Projects = () => {
  return (
    <Layout>
      <section id="introduction" className="py-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Mes Projets</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez une sélection de mes travaux récents montrant mes compétences et mon expertise.
        </p>
      </section>
      
      <section id="featured" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Projets Vedettes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <img 
              src={projects[0].image} 
              alt={projects[0].title}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle>{projects[0].title}</CardTitle>
              <CardDescription>{projects[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="ml-auto">
                Voir détails <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden">
            <img 
              src={projects[1].image} 
              alt={projects[1].title}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle>{projects[1].title}</CardTitle>
              <CardDescription>{projects[1].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {projects[1].tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="ml-auto">
                Voir détails <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section id="all-projects" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Tous les Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="ml-auto">
                  <a href={`#project-${project.id}`}>
                    Voir détails <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
