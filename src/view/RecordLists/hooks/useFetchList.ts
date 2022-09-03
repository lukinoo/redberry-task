import { useState, useEffect } from "react";
import { RecordListTypes } from "../../../types/RecordList.types";
import axios from "axios";

export const useFetchList = async () => {
  const [data, setData] = useState<RecordListTypes[]>([]);

  const fetchLaptopList = async () => {
    const response = await axios.get(
      `https://pcfy.redberryinternship.ge/api/laptops?token=${process.env.TOKEN}`
    );
    const responseData = await response.data;
    setData(responseData);
  };

  console.log(data);
  useEffect(() => {
    fetchLaptopList();
  }, []);

  return [data];
};
