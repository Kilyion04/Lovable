
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  Award,
  User,
  Mail,
  Gamepad,
  Server,
  Key,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

// Home page navigation items
const homeNavItems = [
  {
    label: "Accueil",
    href: "/#home",
    icon: <Home size={24} />,
    description: "Retour à la page d'accueil"
  },
  {
    label: "Projets",
    href: "/#projects",
    icon: <Briefcase size={24} />,
    description: "Découvrir mes projets récents"
  },
  {
    label: "Compétences",
    href: "/#skills",
    icon: <Award size={24} />,
    description: "Explorer mes compétences techniques"
  },
  {
    label: "À propos",
    href: "/#about",
    icon: <User size={24} />,
    description: "En savoir plus sur mon parcours"
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: <Mail size={24} />,
    description: "Me contacter pour collaborer"
  },
  {
    label: "Minecraft",
    href: "/minecraft",
    icon: <Gamepad size={24} />,
    description: "Rejoindre nos serveurs Minecraft"
  }
];

// Minecraft page navigation items
const minecraftNavItems = [
  {
    label: "Serveurs",
    href: "#servers",
    icon: <Server size={24} />,
    description: "Liste des serveurs disponibles"
  },
  {
    label: "Demandes d'accès",
    href: "#access",
    icon: <Key size={24} />,
    description: "Demander l'accès aux serveurs"
  },
  {
    label: "Règles",
    href: "#rules",
    icon: <FileText size={24} />,
    description: "Règles générales des serveurs"
  }
];

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext);
  const location = useLocation();
  
  // Determine which navigation items to show based on the current path
  const isMinecraftPage = location.pathname === '/minecraft';
  const navItems = isMinecraftPage ? minecraftNavItems : homeNavItems;
  
  // Function to handle navigation to anchor links
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // For Minecraft page internal navigation
    if (isMinecraftPage && path.startsWith('#')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // For home page sections
    if (!location.pathname.startsWith('/')) {
      e.preventDefault();
      window.location.href = path;
    } else {
      // If we're on the home page, just scroll to the section
      const sectionId = path.split('#')[1];
      if (sectionId) {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  
  // Determine the section title based on the current path
  const sectionTitle = isMinecraftPage ? "Navigation Minecraft" : "Navigation Portfolio";

  return (
    <aside
      className={cn(
        "fixed top-[98px] left-0 z-[5] h-[calc(100vh-98px)] bg-sidebar border-r transition-all duration-300",
        "lg:translate-x-0",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      style={{ transition: "width 0.3s ease" }}
    >
      <div className="flex flex-col h-full p-2 space-y-1 overflow-y-auto">
        <div className={cn(
          "px-2 py-1.5 text-sm font-medium text-sidebar-foreground/70",
          isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        )}>
          {sectionTitle}
        </div>
        
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={(e) => handleNavigation(e, item.href)}
            className="flex flex-col p-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
          >
            <div className="flex items-center">
              <div className="min-w-[24px] flex justify-center">
                {item.icon}
              </div>
              <span
                className={`text-sm font-medium whitespace-nowrap transition-all duration-200 ${isExpanded ? "opacity-100 ml-2" : "opacity-0 ml-0 w-0 overflow-hidden"}`}
              >
                {item.label}
              </span>
            </div>
            
            {/* Description text appears only when expanded */}
            {isExpanded && (
              <p className="mt-1 text-xs text-sidebar-foreground/70 pl-[32px]">
                {item.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
};
