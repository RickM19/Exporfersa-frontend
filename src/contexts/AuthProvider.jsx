import { useCallback, useEffect, useReducer, useRef } from "react";

import { authService } from "../services/authService";
import { tokenStorage } from "../services/tokenStorage";
import { AuthContext } from "./AuthContext";
import { setUnauthorizedHandler } from "../lib/axios";

const initialState = {
  user: null,
  status: "loading"
};

function authReducer(state, action) {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        user: action.payload,
        status: "authenticated"
      };

    case "UNAUTHENTICATED":
      return {
        user: null,
        status: "unauthenticated"
      };

    case "ERROR":
      return {
        ...state,
        status: "error"
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logoutRef = useRef(false);

  const logout = useCallback(() => {
    if (logoutRef.current) return;

    logoutRef.current = true;

    tokenStorage.remove();
    dispatch({ type: "UNAUTHENTICATED" });
  }, []);

  useEffect(() => {
    setUnauthorizedHandler(logout);

    return () => {
      setUnauthorizedHandler(null);
    };
  }, [logout]);

  const login = useCallback(async (credentials) => {
    const data = await authService.login(credentials);

    tokenStorage.set(data.accessToken);
    logoutRef.current = false;

    try {
      const user = await authService.getCurrentUser();

      dispatch({
        type: "AUTHENTICATED",
        payload: user
      });

      return user;
    } catch (error) {
      if (error.response?.status !== 401) {
        dispatch({ type: "ERROR" });
      }

      throw error;
    }
  }, []);

  const initializeAuth = useCallback(async (signal) => {
    const token = tokenStorage.get();

    if (!token) {
      dispatch({ type: "UNAUTHENTICATED" });
      return;
    }

    try {
      const user = await authService.getCurrentUser({
        signal
      });

      dispatch({
        type: "AUTHENTICATED",
        payload: user
      });
    } catch (error) {
      if (signal.aborted) return;

      if (error.response?.status !== 401) {
        dispatch({ type: "ERROR" });
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    initializeAuth(controller.signal);

    return () => controller.abort();
  }, [initializeAuth]);

  const value = {
    user: state.user,
    status: state.status,
    isAuthenticated: state.status === "authenticated",
    isLoading: state.status === "loading",
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
