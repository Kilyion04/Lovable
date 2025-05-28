
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
    <div className="flex flex-col min-h-screen transition-all duration-300 ease-out">
      <Navbar />
      <div className="flex flex-1 pt-[94px]">
        <Sidebar />
        <main className={`flex-1 w-full transition-all duration-300 ease-out ${isExpanded ? 'lg:ml-64' : 'lg:ml-16'}`}>
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
          <Footer />
        </main>
      </div>
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
