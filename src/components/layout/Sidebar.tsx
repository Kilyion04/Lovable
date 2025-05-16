
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  Code,
  Info,
  User,
  Star,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type PageSidebarContent = {
  [key: string]: {
    title: string;
    links: SidebarLink[];
  };
};

const pageSidebarContent: PageSidebarContent = {
  "/": {
    title: "Accueil",
    links: [
      {
        label: "Dernier Projet",
        href: "/#latest-project",
        icon: <FileText size={20} />,
      },
      {
        label: "Compétences récentes",
        href: "/#recent-skills",
        icon: <Code size={20} />,
      },
      {
        label: "À propos de moi",
        href: "/#about",
        icon: <User size={20} />,
      }
    ],
  },
  "/project": {
    title: "Projets",
    links: [
      {
        label: "Tous les projets",
        href: "/project",
        icon: <FileText size={20} />,
      },
      {
        label: "Filtrer par technologie",
        href: "/project#tech-filter",
        icon: <Code size={20} />,
      },
      {
        label: "Filtrer par date",
        href: "/project#date-filter",
        icon: <Star size={20} />,
      }
    ],
  },
  "/skills": {
    title: "Compétences",
    links: [
      {
        label: "Toutes les compétences",
        href: "/skills",
        icon: <Code size={20} />,
      },
      {
        label: "Compétences récentes",
        href: "/skills#recent",
        icon: <Star size={20} />,
      },
      {
        label: "Projets associés",
        href: "/skills#projects",
        icon: <FileText size={20} />,
      }
    ],
  },
  "/about": {
    title: "À propos",
    links: [
      {
        label: "Présentation",
        href: "/about#intro",
        icon: <User size={20} />,
      },
      {
        label: "Parcours",
        href: "/about#journey",
        icon: <Star size={20} />,
      },
      {
        label: "Expérience",
        href: "/about#experience",
        icon: <Info size={20} />,
      }
    ],
  },
  "/contact": {
    title: "Contact",
    links: [
      {
        label: "Formulaire de contact",
        href: "/contact#form",
        icon: <User size={20} />,
      },
      {
        label: "Coordonnées",
        href: "/contact#details",
        icon: <Info size={20} />,
      },
      {
        label: "Réseaux sociaux",
        href: "/contact#social",
        icon: <ExternalLink size={20} />,
      }
    ],
  },
  "/minecraft": {
    title: "Minecraft",
    links: [
      {
        label: "Serveurs",
        href: "/minecraft#servers",
        icon: <FileText size={20} />,
      },
      {
        label: "Projets Minecraft",
        href: "/minecraft#projects",
        icon: <Star size={20} />,
      },
      {
        label: "Ressources",
        href: "/minecraft#resources",
        icon: <ExternalLink size={20} />,
      }
    ],
  }
};

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext);
  const location = useLocation();
  
  // Find the current page sidebar content based on pathname
  const getCurrentPageContent = () => {
    // Find the exact route match first
    if (pageSidebarContent[location.pathname]) {
      return pageSidebarContent[location.pathname];
    }
    
    // If no exact match, find closest parent route
    const paths = Object.keys(pageSidebarContent);
    const matchingPath = paths.find(path => 
      path !== "/" && location.pathname.startsWith(path)
    );
    
    return matchingPath 
      ? pageSidebarContent[matchingPath]
      : pageSidebarContent["/"];  // Default to home if no match found
  };

  const currentContent = getCurrentPageContent();

  return (
    <aside
      className={cn(
        "fixed top-[61px] left-0 z-[5] h-[calc(100vh-61px)] bg-sidebar border-r transition-all duration-300",
        "lg:translate-x-0",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      style={{ transition: "width 0.3s ease" }}
    >
      <div className="flex flex-col h-full p-2 space-y-1 overflow-y-auto">
        {/* Section Title */}
        <div className={`px-4 py-3 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
          <h2 className="font-semibold text-lg">{currentContent.title}</h2>
        </div>

        {/* Page-specific links */}
        {currentContent.links.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={cn(
              "flex items-center p-2 rounded-md transition-all duration-200",
              "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <div className="min-w-[24px] flex justify-center">
              {item.icon}
            </div>
            <span
              className={`text-sm font-medium whitespace-nowrap transition-all duration-200 ${isExpanded ? "opacity-100 ml-2" : "opacity-0 ml-0 w-0 overflow-hidden"
                }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
