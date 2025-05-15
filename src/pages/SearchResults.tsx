
import { useSearchParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

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
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<typeof pages>([]);

  useEffect(() => {
    // Filter pages based on search query
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = pages.filter(page => 
        page.title.toLowerCase().includes(query.toLowerCase()) || 
        page.content.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  const handleResultClick = (path: string) => {
    // Navigate to the page
    navigate(`/${path}`);
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Résultats de recherche pour "{query}"</h1>
        <p className="text-muted-foreground">{results.length} résultat(s) trouvé(s)</p>
      </div>

      {query.trim() === "" ? (
        <Card>
          <CardContent className="p-6">
            <p>Veuillez entrer un terme de recherche.</p>
          </CardContent>
        </Card>
      ) : results.length === 0 ? (
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
