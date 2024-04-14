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
      let retries = 0;
      while (retries < 3) {
        try {
          const result = await requestFunction();
          setData(result);
          break;
        } catch (error) {
          setError(error);
          retries++;
          if (retries < 3) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, keys);

  return { data, isLoading, error };
}
