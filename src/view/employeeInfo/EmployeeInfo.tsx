import { useState } from "react";
import { EmployeeForm } from "../employeeForm";
import { LeptopForm } from "../leptopForm";
import {
  SEmployee,
  SEmployeeHeader,
  SEmployeeHeaderBackBtn,
  SEmployeeBackArrow,
  SEmployeeHeaderButtonEmloyee,
  SEmployeeHeaderButtonLeptop,
} from "./EmployeeInfo.styled";

import { getBinaryFromFile } from "../../utils/getBinaryFromFile";

import axios from "axios";

import { SendRequestType } from "../../types/Form.types";
import { initalGlobalForm } from "./EmployeeInfo.init";

export enum EmployeeInfoRouteEnum {
  EMPLOYEE_ROUTE = "EMPLOYEE_ROUTE",
  LAPTOP_ROUTE = "LAPTOP_ROUTE",
}
export const EmployeeInfo = () => {
  const [formRoute, setFormRoute] = useState<EmployeeInfoRouteEnum>(
    EmployeeInfoRouteEnum.EMPLOYEE_ROUTE
  );
  const [globalForm, setGlobalForm] =
    useState<SendRequestType>(initalGlobalForm);

  const addLaptop = async () => {
    axios
      .post("https://pcfy.redberryinternship.ge/api/laptop/create", {...globalForm, laptop_image: getBinaryFromFile(globalForm.laptop_image)})
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SEmployee>
      <SEmployeeHeader>
        <SEmployeeHeaderBackBtn to="/">
          <SEmployeeBackArrow />
        </SEmployeeHeaderBackBtn>
        <SEmployeeHeaderButtonEmloyee
          className={
            formRoute === EmployeeInfoRouteEnum.EMPLOYEE_ROUTE
              ? "active-form"
              : ""
          }
        >
          თანამშრომლის ინფო
        </SEmployeeHeaderButtonEmloyee>
        <SEmployeeHeaderButtonLeptop
          className={
            formRoute === EmployeeInfoRouteEnum.LAPTOP_ROUTE
              ? "active-form"
              : ""
          }
        >
          ლეპტოპის მახასიათებლები
        </SEmployeeHeaderButtonLeptop>
      </SEmployeeHeader>
      {formRoute === EmployeeInfoRouteEnum.EMPLOYEE_ROUTE && (
        <EmployeeForm
          handleChangeRoute={() =>
            setFormRoute(EmployeeInfoRouteEnum.LAPTOP_ROUTE)
          }
          insertEmployeeInfo={(employeeInfo) => {
            setGlobalForm((prev) => ({
              ...prev,
              ...employeeInfo,
            }));
          }}
        />
      )}
      {formRoute === EmployeeInfoRouteEnum.LAPTOP_ROUTE && (
        <LeptopForm
          setFormRoute={setFormRoute}
          setupRequest={(form) => {
            setGlobalForm((prev) => ({
              ...prev,
              ...form,
            }));

            addLaptop();
          }}
        />
      )}
    </SEmployee>
  );
};
