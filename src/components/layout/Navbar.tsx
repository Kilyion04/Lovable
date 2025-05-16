import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Moon,
  Sun,
  User,
  LogOut,
  LogIn,
  Settings,
  Menu,
  Home,
  Gamepad,
  Briefcase,
  Award,
  Mail,
} from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // TODO: Remplacer cette logique par un vrai état d'authentification (ex: via context ou localStorage)
  const isLoggedIn = false;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearch = searchValue.trim();
    if (!trimmedSearch) {
      toast({
        title: "Recherche vide",
        description: "Veuillez saisir un terme de recherche",
        variant: "destructive",
      });
      return;
    }
    navigate(`/search?q=${encodeURIComponent(trimmedSearch)}`);
  };

  const handleHomeNavigation = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex flex-col bg-background border-b">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left : Logo + Sidebar toggle */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-4 lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link
            to="/"
            className="flex items-center"
            onClick={handleHomeNavigation}
          >
            <div className="font-bold text-2xl text-primary mr-2">K</div>
            <span className="font-medium hidden sm:block">Kromary</span>
          </Link>
        </div>

        {/* Center : Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-4xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="pl-8 w-full bg-background"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </form>

        {/* Right : Icons */}
        <div className="flex items-center space-x-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Connexion / Profil */}
          {isLoggedIn ? (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="icon" aria-label="Profil">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" aria-label="Déconnexion">
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="icon" aria-label="Connexion">
                <LogIn className="h-5 w-5" />
              </Button>
            </Link>
          )}

          {/* Paramètres */}
          <Link to="/settings">
            <Button variant="ghost" size="icon" aria-label="Paramètres">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="flex justify-center border-t px-4 py-1 overflow-x-auto">
        <nav className="flex space-x-4">
          <Link
            to="/"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent ${
              isActiveRoute("/") ? "bg-accent" : ""
            }`}
            onClick={handleHomeNavigation}
          >
            <Home className="h-4 w-4 mr-2" />
            Accueil
          </Link>
          <Link
            to="/projects"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent ${
              isActiveRoute("/projects") ? "bg-accent" : ""
            }`}
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Projets
          </Link>
          <Link
            to="/skills"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent ${
              isActiveRoute("/skills") ? "bg-accent" : ""
            }`}
          >
            <Award className="h-4 w-4 mr-2" />
            Compétences
          </Link>
          <Link
            to="/about"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent ${
              isActiveRoute("/about") ? "bg-accent" : ""
            }`}
          >
            <User className="h-4 w-4 mr-2" />
            À propos
          </Link>
          <Link
            to="/contact"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent ${
              isActiveRoute("/contact") ? "bg-accent" : ""
            }`}
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Link>
          <Link
            to="/minecraft"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent ${
              isActiveRoute("/minecraft") ? "bg-accent" : ""
            }`}
          >
            <Gamepad className="h-4 w-4 mr-2" />
            Minecraft
          </Link>
        </nav>
      </div>
    </div>
  );
};
