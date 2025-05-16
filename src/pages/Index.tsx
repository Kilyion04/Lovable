
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Star, Code, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";

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

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 75 },
];

// Get most recently used skills (would be replaced with actual data in a real app)
const recentSkills = [
  { name: "Vue.js", level: 65, date: "2024-04" },
  { name: "MongoDB", level: 75, date: "2024-04" },
  { name: "Tailwind CSS", level: 90, date: "2024-03" },
  { name: "TypeScript", level: 75, date: "2024-03" },
];

// Get latest project (would be replaced with actual data sorting in a real app)
const latestProject = {
  id: 5,
  title: "Plateforme Éducative",
  description: "Une plateforme en ligne pour suivre des cours et des formations.",
  tags: ["Vue.js", "Express", "MongoDB"],
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
  date: "2024-04"
};

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
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/project">
              Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Me contacter</Link>
          </Button>
        </div>
      </section>

      {/* Latest Project Section */}
      <section id="latest-project" className="py-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FileText className="h-6 w-6 mr-2 text-primary" />
            <h2 className="text-3xl font-bold">Dernier Projet</h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/project">
              Tous les projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={latestProject.image} 
                alt={latestProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-4">{latestProject.title}</h3>
              <p className="mb-6 text-muted-foreground">{latestProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Technologies utilisées:</h4>
                <div className="flex flex-wrap gap-2">
                  {latestProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Date:</h4>
                <p>{new Date(latestProject.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>
              </div>
              
              <Button asChild>
                <Link to={`/project#project-${latestProject.id}`}>
                  Voir ce projet <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Recent Skills Section */}
      <section id="recent-skills" className="py-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Code className="h-6 w-6 mr-2 text-primary" />
            <h2 className="text-3xl font-bold">Compétences Récentes</h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/skills">
              Toutes mes compétences <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentSkills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{skill.name}</CardTitle>
                <CardDescription>
                  Dernière utilisation: {new Date(skill.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Niveau</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div 
                    className="bg-primary rounded-full h-2.5" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about" className="py-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <User className="h-6 w-6 mr-2 text-primary" />
            <h2 className="text-3xl font-bold">À propos de moi</h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/about">
              En apprendre plus sur moi <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-4">
              Je suis un développeur web full-stack passionné par la création d'applications web modernes et intuitives.
              Avec plusieurs années d'expérience dans le domaine, j'ai travaillé sur différents projets allant des sites vitrines aux applications web complexes.
            </p>
            <p className="mb-6">
              Ma passion pour l'apprentissage continu me permet de rester à jour avec les dernières technologies et tendances du web.
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
      </section>
    </Layout>
  );
};

export default Index;
