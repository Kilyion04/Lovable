
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
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes travaux récents montrant mes compétences et mon expertise.
          </p>
        </div>

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
