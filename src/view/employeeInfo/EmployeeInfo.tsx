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
            setGlobalForm((prev) => {
              return {
                ...prev,
                ...employeeInfo,
              };
            });
          }}
        />
      )}
      {formRoute === EmployeeInfoRouteEnum.LAPTOP_ROUTE && (
        <LeptopForm setFormRoute={setFormRoute} />
      )}
    </SEmployee>
  );
};
