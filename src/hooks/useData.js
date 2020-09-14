import { useState, useEffect, useCallback } from "react";

const useData = (ip, setLoading) => {
  const [data, setData] = useState();
  const KEY = process.env.REACT_APP_KEY;
  const URL = `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${ip}`;

  const fetchData = useCallback(
    (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        });
    },
    [setLoading],
  );

  useEffect(() => {
    if (!ip) return;
    fetchData(URL);
  }, [URL, ip, fetchData]);
  return data;
};

export default useData;
