import { useCallback } from "react";
import { useAuth } from "./useAuth";

export function useApiRequest() {
  const { logout } = useAuth();

  const execute = useCallback(
    async (request) => {
      try {
        return await request();
      } catch (error) {
        if (error.response?.status === 401) {
          logout();
        }

        throw error;
      }
    },
    [logout]
  );

  return execute;
}
