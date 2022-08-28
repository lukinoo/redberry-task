import { useEffect, useState } from "react";
import type { Options } from "./useFetch.types";

export const useFetch = (url: string) => {
  const [result, setResult] = useState<Options>([]);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setResult(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [result];
};
