
import { Layout } from "@/components/layout/Layout";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Lightbulb, LineChart, Monitor, Server, Smartphone } from "lucide-react";

const skillCategories = [
  {
    id: "front-end",
    title: "Front-End",
    icon: <Monitor className="h-5 w-5" />,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 80 },
      { name: "EasyPHP", level: 85 },
      { name: "WordPress", level: 75 },
    ]
  },
  {
    id: "back-end",
    title: "Back-End",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 85 },
      { name: "C, C++, C#", level: 80 },
      { name: "SQL", level: 75 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
    ]
  },
  {
    id: "database",
    title: "Base de Données",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ]
  },
  {
    id: "other",
    title: "Autres",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: "Arduino", level: 70 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Visual Studio", level: 80 },
      { name: "Cisco Packet Tracer", level: 75 },
    ]
  }
];

const technologiesByCategory = {
  "languages": ["JavaScript", "Python", "PHP", "C", "C++", "C#", "SQL"],
  "frameworks": ["WordPress", "EasyPHP", "Jupyter Notebook"],
  "tools": ["Visual Studio", "Visual Studio Code", "MySQL Workbench", "PostgreSQL", "MongoDB", "Cisco Packet Tracer", "Arduino"],
};

const Skills = () => {
  return (
    <Layout>
      <section id="overview" className="py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Mes Compétences</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-10">
          Les technologies et outils avec lesquels je travaille quotidiennement pour créer des applications innovantes et 
          performantes. Actuellement en 3ème année à CESI École d'Ingénieurs et alternant chez SIA Habitat.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Développement</CardTitle>
              <Monitor className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3+ ans</div>
              <p className="text-xs text-muted-foreground">Développement d'applications</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Organisation</CardTitle>
              <Server className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rigoureux</div>
              <p className="text-xs text-muted-foreground">Méthodique et organisé</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Équipe</CardTitle>
              <Smartphone className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Excellent</div>
              <p className="text-xs text-muted-foreground">Esprit d'équipe</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Langues</CardTitle>
              <LineChart className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Anglais B2</div>
              <p className="text-xs text-muted-foreground">TOEIC</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section id="skill-levels" className="py-10">
        <h2 className="text-2xl font-semibold mb-8">Niveaux de Compétences</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center gap-2">
                {category.icon}
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="technologies" className="py-10">
        <h2 className="text-2xl font-semibold mb-8">Technologies</h2>
        
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5" />
              <h3 className="text-xl font-medium">Langages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologiesByCategory.languages.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5" />
              <h3 className="text-xl font-medium">Frameworks & Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologiesByCategory.frameworks.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5" />
              <h3 className="text-xl font-medium">Outils & Environnements</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologiesByCategory.tools.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
