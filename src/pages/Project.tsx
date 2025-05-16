
import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  date: string;
};

const projectData: Project[] = [
  {
    id: 1,
    title: "Projet E-commerce",
    description: "Une plateforme de commerce électronique complète avec panier d'achat et paiement en ligne.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    date: "2023-11"
  },
  {
    id: 2,
    title: "Application de Gestion",
    description: "Un tableau de bord d'administration pour gérer les utilisateurs, les produits et les commandes.",
    tags: ["TypeScript", "Next.js", "Prisma"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    date: "2024-01"
  },
  {
    id: 3,
    title: "Site Portfolio",
    description: "Un site web portfolio responsive pour présenter mes projets et compétences.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    date: "2024-03"
  },
  {
    id: 4,
    title: "Application Mobile",
    description: "Une application mobile pour suivre ses activités sportives quotidiennes.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    date: "2023-09"
  },
  {
    id: 5,
    title: "Plateforme Éducative",
    description: "Une plateforme en ligne pour suivre des cours et des formations.",
    tags: ["Vue.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    date: "2024-04"
  }
];

const getAllTags = (projects: Project[]) => {
  const tagsSet = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => {
      tagsSet.add(tag);
    });
  });
  return Array.from(tagsSet);
};

const getAllDates = (projects: Project[]) => {
  const datesMap = new Map<string, string>();
  projects.forEach(project => {
    const date = new Date(project.date);
    const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    datesMap.set(project.date, monthYear);
  });
  
  // Sort dates from newest to oldest
  return Array.from(datesMap.entries())
    .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime());
};

const Project = () => {
  const [projects, setProjects] = useState<Project[]>(projectData);
  const [tagFilter, setTagFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  
  const allTags = getAllTags(projectData);
  const allDates = getAllDates(projectData);

  useEffect(() => {
    let filtered = [...projectData];
    
    if (tagFilter) {
      filtered = filtered.filter(project => 
        project.tags.includes(tagFilter)
      );
    }
    
    if (dateFilter) {
      filtered = filtered.filter(project => 
        project.date === dateFilter
      );
    }
    
    setProjects(filtered);
  }, [tagFilter, dateFilter]);

  const resetFilters = () => {
    setTagFilter("");
    setDateFilter("");
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Mes Projets</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'ensemble de mes projets réalisés et actuels. Filtrez par technologie ou par date pour trouver ce qui vous intéresse.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="w-full max-w-xs">
            <Label htmlFor="tag-filter" className="mb-2 block">Filtrer par technologie</Label>
            <Select value={tagFilter} onValueChange={setTagFilter}>
              <SelectTrigger id="tag-filter">
                <SelectValue placeholder="Toutes les technologies" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les technologies</SelectItem>
                {allTags.map(tag => (
                  <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full max-w-xs">
            <Label htmlFor="date-filter" className="mb-2 block">Filtrer par date</Label>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger id="date-filter">
                <SelectValue placeholder="Toutes les dates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les dates</SelectItem>
                {allDates.map(([value, label]) => (
                  <SelectItem key={value} value={value}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full max-w-xs flex items-end">
            <Button 
              variant="outline" 
              onClick={resetFilters} 
              className="w-full"
            >
              Réinitialiser les filtres
            </Button>
          </div>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(project.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
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

export default Project;
