import { FormTypes } from "../hook-types/useForm.types";

export const useLocalStorage = (): FormTypes => {
  let stored_value = localStorage.getItem("@employee-info");

  if (stored_value === null)
    return {
      name: "",
      lastname: "",
      team: "",
      position: "",
      email: "",
      phone: "",
    };

  return JSON.parse(stored_value!);
};
