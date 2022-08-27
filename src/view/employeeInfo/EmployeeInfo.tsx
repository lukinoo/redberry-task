import { useState } from "react";
import { EmployeeForm } from "../employeeForm";
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
        >
          თანამშრომლის ინფო
        </SEmployeeHeaderButtonEmloyee>
        <SEmployeeHeaderButtonLeptop
          onClick={() => setFormRoute("leptop-route")}
        >
          ლეპტოპის მახასიათებლები
        </SEmployeeHeaderButtonLeptop>
      </SEmployeeHeader>
      {formRoute === "employee-route" && <EmployeeForm />}
      {formRoute === "leptop-route" && <h1>hello, {formRoute}</h1>}
    </SEmployee>
  );
};
