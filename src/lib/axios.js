import axios from "axios";
import { tokenStorage } from "../services/tokenStorage";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

let unauthorizedHandler = null;

export const setUnauthorizedHandler = (handler) => {
  unauthorizedHandler = handler;
};

api.interceptors.request.use((config) => {
  const token = tokenStorage.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;
    const config = error.config;

    const authorization =
      config?.headers?.Authorization ?? config?.headers?.get?.("Authorization");

    const sentToken = authorization?.replace(/^Bearer\s+/i, "");
    const currentToken = tokenStorage.get();

    const isLoginRequest = config?.url?.includes("/user/login");

    const isCurrentSession = sentToken && sentToken === currentToken;

    if (status === 401 && isCurrentSession && !isLoginRequest) {
      unauthorizedHandler?.();
    }

    return Promise.reject(error);
  }
);
