
import { ReactNode, useContext } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ThemeProvider } from "../theme/ThemeProvider";
import { SidebarContext, SidebarProvider } from "./SidebarContext";

type LayoutContentProps = {
  children: ReactNode;
};

const LayoutContent = ({ children }: LayoutContentProps) => {
  const { isExpanded } = useContext(SidebarContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 pt-[98px]">
        <Sidebar />
        <main 
          className={`flex-1 w-full transition-all duration-500 ease-in-out ${
            isExpanded ? 'lg:ml-64' : 'lg:ml-16'
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export const Layout = ({ children }: LayoutContentProps) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <LayoutContent>{children}</LayoutContent>
      </SidebarProvider>
    </ThemeProvider>
  );
};
