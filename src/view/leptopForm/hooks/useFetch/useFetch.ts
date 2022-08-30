import { useEffect, useState } from "react";
import axios from "axios";
import { DataType, apis, initialData } from "./useFetch.types";

export const useFetch = (): [DataType] => {
  const [data, setData] = useState<DataType>(initialData);

  const fetchData = async () => {
    const response = await axios.all(apis.map((api) => axios.get(api)));
    setData({
      brands: await response[0].data.data,
      cpus: await response[1].data.data,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
};
