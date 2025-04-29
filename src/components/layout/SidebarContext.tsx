
import { createContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  isCollapsed: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  toggleCollapsed: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  isCollapsed: true,
  toggleSidebar: () => {},
  closeSidebar: () => {},
  toggleCollapsed: () => {},
});

export const SidebarProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  
  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ 
      isOpen, 
      isCollapsed, 
      toggleSidebar, 
      closeSidebar, 
      toggleCollapsed 
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
