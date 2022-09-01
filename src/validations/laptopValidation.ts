import Joi from "joi"

export const laptopValidate = Joi.object({
  laptop_image: Joi.any(),
  laptop_name: Joi.string().required(),
  laptop_brand_id: Joi.string().required(),
  laptop_cpu: Joi.string().required(),
  laptop_cpu_cores: Joi.number().min(1).required(),
  laptop_cpu_threads: Joi.number().min(1).required(),
  laptop_ram: Joi.number().min(1).required(),
  laptop_purchase_date: Joi.string().optional(),
  laptop_hard_drive_type: Joi.string().required(),
  laptop_price: Joi.number().min(1).required(),
  laptop_state: Joi.string().required(),
})