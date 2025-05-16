
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Minecraft from "./pages/Minecraft";
import Prono from "./pages/Prono";
import Users from "./pages/User"
import UserSettings from "./pages/User_settings";
import DataManagement from "./pages/Data";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/minecraft" element={<Minecraft />} />
          <Route path="/prono" element={<Prono />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users_settings" element={<UserSettings />} />
          <Route path="/data" element={<DataManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
