import { useState, useEffect } from 'react';
import api from '../services/api';

const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(url, options);
        setData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred');
      } finally { setLoading(false); }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
export default useApi;
