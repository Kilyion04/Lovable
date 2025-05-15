
import { Layout } from "@/components/layout/Layout";

const projectItems = [
  {
    title: "Portfolio Personnel",
    description: "Site web portfolio avec React et Tailwind CSS",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900"
  },
  {
    title: "Application de Gestion",
    description: "Application pour gérer des ressources d'entreprise",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900"
  },
  {
    title: "Extension Chrome",
    description: "Extension pour améliorer la productivité",
    tech: ["JavaScript", "Chrome API", "CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900"
  },
];

const Projects = () => {
  return (
    <Layout>
      <section id="all-projects" className="py-20 scroll-mt-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets récents et les technologies que j'ai utilisées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
