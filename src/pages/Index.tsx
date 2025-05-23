
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

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
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ScrollReveal>
        <section id="home" className="py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">
            Bienvenue sur mon <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            Développeur web passionné créant des expériences numériques modernes et intuitives avec les dernières technologies.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal>
        <section id="projects" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de mes travaux récents montrant mes compétences et mon expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100} direction="up">
                <Card className="overflow-hidden">
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
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal direction="left">
        <section id="skills" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes Compétences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les technologies et outils avec lesquels je travaille quotidiennement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 100} direction="right">
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div 
                      className="bg-primary rounded-full h-2.5 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal direction="down">
        <section id="about" className="py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
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
            <ScrollReveal delay={200}>
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" 
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal direction="up">
        <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contactez-moi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de la manière dont je peux vous aider.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  placeholder="Votre message..."
                />
              </div>
              <Button type="submit" className="w-full">Envoyer le message</Button>
            </form>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
