
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const UserSettings = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Rediriger vers la page d'accueil si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return;
    }
    
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
      });
    }
  }, [isAuthenticated, navigate, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ici, vous pourriez mettre à jour les informations de l'utilisateur
    // dans un système de backend. Pour l'instant, nous allons juste simuler
    // une mise à jour réussie.
    
    toast({
      title: "Mise à jour réussie",
      description: "Vos informations ont été mises à jour avec succès",
    });
  };

  if (!isAuthenticated || !user) {
    return null; // Ne rien afficher pendant la redirection
  }

  return (
    <Layout>
      <section className="py-10">
        <h1 className="text-3xl font-bold mb-6">Paramètres du compte</h1>
        
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>
                  Mettez à jour vos informations personnelles ici
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre email"
                    />
                  </div>
                  <Button type="submit">Mettre à jour</Button>
                </form>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Sécurité</CardTitle>
                <CardDescription>
                  Gérez vos paramètres de sécurité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Mot de passe actuel</Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="Votre mot de passe actuel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nouveau mot de passe</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Votre nouveau mot de passe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirmer votre nouveau mot de passe"
                    />
                  </div>
                  <Button>Changer le mot de passe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Compte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">ID</h3>
                    <p className="text-sm text-muted-foreground">{user.id}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Créé le</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2">
                <Button variant="outline" className="w-full">
                  Télécharger mes données
                </Button>
                <Button variant="destructive" className="w-full">
                  Supprimer mon compte
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserSettings;
