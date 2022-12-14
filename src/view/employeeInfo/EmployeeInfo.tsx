import { useState, useEffect } from "react";
import { EmployeeForm } from "../EmployeeForm";
import { LeptopForm } from "../LeptopForm";
import {
  SEmployee,
  SEmployeeHeader,
  SEmployeeHeaderBackBtn,
  SEmployeeBackArrow,
  SEmployeeHeaderButtonEmloyee,
  SEmployeeHeaderButtonLeptop,
  SEmployeeHeaderIndicator,
  SEmployeeHeaderMobileIndicator,
} from "./EmployeeInfo.styled";
import { useNavigate } from "react-router-dom";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const addLaptop = () => {
    setIsLoading(true);
    axios
      .post(
        "https://pcfy.redberryinternship.ge/api/laptop/create",
        globalForm,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((resp) => {
        setIsLoading(false);
        if (resp.data.message === "Information recorded") {
          navigate("/complete");
          localStorage.removeItem("@employee-info");
          localStorage.removeItem("@laptop-info");
        }
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [formRoute]);

  return (
    <SEmployee>
      <SEmployeeHeader>
        <SEmployeeHeaderBackBtn to="/">
          <SEmployeeBackArrow />
        </SEmployeeHeaderBackBtn>
        <SEmployeeHeaderMobileIndicator>
          {formRoute === EmployeeInfoRouteEnum.EMPLOYEE_ROUTE
            ? "???????????????????????????????????? ????????????"
            : "???????????????????????? ??????????????????????????????????????????"}
        </SEmployeeHeaderMobileIndicator>
        <SEmployeeHeaderButtonEmloyee
          className={
            formRoute === EmployeeInfoRouteEnum.EMPLOYEE_ROUTE
              ? "active-form"
              : ""
          }
        >
          ???????????????????????????????????? ????????????
        </SEmployeeHeaderButtonEmloyee>
        <SEmployeeHeaderButtonLeptop
          className={
            formRoute === EmployeeInfoRouteEnum.LAPTOP_ROUTE
              ? "active-form"
              : ""
          }
        >
          ???????????????????????? ??????????????????????????????????????????
        </SEmployeeHeaderButtonLeptop>
        <SEmployeeHeaderIndicator>
          {formRoute === EmployeeInfoRouteEnum.EMPLOYEE_ROUTE
            ? "1 / 2"
            : "2 / 2"}
        </SEmployeeHeaderIndicator>
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
          isLoading={isLoading}
          setupRequest={(form) => {
            setGlobalForm((prev) => ({ ...prev, ...form }));
          }}
          sendLaptop={addLaptop}
        />
      )}
    </SEmployee>
  );
};
