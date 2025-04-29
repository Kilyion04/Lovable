
import { createContext, useState } from "react";

type SidebarContextType = {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isExpanded: false,
  setIsExpanded: () => {},
});

export const SidebarProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ 
      isExpanded, 
      setIsExpanded
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
