import { useState, ChangeEvent } from "react";
import { LeptopTypes } from "../../../../types/Form.types";

type UseFormValue = [
  LeptopTypes,
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  (file: File) => void
];

export const useLaptopForm = (initialValue: LeptopTypes): UseFormValue => {
  const [laptopForm, setLaptopForm] = useState<LeptopTypes>(initialValue);

  const fileUploadHandler = (file: File) => {
    setLaptopForm(prev => ({
      ...prev,
      laptop_image: file
    }))
  }

  const laptopHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;

    setLaptopForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    const strigifyObject: string = JSON.stringify({
      ...laptopForm,
      [name]: value,
    });
    
    localStorage.setItem("@laptop-info", strigifyObject)
  };


  return [laptopForm, laptopHandler, fileUploadHandler];
};
