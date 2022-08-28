import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res);
    });
  }, [url]);

  return [data];
};
