
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Briefcase, 
  Award, 
  User, 
  Mail, 
  X,
  ChevronLeft,
  ChevronRight
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
    icon: <Home className="w-5 h-5" />,
  },
  {
    label: "Projets",
    href: "#projects",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    label: "Compétences",
    href: "#skills",
    icon: <Award className="w-5 h-5" />,
  },
  {
    label: "À propos",
    href: "#about",
    icon: <User className="w-5 h-5" />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <Mail className="w-5 h-5" />,
  },
];

export const Sidebar = () => {
  const { isOpen, isCollapsed, closeSidebar, toggleCollapsed } = useContext(SidebarContext);

  return (
    <aside
      className={cn(
        "fixed top-[61px] left-0 z-[5] h-[calc(100vh-61px)] bg-sidebar border-r transition-all duration-500 ease-in-out lg:translate-x-0 group",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isCollapsed ? "w-16" : "w-64"
      )}
      onMouseEnter={() => !isOpen && toggleCollapsed()}
      onMouseLeave={() => isCollapsed || toggleCollapsed()}
    >
      <div className="flex flex-col h-full relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute -right-3 top-3 w-6 h-6 rounded-full border shadow-sm bg-background hidden lg:flex items-center justify-center"
          onClick={toggleCollapsed}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
        
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <Button variant="ghost" size="icon" onClick={closeSidebar}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex flex-col p-2 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                isCollapsed ? "justify-center" : ""
              )}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  closeSidebar();
                }
              }}
            >
              <div className="flex-shrink-0 w-5 h-5">
                {item.icon}
              </div>
              <span className={cn(
                "transition-all duration-500 whitespace-nowrap", 
                isCollapsed ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
              )}>
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
