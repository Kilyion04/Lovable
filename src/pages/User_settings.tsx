
import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Settings, Database, Server } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UserSettings = () => {
  // Mock state for user login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simulate checking login state
  useEffect(() => {
    // For demo purposes, we'll make a simulated check
    const checkLogin = () => {
      // This would be replaced with actual auth check
      const mockLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const mockIsAdmin = localStorage.getItem("isAdmin") === "true";
      
      setIsLoggedIn(mockLoggedIn);
      setIsAdmin(mockIsAdmin);
    };
    
    checkLogin();
  }, []);

  // Mock login for demo purposes
  const handleMockLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isAdmin", "true");
    setIsLoggedIn(true);
    setIsAdmin(true);
    toast({
      title: "Connecté",
      description: "Vous êtes maintenant connecté en tant qu'administrateur",
    });
  };

  // Handle navigation to data management
  const handleNavigateToData = () => {
    navigate("/data");
  };

  // Handle navigation to Minecraft server management
  const handleNavigateToMinecraft = () => {
    navigate("/minecraft");
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Settings className="h-8 w-8 mr-3 text-primary" />
            <h1 className="text-3xl font-bold">Paramètres Utilisateur</h1>
          </div>

          {/* Mock login button for demo */}
          {!isLoggedIn && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Authentification requise</CardTitle>
                <CardDescription>
                  Connectez-vous pour accéder aux paramètres
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={handleMockLogin}>
                  Se connecter (simulation)
                </Button>
              </CardFooter>
            </Card>
          )}

          {isLoggedIn && (
            <Tabs defaultValue="general">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="general">Général</TabsTrigger>
                <TabsTrigger value="appearance">Apparence</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Paramètres Généraux</CardTitle>
                    <CardDescription>
                      Gérez vos paramètres généraux du compte.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom d'utilisateur</Label>
                      <Input id="name" defaultValue="Utilisateur" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="utilisateur@example.com" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="public-profile" />
                      <Label htmlFor="public-profile">Profil public</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="marketing" />
                      <Label htmlFor="marketing">Recevoir des emails marketing</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => toast({ title: "Paramètres sauvegardés" })}>
                      Sauvegarder les modifications
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="appearance">
                <Card>
                  <CardHeader>
                    <CardTitle>Apparence</CardTitle>
                    <CardDescription>
                      Personnalisez l'apparence de votre interface.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Thème</Label>
                      <div className="flex space-x-4">
                        <Button variant="outline">Clair</Button>
                        <Button variant="outline">Sombre</Button>
                        <Button variant="outline">Système</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Taille de police</Label>
                      <div className="flex space-x-4">
                        <Button variant="outline">Petite</Button>
                        <Button variant="outline">Moyenne</Button>
                        <Button variant="outline">Grande</Button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="animations" defaultChecked />
                      <Label htmlFor="animations">Activer les animations</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => toast({ title: "Apparence mise à jour" })}>
                      Sauvegarder les préférences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      Configurez vos préférences de notification.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="email-notifs" defaultChecked />
                      <Label htmlFor="email-notifs">Notifications par email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="push-notifs" defaultChecked />
                      <Label htmlFor="push-notifs">Notifications push</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="update-notifs" />
                      <Label htmlFor="update-notifs">Mises à jour du site</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="news-notifs" />
                      <Label htmlFor="news-notifs">Actualités et promotions</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => toast({ title: "Préférences de notification mises à jour" })}>
                      Sauvegarder les préférences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          )}

          {/* Admin-only section */}
          {isLoggedIn && isAdmin && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Administration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 mr-2" />
                      Gestion de la Base de Données
                    </CardTitle>
                    <CardDescription>
                      Accédez au panneau d'administration de la base de données
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button onClick={handleNavigateToData}>
                      Accéder
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-5 w-5 mr-2" />
                      Gestion des Serveurs Minecraft
                    </CardTitle>
                    <CardDescription>
                      Gérez les serveurs et les utilisateurs Minecraft
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button onClick={handleNavigateToMinecraft}>
                      Accéder
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default UserSettings;
