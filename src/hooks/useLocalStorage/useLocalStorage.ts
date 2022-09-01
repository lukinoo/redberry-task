import { FormTypes } from "../../types/Form.types";

export const useLocalStorage = (): [FormTypes, any] => {
  const stored_value_employee = localStorage.getItem("@employee-info");
  const stored_value_laptop = localStorage.getItem("@laptop-info");

  let parsedEmployee = JSON.parse(stored_value_employee as string);
  let parsedLeptop = JSON.parse(stored_value_laptop as string);

  if (stored_value_employee === null) {
    parsedEmployee = {
      name: "",
      surname: "",
      team: "",
      position: "",
      email: "",
      phone_number: "",
    };
    localStorage.setItem("@employee-info", JSON.stringify(parsedEmployee));
  }

  if (stored_value_laptop === null) {
    parsedLeptop = {
      laptop_name: "",
      laptop_image: new File([""], "file-name"),
      laptop_brand_id: 0,
      laptop_cpu: "",
      laptop_cpu_cores: 0,
      laptop_cpu_threads: 0,
      laptop_ram: 0,
      laptop_hard_drive_type: "",
      laptop_state: "",
      laptop_purchase_date: "",
      laptop_price: 0,
    };
    localStorage.setItem("@laptop-info", JSON.stringify(parsedLeptop));
  }

  return [parsedEmployee, parsedLeptop];
};
