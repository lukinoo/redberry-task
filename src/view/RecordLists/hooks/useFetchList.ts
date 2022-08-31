import { useState, useEffect } from "react";
import { RecordListTypes } from "../../../types/RecordList.types";
import axios from "axios";

export const useFetchList = async () => {
  const [data, setData] = useState<RecordListTypes[]>([]);

  const fetchLaptopList = async () => {
    const response = await axios.get(
      `https://pcfy.redberryinternship.ge/api/laptops?token=5f55aaeb6fb1997cca7f5197173d3737`
    );
    const responseData = await response.data;
    setData(responseData);
  };

  useEffect(() => {
    fetchLaptopList();
  }, []);

  return [data];
};
