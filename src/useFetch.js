import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [contacts, setContacts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for this resource. Sorry.");
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setContacts(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { contacts, isLoading, error };
};

export default useFetch;
