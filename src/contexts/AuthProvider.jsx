import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { mockUsers } from "../mocks/users";

const STORAGE_KEY = "exporfersa:user";
// Usuários cadastrados ou editados no app (apenas enquanto a auth é mockada)
const USERS_KEY = "exporfersa:users";

const getStoredUsers = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(USERS_KEY));

    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
};

const getAllUsers = () => {
  const stored = getStoredUsers();
  const mocks = mockUsers.filter(
    (mock) => !stored.some((user) => user.id === mock.id)
  );

  return [...mocks, ...stored];
};

const saveUser = (user) => {
  const others = getStoredUsers().filter((stored) => stored.id !== user.id);

  localStorage.setItem(USERS_KEY, JSON.stringify([...others, user]));
};

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
      saveUser(newUser);
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

  const updateUser = ({ username, email }) => {
    const normalizedEmail = email.trim().toLowerCase();

    const emailInUse = getAllUsers().some(
      (other) =>
        other.id !== user.id && other.email.toLowerCase() === normalizedEmail
    );

    if (emailInUse) {
      return {
        success: false,
        message: "Já existe uma conta com este e-mail."
      };
    }

    const currentUser = getAllUsers().find((stored) => stored.id === user.id);

    const updatedUser = {
      ...currentUser,
      username: username.trim(),
      email: normalizedEmail
    };

    try {
      saveUser(updatedUser);
    } catch {
      return {
        success: false,
        message: "Não foi possível salvar as alterações."
      };
    }

    const { password: _, ...authenticatedUser } = updatedUser;

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
    updateUser,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
