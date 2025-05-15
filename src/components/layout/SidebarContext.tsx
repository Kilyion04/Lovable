
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  
  // Reset sidebar state when route changes
  useEffect(() => {
    // After a slight delay to allow for smooth navigation
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
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
