import { useCallback, useEffect, useReducer } from "react";

import { authService } from "../services/authService";
import { tokenStorage } from "../services/tokenStorage";
import { AuthContext } from "./AuthContext";

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

  const logout = useCallback(() => {
    tokenStorage.remove();
    dispatch({ type: "UNAUTHENTICATED" });
  }, []);

  const login = useCallback(async (credentials) => {
    const data = await authService.login(credentials);

    tokenStorage.set(data.accessToken);

    try {
      const user = await authService.getCurrentUser();

      dispatch({
        type: "AUTHENTICATED",
        payload: user
      });

      return user;
    } catch (error) {
      if (error.response?.status === 401) {
        tokenStorage.remove();
        dispatch({ type: "UNAUTHENTICATED" });
      } else {
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

      if (error.response?.status === 401) {
        tokenStorage.remove();
        dispatch({ type: "UNAUTHENTICATED" });
        return;
      }

      dispatch({ type: "ERROR" });
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
