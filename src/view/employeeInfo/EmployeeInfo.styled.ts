import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SEmployee = styled.section`
  min-height: 100vh;
  background: #ffffff;
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
`;

const buttonStyles = css`
  border: none;
  background: none;
  outline: none;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SEmployeeHeaderButtonEmloyee = styled.button`
  ${buttonStyles}
  margin-right: 5rem;
`;

export const SEmployeeHeaderButtonLeptop = styled.button`
  ${buttonStyles}
`;

export const SEmployeeBackArrow = styled.img``;

SEmployeeBackArrow.defaultProps = {
  src: "assets/svg/arrow.svg",
};
