import { useEffect, useState } from 'react';

export function useRequest<T>(
  requestFunction: () => Promise<T>,
  keys: unknown[],
) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await requestFunction();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, keys);

  return { data, isLoading, error };
}
