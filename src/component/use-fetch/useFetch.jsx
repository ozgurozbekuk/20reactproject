import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(error);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {data, error, pending};
}
