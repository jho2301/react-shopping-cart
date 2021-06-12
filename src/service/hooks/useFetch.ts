import { HTTPError, FetchError } from './../../utils/error';
import { useEffect, useState } from 'react';

const useFetch = <T>(callback: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<FetchError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const value = await callback();

      setData(value);
    } catch (newError) {
      setError(newError);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useFetch;
