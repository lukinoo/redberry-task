import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SEmployee = styled.section`
  min-height: 100vh;
  background: #f6f6f6;
`;

export const SEmployeeHeader = styled.header`
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

export const SEmployeeHeaderBackBtn = styled(Link)`
  position: absolute;
  top: 40%;
  left: 3%;
  transform: translate(-3%, -40%);
  text-decoration: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d9d9d9;
  display: grid;
  place-items: center;
  @media screen and (max-width: 768px) {
    background: #ffffff;
  }
`;

const buttonStyles = css`
  border: none;
  background: none;
  outline: none;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
  position: relative;
  &.active-form {
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -50%;
      transform: translate(-50%, 50%);
      width: 80%;
      border: 2px solid #000000;
      background: #000000;
      border-radius: 18px;
    }
  }
`;

export const SEmployeeHeaderButtonEmloyee = styled.button`
  ${buttonStyles}
  margin-right: 5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 0 0 2rem 0;
    font-weight: 700;
    display: none;
    &.active-form {
      &::before {
        display: none;
      }
    }
  }
`;

export const SEmployeeHeaderMobileIndicator = styled.button`
  display: none;
  border: none;
  background: none;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const SEmployeeHeaderIndicator = styled.span`
  display: none;
  color: #898989;
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const SEmployeeHeaderButtonLeptop = styled.button`
  ${buttonStyles}
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SEmployeeBackArrow = styled.img``;

SEmployeeBackArrow.defaultProps = {
  src: "assets/svg/arrow.svg",
};
