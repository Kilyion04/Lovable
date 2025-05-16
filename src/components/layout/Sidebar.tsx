
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
  Code,
  FileText,
  Info,
  Contact
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home size={24} />,
  },
  {
    label: "Projets",
    href: "/project",
    icon: <FileText size={24} />,
  },
  {
    label: "Compétences",
    href: "/skills",
    icon: <Code size={24} />,
  },
  {
    label: "À propos",
    href: "/about",
    icon: <Info size={24} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Contact size={24} />,
  },
  {
    label: "Minecraft",
    href: "/minecraft",
    icon: <Gamepad size={24} />,
  }
];

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext);
  const location = useLocation();

  // Function to handle navigation
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

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
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={cn(
              "flex items-center p-2 rounded-md transition-all duration-200",
              isActive(item.href)
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
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
