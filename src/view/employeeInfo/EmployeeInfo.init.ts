import { SendRequestType } from "../../types/Form.types";

export const initalGlobalForm: SendRequestType = {
  email: "",
  laptop_brand_id: 0,
  laptop_cpu: "",
  laptop_cpu_cores: 0,
  laptop_cpu_threads: 0,
  laptop_hard_drive_type: "",
  laptop_image: new File([""], "filename.txt", { type: "text/plain" }),
  laptop_name: "",
  laptop_price: 0,
  laptop_purchase_date: "",
  laptop_ram: 0,
  laptop_state: "",
  surname: "",
  name: "",
  phone_number: "",
  team_id: 0,
  position_id: 0,
  token: process.env.REACT_APP_TOKEN as string,
};
