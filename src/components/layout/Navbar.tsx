
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Moon, 
  Sun, 
  Settings, 
  Menu,
  Home,
  Gamepad,
  Briefcase,
  Award,
  Mail
} from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import { useToast } from "@/hooks/use-toast";
import { UserMenu } from "../auth/UserMenu";

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trim the search value and check if it's empty
    const trimmedSearch = searchValue.trim();
    
    if (!trimmedSearch) {
      // Show a toast notification if the search is empty
      toast({
        title: "Recherche vide",
        description: "Veuillez saisir un terme de recherche",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to search results with the valid query
    navigate(`/search?q=${encodeURIComponent(trimmedSearch)}`);
  };

  // Function to handle home navigation
  const handleHomeNavigation = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      // We're not on the home page, let the default navigation happen
      return;
    }
    
    // We're already on the home page, just scroll to top
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if the current route is active
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex flex-col bg-background border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-4 lg:hidden" 
            onClick={() => toggleSidebar()}
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link to="/" className="flex items-center" onClick={handleHomeNavigation}>
            <div className="font-bold text-2xl text-primary mr-2">P</div>
            <span className="font-medium hidden sm:block">Portfolio</span>
          </Link>
        </div>

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

        <div className="flex items-center space-x-2">
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

          <UserMenu />

          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Navigation items below search bar */}
      <div className="flex justify-center border-t px-4 py-1 overflow-x-auto">
        <nav className="flex space-x-4">
          <Link 
            to="/" 
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/90 dark:hover:bg-white/20 transition duration-400 ${isActiveRoute('/') ? 'bg-accent' : ''}`}
            onClick={handleHomeNavigation}
          >
            <Home className="h-4 w-4 mr-2" />
            Accueil
          </Link>
          <Link 
            to="/projects" 
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/90 dark:hover:bg-white/20 transition duration-400 ${isActiveRoute('/projects') ? 'bg-accent' : ''}`}
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Projets
          </Link>
          <Link 
            to="/skills" 
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/90 dark:hover:bg-white/20 transition duration-400 ${isActiveRoute('/skills') ? 'bg-accent' : ''}`}
          >
            <Award className="h-4 w-4 mr-2" />
            Compétences
          </Link>
          <Link 
            to="/about" 
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/90 dark:hover:bg-white/20 transition duration-400 ${isActiveRoute('/about') ? 'bg-accent' : ''}`}
          >
            <User className="h-4 w-4 mr-2" />
            À propos
          </Link>
          <Link 
            to="/contact" 
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/90 dark:hover:bg-white/20 transition duration-400 ${isActiveRoute('/contact') ? 'bg-accent' : ''}`}
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Link>
          <Link 
            to="/minecraft" 
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/90 dark:hover:bg-white/20 transition duration-400 ${isActiveRoute('/minecraft') ? 'bg-accent' : ''}`}
          >
            <Gamepad className="h-4 w-4 mr-2" />
            Minecraft
          </Link>
        </nav>
      </div>
    </div>
  );
};
