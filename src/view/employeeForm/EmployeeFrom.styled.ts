import styled from "styled-components";

export const SEmployeeFormWrapper = styled.div`
  min-height: 100vh;
`;

export const SEmployeeForm = styled.form`
  max-width: 1200px;
  width: 100%;
  height: 120vh;
  margin: 0 auto;
  margin-top: 1.2rem;
  background: #ffffff;
  border-radius: 18px;
  font-family: "Helvetica Neue";
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const SEmployeeFormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 3.5rem;
`;

export const SEmployeeFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-size: 1.2em;
    font-weight: 500;
    color: #000000;
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: #2e2e2e;
  }
`;

export const SEmployeeFormInput = styled.input`
  width: 100%;
  padding: 1.1rem;
  font-family: inherit;
  font-size: 1.1rem;
  border: 1px solid #8ac0e2;
  border-radius: 5px;
  margin: 0.5rem 0;
  outline: none;
`;

export const SEmployeeFormSelectWrapper = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SEmployeeFormSelect = styled.select`
  width: 100%;
  height: 3.7rem;
  background: #ebebeb;
  outline: none;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 500;
`;

export const SEmployeeFormEmailWrapper = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-size: 1.2em;
    font-weight: 500;
    color: #000000;
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: #2e2e2e;
  }
`;

export const SEmployeeFormSubmitButton = styled.button`
  grid-column: 2/3;
  justify-self: self-end;
  align-self: center;
  padding: 1.1rem 3.7rem;
  background: #62a1eb;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: #ffffff;
  font-family: inherit;
  font-weight: 500;
  border-radius: 8px;
  transition: background 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #317ad0;
  }
`;

export const SEmployeeFormFooter = styled.footer`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SEmployeeFormFooterLogo = styled.img``;

SEmployeeFormFooterLogo.defaultProps = {
  src: "assets/svg/LOGO2.svg",
};
