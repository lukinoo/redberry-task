import Joi from "joi"

export const formValidate = Joi.object({
  name: Joi.string().required().min(2),
  surname: Joi.string().required().min(2),
  team: Joi.string().required(),
  position: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).pattern(new RegExp("@redberry.ge$")),
  phone_number: Joi.string().length(9).pattern(/^[0-9]+$/).required(),
})