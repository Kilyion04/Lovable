
import { Layout } from "@/components/layout/Layout";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Pages data for searching
const pages = [
  { path: "/", title: "Accueil", content: "page d'accueil portfolio bienvenue" },
  { path: "/projects", title: "Projets", content: "projets réalisations portfolio" },
  { path: "/skills", title: "Compétences", content: "compétences savoir-faire technologies" },
  { path: "/about", title: "À propos", content: "à propos de moi présentation" },
  { path: "/contact", title: "Contact", content: "contact coordonnées email" },
  { path: "/minecraft", title: "Minecraft", content: "minecraft jeu vidéo gaming" },
  { path: "/prono", title: "Prono", content: "pronostics football sport paris" },
  { path: "/users", title: "Utilisateurs", content: "utilisateurs gestion comptes" },
  { path: "/users_settings", title: "Paramètres Utilisateur", content: "paramètres préférences utilisateur" },
  { path: "/data", title: "Gestion des Données", content: "données statistiques analyse" }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  // Search function that splits the query into terms for better matching
  const search = (q: string) => {
    if (!q) return [];
    
    // Split query into terms and filter out empty terms
    const terms = q.toLowerCase().split(" ").filter(term => term.length > 0);
    
    return pages.filter(page => {
      // Check if any term appears in title or content
      return terms.some(term => 
        page.title.toLowerCase().includes(term) || 
        page.content.toLowerCase().includes(term)
      );
    });
  };

  const results = search(query);

  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-6">Résultats de recherche pour "{query}"</h1>
        
        {results.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-xl mb-4">Aucun résultat trouvé pour votre recherche.</p>
            <p>Essayez avec d'autres termes ou consultez nos pages principales.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((page, index) => (
              <div key={index} className="p-6 border rounded-lg hover:bg-accent/50 transition-colors">
                <Link to={page.path} className="block">
                  <h2 className="text-xl font-semibold mb-2 flex items-center">
                    {page.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </h2>
                  <p className="text-muted-foreground">{page.content}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
