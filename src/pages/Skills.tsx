
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, FileText } from "lucide-react";

type Skill = {
  name: string;
  level: number;
  category: string;
  projects: string[];
  lastUsed: string;
};

const skillsData: Skill[] = [
  { 
    name: "HTML & CSS", 
    level: 95, 
    category: "Frontend",
    projects: ["Site Portfolio", "Projet E-commerce", "Application de Gestion"],
    lastUsed: "2024-04"
  },
  { 
    name: "JavaScript", 
    level: 90, 
    category: "Frontend",
    projects: ["Site Portfolio", "Projet E-commerce", "Application Mobile"],
    lastUsed: "2024-04"
  },
  { 
    name: "React", 
    level: 85, 
    category: "Frontend",
    projects: ["Site Portfolio", "Application Mobile", "Projet E-commerce"],
    lastUsed: "2024-03"
  },
  { 
    name: "Node.js", 
    level: 80, 
    category: "Backend",
    projects: ["Projet E-commerce", "Application de Gestion"],
    lastUsed: "2024-01"
  },
  { 
    name: "TypeScript", 
    level: 75, 
    category: "Frontend",
    projects: ["Application de Gestion", "Site Portfolio"],
    lastUsed: "2024-03"
  },
  { 
    name: "MongoDB", 
    level: 75, 
    category: "Backend",
    projects: ["Projet E-commerce", "Plateforme Éducative"],
    lastUsed: "2024-04"
  },
  { 
    name: "Next.js", 
    level: 70, 
    category: "Frontend",
    projects: ["Application de Gestion"],
    lastUsed: "2024-01"
  },
  { 
    name: "Vue.js", 
    level: 65, 
    category: "Frontend",
    projects: ["Plateforme Éducative"],
    lastUsed: "2024-04"
  },
  { 
    name: "Tailwind CSS", 
    level: 90, 
    category: "Frontend",
    projects: ["Site Portfolio", "Application de Gestion"],
    lastUsed: "2024-03"
  },
  { 
    name: "Firebase", 
    level: 70, 
    category: "Backend",
    projects: ["Application Mobile"],
    lastUsed: "2023-09"
  }
];

// Sort skills by lastUsed (most recent first)
const sortedSkills = [...skillsData].sort(
  (a, b) => new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime()
);

// Group skills by category
const skillsByCategory = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const displayedSkills = selectedCategory === "all" 
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  const categories = ["all", ...Object.keys(skillsByCategory)];
  
  return (
    <Layout>
      <section className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Mes Compétences</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez toutes mes compétences techniques et leur application dans mes différents projets.
          </p>
        </div>

        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category === "all" ? "Toutes les compétences" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="max-w-3xl mx-auto">
                {displayedSkills.map((skill) => (
                  <Card key={skill.name} className="mb-8">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Code className="h-5 w-5 text-primary" />
                          <CardTitle className="text-xl">{skill.name}</CardTitle>
                        </div>
                        <Badge>{skill.category}</Badge>
                      </div>
                      <CardDescription>
                        Dernière utilisation: {new Date(skill.lastUsed).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Niveau de maîtrise</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2.5 mb-6" />
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Projets utilisant cette compétence:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.projects.map(project => (
                            <Badge key={project} variant="outline">{project}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </Layout>
  );
};

export default Skills;
