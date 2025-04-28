
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Briefcase, 
  Award, 
  User, 
  Mail, 
  X 
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
  const { isOpen, closeSidebar } = useContext(SidebarContext);

  return (
    <aside
      className={cn(
        "fixed top-[61px] left-0 z-[5] h-[calc(100vh-61px)] w-64 bg-sidebar border-r transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
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
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  closeSidebar();
                }
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
