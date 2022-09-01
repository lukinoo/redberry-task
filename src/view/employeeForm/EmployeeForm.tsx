import { useMemo, FormEvent, useState, FC } from "react";

import { SInput } from "../../components/SInput";
import { SSelect } from "../../components/SSelect";

import { FormTypes } from "../../types/Form.types";
import { useValidation } from "./hooks/useValidation";

import { useFetch } from "./hooks/useFetch";
import {
  SEmployeeForm,
  SEmployeeFormWrapper,
  SEmployeeFormContainer,
  SEmployeeFormInputWrapper,
  SEmployeeFormSelectWrapper,
  SEmployeeFormEmailWrapper,
  SEmployeeFormSubmitButton,
  SEmployeeFormFooter,
  SEmployeeFormFooterLogo,
  SEmployeeFormWarn,
} from "./EmployeeFrom.styled";
import { useForm } from "../../hooks/useForm";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { EmployeeFormProps } from "./EmployeeForm.types";

export const EmployeeForm: FC<EmployeeFormProps> = ({
  handleChangeRoute,
  insertEmployeeInfo,
}) => {
  // api fetch
  const [teams] = useFetch("https://pcfy.redberryinternship.ge/api/teams");
  const [isError, setIsError] = useState<string | undefined>(undefined);
  const [positions] = useFetch(
    "https://pcfy.redberryinternship.ge/api/positions"
  );

  // default form values | localstorage values
  const [getLocalEmployee] = useLocalStorage();

  // input handler
  const [values, handleChange] = useForm(getLocalEmployee);
  const [validation] = useValidation<FormTypes>(values);

  const currentPostions = useMemo(() => {
    const findIdInTeams = teams.find((e) => e.name === values.team) || {
      id: "",
    };
    const filterPostions = positions.filter(
      (postion) => postion.team_id === findIdInTeams!.id
    );
    return filterPostions;
  }, [values.team, positions, teams]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    let validationError;

    if (validation.error) {
      validationError = String(validation.error)
        .split(" ")[1]
        .replace(/"/g, "");
    } else {
      validationError = undefined;
    }

    if (validationError === undefined) {
      handleChangeRoute();
      const findId = teams.find((e) => e.name === values.team);
      const findPostions = positions.find(
        (postion) => postion.team_id === findId!.id
      );

      const insertObject = {
        name: values.name,
        surname: values.surname,
        phone_number: `+995${values.phone_number}`,
        email: values.email,
        team_id: findId!.id,
        position_id: findPostions!.id,
      };

      insertEmployeeInfo(insertObject);
    } else setIsError(validationError);
  };

  return (
    <SEmployeeFormWrapper>
      <SEmployeeForm onSubmit={submitHandler}>
        <SEmployeeFormContainer>
          <SEmployeeFormInputWrapper>
            <label htmlFor="name">სახელი</label>
            <SInput
              name="name"
              isError={isError === "name" || false}
              placeholder="სახელი"
              type="text"
              value={values.name}
              onChange={handleChange}
              id="name"
              required
            />
            <SEmployeeFormWarn isError={isError === "name" || false}>
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </SEmployeeFormWarn>
          </SEmployeeFormInputWrapper>
          <SEmployeeFormInputWrapper>
            <label htmlFor="surname">გვარი</label>
            <SInput
              isError={isError === "surname" || false}
              name="surname"
              placeholder="გვარი"
              type="text"
              value={values.surname}
              onChange={handleChange}
              id="surname"
              required
            />
            <SEmployeeFormWarn isError={isError === "surname" || false}>
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </SEmployeeFormWarn>
          </SEmployeeFormInputWrapper>
          <SEmployeeFormSelectWrapper>
            <SSelect
              isError={isError === "team" || false}
              onChange={handleChange}
              value={values.team}
              name="team"
            >
              <option value={""} disabled>
                თიმი
              </option>
              {teams.map((team) => {
                return (
                  <option key={team.id} value={team.name}>
                    {team.name}
                  </option>
                );
              })}
            </SSelect>
          </SEmployeeFormSelectWrapper>
          <SEmployeeFormSelectWrapper>
            <SSelect
              isError={isError === "postion" || false}
              name="position"
              value={values.position}
              onChange={handleChange}
            >
              <option value={""} disabled>
                პოზიცია
              </option>
              {currentPostions.map((position) => {
                return (
                  <option key={position.id} value={position.name}>
                    {position.name}
                  </option>
                );
              })}
            </SSelect>
          </SEmployeeFormSelectWrapper>
          <SEmployeeFormEmailWrapper>
            <label htmlFor="email">მეილი</label>
            <SInput
              isError={isError === "email" || false}
              name="email"
              placeholder="john@redberry.ge"
              type="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              required
            />
            <SEmployeeFormWarn isError={isError === "email" || false}>
              უნდა მთავრდებოდეს @redberry.ge-ით
            </SEmployeeFormWarn>
          </SEmployeeFormEmailWrapper>
          <SEmployeeFormEmailWrapper>
            <label htmlFor="phone_number">ტელეფონის ნომერი</label>
            <SInput
              name="phone_number"
              placeholder="+995 598 00 07 01"
              isError={isError === "phone_number" || false}
              maxLength={9}
              type="tel"
              value={values.phone_number}
              onChange={handleChange}
              id="phone"
              required
            />
            <SEmployeeFormWarn isError={isError === "phone_number" || false}>
              უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
            </SEmployeeFormWarn>
          </SEmployeeFormEmailWrapper>
          <SEmployeeFormSubmitButton type="submit">
            შემდეგი
          </SEmployeeFormSubmitButton>
        </SEmployeeFormContainer>
      </SEmployeeForm>
      <SEmployeeFormFooter>
        <SEmployeeFormFooterLogo />
      </SEmployeeFormFooter>
    </SEmployeeFormWrapper>
  );
};
