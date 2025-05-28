import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { useLocation } from "react-router-dom";
import {
  Briefcase,
  Award,
  User,
  Mail,
  Home,
  Star,
  GraduationCap,
  Code,
  Database,
  Globe,
  MapPin,
  Phone,
  Github,
  Gamepad,
  Server,
  Book
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

// Home page sections
const homeNavItems: NavItem[] = [
  {
    label: "Projets",
    href: "/#projects",
    icon: <Briefcase size={24} />,
  },
  {
    label: "Compétences",
    href: "/#skills",
    icon: <Award size={24} />,
  },
  {
    label: "À propos",
    href: "/#about",
    icon: <User size={24} />,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: <Mail size={24} />,
  }
];

// Projects page sections
const projectsNavItems: NavItem[] = [
  {
    label: "Introduction",
    href: "/projects#introduction",
    icon: <Home size={24} />,
  },
  {
    label: "Projets Vedettes",
    href: "/projects#featured",
    icon: <Star size={24} />,
  },
  {
    label: "Tous les Projets",
    href: "/projects#all-projects",
    icon: <Briefcase size={24} />,
  }
];

// Skills page sections
const skillsNavItems: NavItem[] = [
  {
    label: "Aperçu",
    href: "/skills#overview",
    icon: <Home size={24} />,
  },
  {
    label: "Niveaux de Compétences",
    href: "/skills#skill-levels",
    icon: <Award size={24} />,
  },
  {
    label: "Technologies",
    href: "/skills#technologies",
    icon: <Code size={24} />,
  }
];

// About page sections
const aboutNavItems: NavItem[] = [
  {
    label: "Profil",
    href: "/about#profile",
    icon: <User size={24} />,
  },
  {
    label: "Biographie",
    href: "/about#biography",
    icon: <Star size={24} />,
  },
  {
    label: "Expérience",
    href: "/about#experience",
    icon: <Briefcase size={24} />,
  },
  {
    label: "Formation",
    href: "/about#education",
    icon: <GraduationCap size={24} />,
  }
];

// Contact page sections
const contactNavItems: NavItem[] = [
  {
    label: "Introduction",
    href: "/contact#contact-hero",
    icon: <Home size={24} />,
  },
  {
    label: "Informations",
    href: "/contact#contact-info",
    icon: <Phone size={24} />,
  },
  {
    label: "Formulaire",
    href: "/contact#contact-form",
    icon: <Mail size={24} />,
  },
  {
    label: "Localisation",
    href: "/contact#map",
    icon: <MapPin size={24} />,
  }
];

// Minecraft page sections
const minecraftNavItems: NavItem[] = [
  {
    label: "Introduction",
    href: "/minecraft#introduction",
    icon: <Home size={24} />,
  },
  {
    label: "Serveurs",
    href: "/minecraft#servers",
    icon: <Server size={24} />,
  },
  {
    label: "Demande d'accès",
    href: "/minecraft#access-request",
    icon: <User size={24} />,
  },
  {
    label: "Règles",
    href: "/minecraft#rules",
    icon: <Book size={24} />,
  }
];

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext);
  const location = useLocation();

  // Determine which navigation items to show based on the current route
  const getNavItems = (): NavItem[] => {
    const pathname = location.pathname;
    
    if (pathname.startsWith('/projects')) {
      return projectsNavItems;
    } else if (pathname.startsWith('/skills')) {
      return skillsNavItems;
    } else if (pathname.startsWith('/about')) {
      return aboutNavItems;
    } else if (pathname.startsWith('/contact')) {
      return contactNavItems;
    } else if (pathname.startsWith('/minecraft')) {
      return minecraftNavItems;
    } else {
      // Default to home page nav items
      return homeNavItems;
    }
  };

  const navItems = getNavItems();
  const currentPath = location.pathname;

  // Function to handle navigation to anchor links
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const [basePath, hash] = path.split('#');
    
    // If we're already on the page with the correct path, just scroll to the section
    if (currentPath === basePath || (currentPath === '/' && basePath === '/' || basePath === '')) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate to the new page
      window.location.href = path;
    }
  };

  return (
    <aside
      className={cn(
        "fixed top-[94px] left-0 z-[5] h-[calc(100vh-94px)] bg-sidebar border-r transition-all duration-300 ease-out",
        "lg:translate-x-0",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full p-2 space-y-1 overflow-y-auto">
        {/* Add top spacing */}
        <div className="h-4"></div>
        
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavigation(e, item.href)}
            className="flex items-center p-2 rounded-md
