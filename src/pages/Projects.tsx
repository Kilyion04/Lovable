
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DOKKUL",
    description: "Câblage informatique, serveurs, stockage, VPN, NAS, sécurité périphérique, caméra.",
    tags: ["Système", "Réseaux", "Câblage", "Sécurité"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 2,
    title: "Assistance Site Web",
    description: "Conception, création, mise à jour, infogérance complète de site web. Mise en place et gestion de campagnes Google Ads et suivi des conversions.",
    tags: ["Web", "SEO", "Google Ads", "WordPress"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 3,
    title: "Maintenance/Dépannage",
    description: "Résolution des problèmes informatiques. Mises à jour PC, formatage, récupérations données, remplacement pièces défectueuses.",
    tags: ["Hardware", "Software", "Dépannage", "Récupération de données"],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 4,
    title: "Assistance Technique",
    description: "Formation et aide à l'utilisation des outils et logiciels informatiques. Résolution des problèmes à distance ou sur site.",
    tags: ["Formation", "Support", "Assistance", "Dépannage"],
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 5,
    title: "Serveur Minecraft",
    description: "Création et gestion de serveurs Minecraft, mise en place de plugins, configuration et optimisation.",
    tags: ["Minecraft", "Java", "Serveur", "Configuration"],
    image: "https://images.unsplash.com/photo-1587573089734-599d584a32ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
  },
];

const Projects = () => {
  return (
    <Layout>
      <section id="introduction" className="py-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Mes Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez les différents services informatiques que je propose pour répondre à vos besoins.
        </p>
      </section>
      
      <section id="featured" className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Services Principaux</h2>
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
        <h2 className="text-2xl font-semibold mb-6">Tous les Services</h2>
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
