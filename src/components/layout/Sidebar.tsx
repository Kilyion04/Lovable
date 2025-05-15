
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
    href: "/",
    icon: <Home size={24} />,
    description: "Retour à la page d'accueil"
  },
  {
    label: "Projets",
    href: "/projects",
    icon: <Briefcase size={24} />,
    description: "Découvrir mes projets récents"
  },
  {
    label: "Compétences",
    href: "/skills",
    icon: <Award size={24} />,
    description: "Explorer mes compétences techniques"
  },
  {
    label: "À propos",
    href: "/about",
    icon: <User size={24} />,
    description: "En savoir plus sur mon parcours"
  },
  {
    label: "Contact",
    href: "/contact",
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

// Projects page navigation items
const projectsNavItems = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home size={24} />,
    description: "Retour à la page d'accueil"
  },
  {
    label: "Tous les projets",
    href: "#all-projects",
    icon: <Briefcase size={24} />,
    description: "Explorer tous mes projets"
  }
];

// Skills page navigation items
const skillsNavItems = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home size={24} />,
    description: "Retour à la page d'accueil"
  },
  {
    label: "Compétences techniques",
    href: "#technical",
    icon: <Award size={24} />,
    description: "Mes compétences techniques"
  }
];

// About page navigation items
const aboutNavItems = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home size={24} />,
    description: "Retour à la page d'accueil"
  },
  {
    label: "Parcours",
    href: "#journey",
    icon: <User size={24} />,
    description: "Mon parcours professionnel"
  }
];

// Contact page navigation items
const contactNavItems = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home size={24} />,
    description: "Retour à la page d'accueil"
  },
  {
    label: "Formulaire",
    href: "#contact-form",
    icon: <Mail size={24} />,
    description: "Remplir le formulaire de contact"
  }
];

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext);
  const location = useLocation();
  
  // Determine which navigation items to show based on the current path
  const pathname = location.pathname;
  
  let navItems = homeNavItems;
  let sectionTitle = "Navigation Portfolio";
  
  // Select the appropriate navigation items based on current route
  if (pathname === '/minecraft') {
    navItems = minecraftNavItems;
    sectionTitle = "Navigation Minecraft";
  } else if (pathname === '/projects') {
    navItems = projectsNavItems;
    sectionTitle = "Navigation Projets";
  } else if (pathname === '/skills') {
    navItems = skillsNavItems;
    sectionTitle = "Navigation Compétences";
  } else if (pathname === '/about') {
    navItems = aboutNavItems;
    sectionTitle = "Navigation À propos";
  } else if (pathname === '/contact') {
    navItems = contactNavItems;
    sectionTitle = "Navigation Contact";
  }
  
  // Function to handle navigation to anchor links
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // For internal page navigation with anchor links
    if (path.startsWith('#')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside
      className={cn(
        "fixed top-[98px] left-0 z-[5] h-[calc(100vh-98px)] bg-sidebar border-r",
        "lg:translate-x-0 transition-all duration-500 ease-in-out",
        isExpanded ? "w-64 shadow-lg" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full p-2 space-y-1 overflow-y-auto">
        <div className={cn(
          "px-2 py-1.5 text-sm font-medium text-sidebar-foreground/70 mb-2",
          "transition-all duration-300 ease-in-out",
          isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 h-0 overflow-hidden"
        )}>
          {sectionTitle}
        </div>
        
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={(e) => handleNavigation(e, item.href)}
            className={cn(
              "flex flex-col p-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              "transition-all duration-300 ease-in-out transform",
              !isExpanded && "hover:scale-110"
            )}
          >
            <div className="flex items-center">
              <div className={cn(
                "flex justify-center transition-all duration-300 ease-in-out",
                isExpanded ? "min-w-[24px]" : "min-w-[100%]"
              )}>
                {item.icon}
              </div>
              <span
                className={cn(
                  "text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out",
                  isExpanded ? "opacity-100 ml-2 max-w-full" : "opacity-0 max-w-0 overflow-hidden ml-0"
                )}
              >
                {item.label}
              </span>
            </div>
            
            {/* Description text appears with fade-in animation when expanded */}
            <div 
              className={cn(
                "mt-1 text-xs text-sidebar-foreground/70 transition-all duration-300 ease-in-out",
                isExpanded ? "opacity-100 max-h-20 pl-[32px]" : "opacity-0 max-h-0 overflow-hidden"
              )}
            >
              {item.description}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};
