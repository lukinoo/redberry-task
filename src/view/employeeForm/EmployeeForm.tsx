import React from "react";
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

export const EmployeeForm = () => {
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
              id="lastname"
              required
            />
            <p>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
          </SEmployeeFormInputWrapper>
          <SEmployeeFormSelectWrapper>
            <SEmployeeFormSelect>
              <option value="team">თიმი</option>
            </SEmployeeFormSelect>
          </SEmployeeFormSelectWrapper>
          <SEmployeeFormSelectWrapper>
            <SEmployeeFormSelect>
              <option value="team">პოზიცია</option>
            </SEmployeeFormSelect>
          </SEmployeeFormSelectWrapper>
          <SEmployeeFormEmailWrapper>
            <label htmlFor="email">გვარი</label>
            <SEmployeeFormInput
              name="email"
              placeholder="john@redberry.ge"
              type="email"
              id="email"
              required
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </SEmployeeFormEmailWrapper>
          <SEmployeeFormEmailWrapper>
            <label htmlFor="phone">გვარი</label>
            <SEmployeeFormInput
              name="phone"
              placeholder="+995 598 00 07 01"
              type="tel"
              id="phone"
              required
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
          </SEmployeeFormEmailWrapper>
          <SEmployeeFormSubmitButton type="submit">
            შემდეგი
          </SEmployeeFormSubmitButton>
        </SEmployeeFormContainer>
      </SEmployeeForm>
      {/* goes here */}
      <SEmployeeFormFooter>
        <SEmployeeFormFooterLogo />
      </SEmployeeFormFooter>
    </SEmployeeFormWrapper>
  );
};
