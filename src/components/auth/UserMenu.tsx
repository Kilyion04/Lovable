
import { useState } from "react";
import { User, LogOut, Settings, UserPlus, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

export function UserMenu() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate("/users");
    } else {
      setLoginOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const switchToRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const switchToLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative" 
            aria-label="User profile"
            onClick={isAuthenticated ? undefined : handleUserClick}
          >
            {isAuthenticated && user ? (
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar} alt={user?.name || "U"} />
                <AvatarFallback>{(user?.name?.substring(0, 2) || "U").toUpperCase()}</AvatarFallback>
              </Avatar>
            ) : (
              <User className="h-5 w-5" />
            )}
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="end" className="w-56">
          {isAuthenticated && user ? (
            <>
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/users")}>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/users_settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Paramètres</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setLoginOpen(true)}>
                <LogIn className="mr-2 h-4 w-4" />
                <span>Se connecter</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRegisterOpen(true)}>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Créer un compte</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)}
        onSwitchToRegister={switchToRegister} 
      />
      
      <RegisterModal 
        isOpen={registerOpen} 
        onClose={() => setRegisterOpen(false)} 
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
}
