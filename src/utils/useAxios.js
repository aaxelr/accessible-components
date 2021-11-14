import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts?_limit=4';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get()
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };

};

export default useAxios;
