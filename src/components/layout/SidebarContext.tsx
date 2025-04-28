
import { createContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export const SidebarProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
