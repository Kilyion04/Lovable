
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { 
  Home, 
  Briefcase, 
  Award, 
  User, 
  Mail
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
    href: "#home",
    icon: <Home size={24} />,
  },
  {
    label: "Projets",
    href: "#projects",
    icon: <Briefcase size={24} />,
  },
  {
    label: "Compétences",
    href: "#skills",
    icon: <Award size={24} />,
  },
  {
    label: "À propos",
    href: "#about",
    icon: <User size={24} />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <Mail size={24} />,
  },
];

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext);

  return (
    <aside
      className={cn(
        "fixed top-[61px] left-0 z-[5] h-[calc(100vh-61px)] bg-sidebar border-r transition-all duration-300",
        "lg:translate-x-0",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full p-2 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center p-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300"
          >
            <div className="min-w-[24px] flex justify-center">
              {item.icon}
            </div>
            <span
              className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                isExpanded ? "opacity-100 ml-2" : "opacity-0 ml-0 w-0 overflow-hidden"
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
};
