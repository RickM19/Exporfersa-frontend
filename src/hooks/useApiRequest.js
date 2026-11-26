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
      setError(error);
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
