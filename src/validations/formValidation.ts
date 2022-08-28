import Joi from "joi"

export const createUser = Joi.object({
  name: Joi.string().required().min(2),
  lastname: Joi.string().required().min(2),
  team: Joi.string().required(),
  position: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).pattern(new RegExp("@redberry.ge$")),
  phone: Joi.string().length(9).pattern(/^[0-9]+$/).required(),
})