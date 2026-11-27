import { useState, useCallback } from "react";

export function useApiRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (requestFn) => {
    setLoading(true);
    setError(null);

    try {
      return await requestFn();
    } catch (error) {
      if (error.name !== "CanceledError") {
        setError(error);
      }

      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    execute,
    loading,
    error
  };
}
