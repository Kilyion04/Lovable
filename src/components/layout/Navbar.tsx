
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Moon, 
  Sun, 
  User, 
  Settings, 
  Menu,
  LogOut,
  UserCog
} from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
    }
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 border-b bg-background">
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

      <form onSubmit={handleSearchSubmit} className="hidden md:flex relative items-center max-w-md flex-1 mx-4">
        <Search className="absolute left-2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          type="search"
          placeholder="Rechercher..."
          className="pl-8 w-full bg-background"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
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

        <HoverCard>
          <HoverCardTrigger asChild>
            <Link to="/users">
              <Button variant="ghost" size="icon" aria-label="User profile">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-56">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarFallback>UT</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Utilisateur</h4>
                <div className="flex flex-col gap-2 pt-2">
                  <Link 
                    to="/users" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <User className="h-3.5 w-3.5" />
                    <span>Profil</span>
                  </Link>
                  <Link 
                    to="/users_settings" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <UserCog className="h-3.5 w-3.5" />
                    <span>Paramètres</span>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Déconnexion</span>
                  </div>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <Link to="/users_settings">
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};
