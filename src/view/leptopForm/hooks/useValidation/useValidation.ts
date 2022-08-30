import {LeptopTypes} from "../../../../types/Form.types"
import {laptopValidate} from "../../../../validations/laptopValidation"

export const useValidation = <T extends LeptopTypes>(initialValue: T) => {
  const isFormValid = laptopValidate.validate({...initialValue});

  return [isFormValid]
}