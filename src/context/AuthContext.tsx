
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

  // Fonction de connexion - Vérifie si les informations existent dans localStorage
  const login = async (email: string, password: string): Promise<boolean> => {
    // Vérifier si l'email existe dans localStorage
    const userList = getUsersFromLocalStorage();
    const userExists = userList.find(u => u.email === email);
    
    if (userExists) {
      // Simulons une vérification de mot de passe (dans une application réelle, vous auriez 
      // un vrai système de hachage et de vérification de mot de passe)
      // Pour cette démo, nous acceptons simplement l'utilisateur s'il existe
      
      // Mettre à jour l'état
      localStorage.setItem('user', JSON.stringify(userExists));
      setUser(userExists);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Récupère la liste des utilisateurs du localStorage ou retourne un tableau vide
  const getUsersFromLocalStorage = (): User[] => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      try {
        return JSON.parse(storedUsers);
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs:', error);
        return [];
      }
    }
    return [];
  };

  // Fonction d'inscription
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    if (name && email && password) {
      // Vérifier si l'utilisateur existe déjà
      const userList = getUsersFromLocalStorage();
      if (userList.some(u => u.email === email)) {
        return false; // L'utilisateur existe déjà
      }

      // Créer un nouvel utilisateur
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
      };
      
      // Ajouter l'utilisateur à la liste des utilisateurs
      userList.push(newUser);
      localStorage.setItem('users', JSON.stringify(userList));
      
      // Connecter l'utilisateur
      localStorage.setItem('user', JSON.stringify(newUser));
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
