
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
  Gamepad,
  Home,
  Briefcase,
  Award,
  Mail
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home size={18} />,
  },
  {
    label: "Projets",
    href: "/projects",
    icon: <Briefcase size={18} />,
  },
  {
    label: "Compétences",
    href: "/skills",
    icon: <Award size={18} />,
  },
  {
    label: "À propos",
    href: "/about",
    icon: <User size={18} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Mail size={18} />,
  },
  {
    label: "Minecraft",
    href: "/minecraft",
    icon: <Gamepad size={18} />,
  }
];

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Added admin state

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock login - in a real app, this would authenticate against a backend
    if (email && password) {
      setIsLoggedIn(true);
      setUsername(email.split('@')[0]); // Use part of email as username
      // Set admin status based on email for demo purposes
      setIsAdmin(email.toLowerCase().includes('admin'));
      setLoginOpen(false);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setIsAdmin(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-col border-b bg-background">
      {/* Top row with logo, search, and user controls */}
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

          <Link to="/" className="flex items-center">
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
          <Button type="submit" className="ml-2" variant="outline">Rechercher</Button>
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

          {isLoggedIn ? (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="User profile"
                  onClick={() => navigate('/users')}
                >
                  <User className="h-5 w-5" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-56">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{username}</h4>
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
                        <Settings className="h-3.5 w-3.5" />
                        <span>Paramètres</span>
                      </Link>
                      <div 
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        <span>Déconnexion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="User profile">
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Connexion</DialogTitle>
                  <DialogDescription>
                    Connectez-vous pour accéder à votre compte
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleLogin} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">Se connecter</Button>
                </form>
              </DialogContent>
            </Dialog>
          )}

          <Link to="/users_settings">
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Navigation links row */}
      <div className="hidden md:flex justify-center py-1 px-4 border-t border-border">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center px-3 py-1.5 text-sm rounded-md hover:bg-accent transition-all duration-200"
            >
              <span className="mr-1.5">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
