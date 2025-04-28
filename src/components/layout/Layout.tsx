
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ThemeProvider } from "../theme/ThemeProvider";
import { SidebarProvider } from "./SidebarContext";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 w-full transition-all duration-300 lg:ml-64">
              <div className="container mx-auto px-4 py-8">
                {children}
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};
