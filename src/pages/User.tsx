
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Users = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Rediriger vers la page d'accueil si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null; // Ne rien afficher pendant la redirection
  }

  return (
    <Layout>
      <section className="py-10">
        <h1 className="text-3xl font-bold mb-6">Mon Profil</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Nom</h3>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">ID Utilisateur</h3>
                  <p className="text-sm text-muted-foreground">{user.id}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-4">
            <Button onClick={() => navigate("/users_settings")}>
              Modifier mes informations
            </Button>
            <Button variant="outline" onClick={logout}>
              Déconnexion
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Users;
