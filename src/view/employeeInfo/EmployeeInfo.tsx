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

export const EmployeeInfo = () => {
  const [formRoute, setFormRoute] = useState("employee-route");

  return (
    <SEmployee>
      <SEmployeeHeader>
        <SEmployeeHeaderBackBtn to="/">
          <SEmployeeBackArrow />
        </SEmployeeHeaderBackBtn>
        <SEmployeeHeaderButtonEmloyee
          onClick={() => setFormRoute("employee-route")}
          className={formRoute === "employee-route" ? "active-form" : ""}
        >
          თანამშრომლის ინფო
        </SEmployeeHeaderButtonEmloyee>
        <SEmployeeHeaderButtonLeptop
          onClick={() => setFormRoute("leptop-route")}
          className={formRoute === "leptop-route" ? "active-form" : ""}
        >
          ლეპტოპის მახასიათებლები
        </SEmployeeHeaderButtonLeptop>
      </SEmployeeHeader>
      {formRoute === "employee-route" && <EmployeeForm />}
      {formRoute === "leptop-route" && <LeptopForm />}
    </SEmployee>
  );
};
