
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Définition du type User
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Interface pour le contexte d'authentification
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Création du contexte avec une valeur par défaut
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  register: async () => false,
  logout: () => {},
});

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => useContext(AuthContext);

// Props pour le provider
interface AuthProviderProps {
  children: ReactNode;
}

// Provider du contexte d'authentification
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Chargement de l'utilisateur depuis le localStorage au démarrage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Erreur lors du chargement des données utilisateur:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Fonction de connexion
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulation d'une vérification simple (à remplacer par une API réelle)
    if (email && password) {
      // Créer un utilisateur fictif pour la démonstration
      const newUser: User = {
        id: Date.now().toString(),
        name: email.split('@')[0],
        email,
      };
      
      // Enregistrer dans localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      
      // Mettre à jour l'état
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Fonction d'inscription
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulation d'une inscription (à remplacer par une API réelle)
    if (name && email && password) {
      // Créer un nouvel utilisateur
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
      };
      
      // Enregistrer dans localStorage
      localStorage.setItem('user', JSON.stringify(newUser));
      
      // Mettre à jour l'état
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Valeur du contexte
  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

