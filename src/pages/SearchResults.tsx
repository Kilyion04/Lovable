
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

// Mock data for search results
const pages = [
  { id: 1, title: "Accueil", content: "Bienvenue sur mon portfolio", path: "#home" },
  { id: 2, title: "Projets", content: "Découvrez mes projets récents en développement web", path: "#projects" },
  { id: 3, title: "Compétences", content: "React, TypeScript, Node.js, et plus", path: "#skills" },
  { id: 4, title: "À propos", content: "Mon parcours professionnel et personnel", path: "#about" },
  { id: 5, title: "Contact", content: "Comment me contacter pour vos projets", path: "#contact" }
];

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<typeof pages>([]);

  useEffect(() => {
    // Filter pages based on search query
    const filteredResults = pages.filter(page => 
      page.title.toLowerCase().includes(query.toLowerCase()) || 
      page.content.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  }, [query]);

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
            <Card key={result.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>
                  <a href={result.path} className="text-primary hover:underline">
                    {result.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{result.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
}
