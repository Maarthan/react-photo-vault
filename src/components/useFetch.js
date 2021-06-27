import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortContoller = new AbortController();

    fetch(url, { signal: abortContoller.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Error occured while fetching, please try again");
        }
        return response.json();
      })
      .then((data) => {
        setIsPending(false);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
        } else {
          setIsPending(false);
          setError(error.message);
          setData(null);
        }
      });

    return () => abortContoller.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
