import Joi from "joi"

export const laptopValidate = Joi.object({
  laptop_name: Joi.string().required(),
  laptop_image: Joi.string().required(),
  laptop_brand_id: Joi.number().required(),
  laptop_cpu: Joi.string().required(),
  laptop_cpu_cores: Joi.number().required(),
  laptop_cpu_threads: Joi.number().required(),
  laptop_ram: Joi.number().required(),
  laptop_hard_drive_type: Joi.string().required(),
  laptop_stats: Joi.string().required(),
  laptop_purchase_date: Joi.string().required(),
  laptop_price: Joi.number().required()
})