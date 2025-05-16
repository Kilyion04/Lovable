
import { useSearchParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Mock data for search results
const pages = [
  { id: 1, title: "Accueil", content: "Bienvenue sur mon portfolio", path: "" },
  { id: 2, title: "Projets", content: "Découvrez mes projets récents en développement web", path: "projects" },
  { id: 3, title: "Compétences", content: "React, TypeScript, Node.js, et plus", path: "skills" },
  { id: 4, title: "À propos", content: "Mon parcours professionnel et personnel", path: "about" },
  { id: 5, title: "Contact", content: "Comment me contacter pour vos projets", path: "contact" },
  { id: 6, title: "Minecraft", content: "Gestion de serveur Minecraft et demandes d'accès", path: "minecraft" },
  { id: 7, title: "Prédictions Football", content: "Calculez les chances de victoire d'une équipe", path: "prono" },
  { id: 8, title: "Utilisateur", content: "Modifier vos informations et paramètres", path: "users" },
  { id: 9, title: "Paramètres Utilisateur", content: "Personnalisez vos préférences", path: "users_settings" },
  { id: 10, title: "Gestion BDD", content: "Section réservée à l'administrateur", path: "data" }
];

// Function to highlight search term in text
const highlightText = (text: string, query: string) => {
  if (!query || query === '') return text;
  
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  
  return parts.map((part, index) => 
    part.toLowerCase() === query.toLowerCase() 
      ? <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">{part}</mark> 
      : part
  );
};

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get the query from URL parameters and ensure it's not null
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<typeof pages>([]);

  useEffect(() => {
    // If query is empty, redirect to home page
    if (query === "") {
      toast({
        title: "Recherche vide",
        description: "Veuillez saisir un terme de recherche",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    // Filter pages based on search query - use more flexible search
    const searchTerms = query.toLowerCase().split(/\s+/);
    
    const filteredResults = pages.filter(page => {
      const titleLower = page.title.toLowerCase();
      const contentLower = page.content.toLowerCase();
      
      // Check if any of the search terms match
      return searchTerms.some(term => 
        titleLower.includes(term) || contentLower.includes(term)
      );
    });
    
    setResults(filteredResults);
  }, [query, navigate, toast]);

  const handleResultClick = (path: string) => {
    // Navigate to the page
    navigate(`/${path}`);
  };

  // If query is empty, don't render the component
  if (query === "") return null;

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Résultats de recherche pour "{query}"</h1>
        <p className="text-muted-foreground">{results.length} résultat(s) trouvé(s)</p>
      </div>

      {results.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p>Aucun résultat trouvé pour "{query}".</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {results.map(result => (
            <Card 
              key={result.id} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleResultClick(result.path)}
            >
              <CardHeader>
                <CardTitle className="text-primary hover:underline">
                  {highlightText(result.title, query)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{highlightText(result.content, query)}</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  <span>Cliquez pour accéder à cette section</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
}
