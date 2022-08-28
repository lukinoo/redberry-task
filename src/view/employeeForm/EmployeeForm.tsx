import { useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import {
  SEmployeeForm,
  SEmployeeFormWrapper,
  SEmployeeFormContainer,
  SEmployeeFormInputWrapper,
  SEmployeeFormInput,
  SEmployeeFormSelectWrapper,
  SEmployeeFormSelect,
  SEmployeeFormEmailWrapper,
  SEmployeeFormSubmitButton,
  SEmployeeFormFooter,
  SEmployeeFormFooterLogo,
} from "./EmployeeFrom.styled";
import { useForm } from "../../hooks/useForm";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = () => {
  // api fetch
  const [teams] = useFetch("https://pcfy.redberryinternship.ge/api/teams");
  const [positions] = useFetch(
    "https://pcfy.redberryinternship.ge/api/positions"
  );

  // default form values | localstorage values
  const getLocalEmployee = useLocalStorage();

  const navigate = useNavigate();

  // input handler
  const [values, handleChange] = useForm(getLocalEmployee);

  const currentPostions = useMemo(() => {
    const findIdInTeams = teams.find((e) => e.name === values.team) || {id: ""}
    const filterPostions = positions.filter(
      (postion) => postion.team_id === findIdInTeams!.id 
    );
    return filterPostions;
  }, [values.team, positions, teams]);

  
  return (
    <SEmployeeFormWrapper>
      <SEmployeeForm>
        <SEmployeeFormContainer>
          <SEmployeeFormInputWrapper>
            <label htmlFor="name">სახელი</label>
            <SEmployeeFormInput
              name="name"
              placeholder="სახელი"
              type="text"
              value={values.name}
              onChange={handleChange}
              id="name"
              required
            />
            <p>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
          </SEmployeeFormInputWrapper>
          <SEmployeeFormInputWrapper>
            <label htmlFor="lastname">გვარი</label>
            <SEmployeeFormInput
              name="lastname"
              placeholder="გვარი"
              type="text"
              value={values.lastname}
              onChange={handleChange}
              id="lastname"
              required
            />
            <p>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
          </SEmployeeFormInputWrapper>
          <SEmployeeFormSelectWrapper>
            <SEmployeeFormSelect
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
            </SEmployeeFormSelect>
          </SEmployeeFormSelectWrapper>
          <SEmployeeFormSelectWrapper>
            <SEmployeeFormSelect
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
            </SEmployeeFormSelect>
          </SEmployeeFormSelectWrapper>
          <SEmployeeFormEmailWrapper>
            <label htmlFor="email">მეილი</label>
            <SEmployeeFormInput
              name="email"
              placeholder="john@redberry.ge"
              type="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              required
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </SEmployeeFormEmailWrapper>
          <SEmployeeFormEmailWrapper>
            <label htmlFor="phone">ტელეფონის ნომერი</label>
            <SEmployeeFormInput
              name="phone"
              placeholder="+995 598 00 07 01"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              id="phone"
              required
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
          </SEmployeeFormEmailWrapper>
          <SEmployeeFormSubmitButton
            onClick={() => navigate("/")}
            type="submit"
          >
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
