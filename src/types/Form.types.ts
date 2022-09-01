export interface FormTypes {
  name: string;
  surname: string;
  team: string;
  position: string;
  email: string;
  phone_number: string;
}

export interface LeptopTypes {
  laptop_name: string
  laptop_image: File 
  laptop_brand_id: number
  laptop_cpu: string
  laptop_cpu_cores: number
  laptop_cpu_threads: number
  laptop_ram: number
  laptop_hard_drive_type: "SSD" | "HDD" | "",
  laptop_state: string
  laptop_purchase_date: string
  laptop_price: number
}


export interface SendRequestType extends LeptopTypes {
  token: string,
  name: string;
  surname: string;
  team_id: number;
  position_id: number;
  email: string;
  phone_number: string;
}