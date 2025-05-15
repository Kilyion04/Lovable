
import { createContext, useState } from "react";

type SidebarContextType = {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isExpanded: false,
  setIsExpanded: () => {},
  toggleSidebar: () => {},
});

export const SidebarProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ 
      isExpanded, 
      setIsExpanded,
      toggleSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
