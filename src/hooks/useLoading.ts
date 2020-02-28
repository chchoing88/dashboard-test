import { useState, useRef, useEffect } from "react";

const LOADING_THRESHOLD = 500;

function useLoading(isLoading: boolean) {
  const [startLoading, setStartLoading] = useState(false);
  const timeOutId = useRef<number | null>(null);

  useEffect(() => {
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
      timeOutId.current = null;
    }

    if (isLoading) {
      timeOutId.current = setTimeout(() => {
        setStartLoading(true);
      }, LOADING_THRESHOLD);
    } else {
      setStartLoading(false);
    }

    return () => {
      if (timeOutId.current) {
        clearTimeout(timeOutId.current);
      }
    };
  }, [isLoading]);

  return startLoading;
}

export default useLoading;
