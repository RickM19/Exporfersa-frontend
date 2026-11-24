import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { mockUsers } from "../mocks/users";

const STORAGE_KEY = "exporfersa:user";
// Usuários criados pela tela de cadastro (apenas enquanto a auth é mockada)
const REGISTERED_USERS_KEY = "exporfersa:registered-users";

const getRegisteredUsers = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(REGISTERED_USERS_KEY));

    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
};

const getAllUsers = () => [...mockUsers, ...getRegisteredUsers()];

const getInitialUser = () => {
  try {
    const userId = localStorage.getItem(STORAGE_KEY);

    if (!userId) return null;

    const foundUser = getAllUsers().find((user) => user.id === userId);

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
    const foundUser = getAllUsers().find(
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

  const register = ({ username, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    const emailInUse = getAllUsers().some(
      (user) => user.email.toLowerCase() === normalizedEmail
    );

    if (emailInUse) {
      return {
        success: false,
        message: "Já existe uma conta com este e-mail."
      };
    }

    const newUser = {
      id: crypto.randomUUID(),
      email: normalizedEmail,
      username: username.trim(),
      password,
      role: "USER"
    };

    try {
      localStorage.setItem(
        REGISTERED_USERS_KEY,
        JSON.stringify([...getRegisteredUsers(), newUser])
      );
      localStorage.setItem(STORAGE_KEY, newUser.id);
    } catch {
      return {
        success: false,
        message: "Não foi possível concluir o cadastro."
      };
    }

    const { password: _, ...authenticatedUser } = newUser;

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
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
