import React, { useState } from "react";
import {
  allowedCharacter,
  allowedPhoneChars,
} from "../../constant/validAlphabet";
import { FormTypes } from "../../types/Form.types";

type UseFormValue = [
  FormTypes,
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
];

export const useForm = (initialValue: FormTypes): UseFormValue => {
  const [values, setValues] = useState(initialValue);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;

    if (
      !allowedCharacter.includes(value.at(-1)) &&
      name !== "email" &&
      name !== "phone_number" && 
      name !== "team"
      )
      return;
      if (name === "phone_number" && !allowedPhoneChars.includes(value.at(-1))) return;
      
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
      
      const strigifyObject: string = JSON.stringify({
        ...values,
        [e.target.name]: e.target.value,
      });
      localStorage.setItem("@employee-info", strigifyObject);
  };

  return [values, inputHandler];
};
