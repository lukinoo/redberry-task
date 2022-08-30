import {FormTypes} from "../../../../types/Form.types"
import {formValidate} from "../../../../validations/formValidation"

export const useValidation = <T extends FormTypes>(initialValue: T) => {
  const isFormValid = formValidate.validate({...initialValue});

  return [isFormValid]
}