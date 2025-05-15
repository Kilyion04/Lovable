
import { Layout } from "@/components/layout/Layout";
import { Star } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
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

export default About;
