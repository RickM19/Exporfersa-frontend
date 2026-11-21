import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { mockUsers } from "../mocks/users";

const STORAGE_KEY = "exporfersa:user";

const getInitialUser = () => {
  try {
    const userId = localStorage.getItem(STORAGE_KEY);

    if (!userId) return null;

    const foundUser = mockUsers.find((user) => user.id === userId);

    if (!foundUser) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    const { password, ...authenticatedUser } = foundUser;

    return authenticatedUser;
  } catch {
    return null;
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser);

  const login = (email, password) => {
    const foundUser = mockUsers.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "E-mail ou senha inválidos."
      };
    }

    try {
      localStorage.setItem(STORAGE_KEY, foundUser.id);
    } catch {
      return {
        success: false,
        message: "Não foi possível iniciar a sessão."
      };
    }

    const { password: _, ...authenticatedUser } = foundUser;

    setUser(authenticatedUser);

    return { success: true };
  };

  const logout = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setUser(null);
    }
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
