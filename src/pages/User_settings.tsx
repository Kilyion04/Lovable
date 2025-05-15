
import { Layout } from "@/components/layout/Layout";
import { useState, useEffect, useContext } from "react";
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
import { ThemeContext } from "@/components/theme/ThemeProvider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const UserSettings = () => {
  // Mock state for user login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, setTheme } = useContext(ThemeContext);

  // User settings state
  const [username, setUsername] = useState("Utilisateur");
  const [email, setEmail] = useState("utilisateur@example.com");
  const [publicProfile, setPublicProfile] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [animations, setAnimations] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [updateNotifs, setUpdateNotifs] = useState(false);
  const [newsNotifs, setNewsNotifs] = useState(false);

  // Apply font size to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove any existing font size classes
    root.classList.remove('text-sm', 'text-base', 'text-lg');
    
    // Add the selected font size class
    switch (fontSize) {
      case 'small':
        root.classList.add('text-sm');
        break;
      case 'medium':
        root.classList.add('text-base');
        break;
      case 'large':
        root.classList.add('text-lg');
        break;
      default:
        root.classList.add('text-base');
    }

    // Store the font size preference
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  // Simulate checking login state
  useEffect(() => {
    // For demo purposes, we'll make a simulated check
    const checkLogin = () => {
      // This would be replaced with actual auth check
      const mockLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const mockIsAdmin = localStorage.getItem("isAdmin") === "true";
      const storedUsername = localStorage.getItem("username");
      const storedEmail = localStorage.getItem("email");
      
      setIsLoggedIn(mockLoggedIn);
      setIsAdmin(mockIsAdmin);
      
      // Set user data from local storage if available
      if (storedUsername) setUsername(storedUsername);
      if (storedEmail) setEmail(storedEmail);

      // Get font size preference
      const storedFontSize = localStorage.getItem("fontSize");
      if (storedFontSize) {
        setFontSize(storedFontSize);
      }
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

  // Save general settings
  const handleSaveGeneralSettings = () => {
    // Update local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    
    // Show confirmation toast
    toast({ 
      title: "Paramètres sauvegardés",
      description: "Vos paramètres généraux ont été mis à jour"
    });
  };

  // Save appearance settings
  const handleSaveAppearanceSettings = () => {
    // Theme is already saved in the ThemeContext
    localStorage.setItem("animations", animations.toString());
    
    // Show confirmation toast
    toast({ 
      title: "Apparence mise à jour",
      description: "Vos préférences d'apparence ont été mises à jour"
    });
  };

  // Save notification settings
  const handleSaveNotificationSettings = () => {
    localStorage.setItem("emailNotifs", emailNotifs.toString());
    localStorage.setItem("pushNotifs", pushNotifs.toString());
    localStorage.setItem("updateNotifs", updateNotifs.toString());
    localStorage.setItem("newsNotifs", newsNotifs.toString());
    
    toast({ 
      title: "Préférences de notification mises à jour",
      description: "Vos préférences de notification ont été mises à jour"
    });
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
                      <Input 
                        id="name" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="public-profile" 
                        checked={publicProfile}
                        onCheckedChange={setPublicProfile}
                      />
                      <Label htmlFor="public-profile">Profil public</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="marketing" 
                        checked={marketing}
                        onCheckedChange={setMarketing}
                      />
                      <Label htmlFor="marketing">Recevoir des emails marketing</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveGeneralSettings}>
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
                      <RadioGroup 
                        value={theme} 
                        onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
                        className="flex space-x-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="light" id="theme-light" />
                          <Label htmlFor="theme-light">Clair</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dark" id="theme-dark" />
                          <Label htmlFor="theme-dark">Sombre</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="system" id="theme-system" />
                          <Label htmlFor="theme-system">Système</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Taille de police</Label>
                      <ToggleGroup 
                        type="single" 
                        value={fontSize}
                        onValueChange={(value) => {
                          if (value) setFontSize(value);
                        }}
                      >
                        <ToggleGroupItem value="small">Petite</ToggleGroupItem>
                        <ToggleGroupItem value="medium">Moyenne</ToggleGroupItem>
                        <ToggleGroupItem value="large">Grande</ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="animations" 
                        checked={animations}
                        onCheckedChange={setAnimations}
                      />
                      <Label htmlFor="animations">Activer les animations</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveAppearanceSettings}>
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
                      <Switch 
                        id="email-notifs" 
                        checked={emailNotifs}
                        onCheckedChange={setEmailNotifs}
                      />
                      <Label htmlFor="email-notifs">Notifications par email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="push-notifs" 
                        checked={pushNotifs}
                        onCheckedChange={setPushNotifs}
                      />
                      <Label htmlFor="push-notifs">Notifications push</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="update-notifs" 
                        checked={updateNotifs}
                        onCheckedChange={setUpdateNotifs}
                      />
                      <Label htmlFor="update-notifs">Mises à jour du site</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="news-notifs" 
                        checked={newsNotifs}
                        onCheckedChange={setNewsNotifs}
                      />
                      <Label htmlFor="news-notifs">Actualités et promotions</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveNotificationSettings}>
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
