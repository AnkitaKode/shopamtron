import { useState, useEffect } from "react";
import api from "../services/api";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // For products endpoint, always show demo data in production
    // since backend might not be deployed yet
    if (endpoint === "/products") {
      setLoading(false);
      setData(null); // This will trigger the fallback to demo products
      return;
    }

    api.get(endpoint)
      .then(res => setData(res.data))
      .catch(err => {
        setError(err);
        // For products endpoint, set data to null to trigger demo fallback
        if (endpoint === "/products") {
          setData(null);
        }
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
};
