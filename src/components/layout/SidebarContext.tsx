
import { createContext, useState, useEffect } from "react";

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
  // Initialize with collapsed state
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  // Add sticky behavior - this will ensure the sidebar state persists during scrolling
  useEffect(() => {
    // Optional: save sidebar state to localStorage
    // localStorage.setItem('sidebar-expanded', String(isExpanded));
    
    // Optional: You could also listen for scroll events here if needed
    // const handleScroll = () => {
    //   // Logic for handling scroll behavior
    // };
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

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
