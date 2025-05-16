
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
  UserCog,
  Home,
  FileText,
  Code,
  Info,
  Mail,
  Gamepad2
} from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const mainNavItems: NavItem[] = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    label: "Projets",
    href: "/project",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    label: "Compétences",
    href: "/skills",
    icon: <Code className="h-4 w-4" />,
  },
  {
    label: "À propos",
    href: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    label: "Minecraft",
    href: "/minecraft",
    icon: <Gamepad2 className="h-4 w-4" />,
  }
];

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });

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

  // Function to check if a nav item is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Update indicator position for the currently active link
  useEffect(() => {
    updateActiveIndicator();
  }, [location.pathname]);

  // Update indicator when window resizes
  useEffect(() => {
    window.addEventListener('resize', updateActiveIndicator);
    return () => window.removeEventListener('resize', updateActiveIndicator);
  }, []);

  const updateActiveIndicator = () => {
    const navContainer = navRef.current;
    if (!navContainer) return;

    const activeLink = navContainer.querySelector('[data-active="true"]') as HTMLElement;
    if (activeLink) {
      const { left: navLeft } = navContainer.getBoundingClientRect();
      const { left: itemLeft, width } = activeLink.getBoundingClientRect();
      
      setActiveIndicator({
        left: itemLeft - navLeft,
        width
      });
    }
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const navContainer = navRef.current;
    if (!navContainer) return;
    
    const { left: navLeft } = navContainer.getBoundingClientRect();
    const { left, width } = e.currentTarget.getBoundingClientRect();
    
    setActiveIndicator({
      left: left - navLeft,
      width
    });
  };

  const handleLinkHoverEnd = () => {
    updateActiveIndicator();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-col bg-background border-b">
      {/* Top bar with logo, search, and user controls */}
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

        {/* Centered search form that takes most of the width */}
        <form onSubmit={handleSearchSubmit} className="flex-1 mx-4 max-w-3xl">
          <div className="relative w-full flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-full pl-9 bg-background"
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
      </div>

      {/* Main Navigation - moved below the top bar */}
      <div className="flex justify-center px-4 py-1 border-t overflow-x-auto relative">
        <div 
          ref={navRef}
          className="flex space-x-1 relative"
        >
          {/* Active indicator - animated background */}
          <div 
            className="absolute h-full bg-primary/10 rounded-md transition-all duration-300 ease-out"
            style={{
              left: `${activeIndicator.left}px`,
              width: `${activeIndicator.width}px`,
              top: '0',
            }}
          />
          
          {/* Navigation links */}
          {mainNavItems.map((item) => (
            <Link 
              key={item.label}
              to={item.href}
              data-active={isActive(item.href)}
              className={`relative flex items-center px-3 py-2 rounded-md text-sm font-medium z-10 transition-colors duration-200 ${
                isActive(item.href) 
                  ? "text-primary" 
                  : "hover:text-primary"
              }`}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverEnd}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
