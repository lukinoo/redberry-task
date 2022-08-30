export const apis = [
  "https://pcfy.redberryinternship.ge/api/brands",
  "https://pcfy.redberryinternship.ge/api/cpus",
];

export type DataType = {
  brands: {
    id: string;
    name: string;
  }[];
  cpus: {
    id: string;
    name: string;
  }[];
};

export const initialData: DataType = {
  brands: [],
  cpus: [],
};
