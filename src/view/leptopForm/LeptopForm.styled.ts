import styled from "styled-components";
import { SSelect } from "../../components/SSelect";

export const SLeptopFormWrapper = styled.div``;

export const SLeptopForm = styled.form`
  max-width: 1200px;
  width: 100%;
  height: 200vh;
  margin: 0 auto;
  margin-top: 1.2rem;
  background: #ffffff;
  border-radius: 18px;
  font-family: "Helvetica Neue";
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const SLeptopFormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 3.5rem;
`;

export const SLeptopFormInputWrapper = styled.div<{ isError?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: #2e2e2e;
  }
`;

export const SLeptopFormInputLabel = styled.label<{ isError?: boolean }>`
  font-size: 1.2em;
  font-weight: 500;
  color: #000000;
  display: flex;
  color: ${(props) => {
    if (props.isError) {
      return "#E52F2F !important";
    }

    return "#000";
  }};
  span {
    display: inline-block;
    margin-left: 0.7rem;
    img {
      width: 20px;
      height: 20px;
      display: ${(props) => {
        if (props.isError) {
          return "block";
        }

        return "none";
      }};
    }
  }
`;

export const SLeptopFormSelect = styled(SSelect)`
  grid-column: 2/3;
  align-self: center;
`;

export const SLeptopFormInfoWrapper = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  gap: 0 1rem;
  border-top: 1px solid #c7c7c7;
  div {
    flex: 1;
  }
`;

export const SLeptopFormRAM = styled(SSelect)`
  flex: 1;
`;

export const SLeptopFormRadioInputWrapper = styled.div`
  display: flex;
  div {
    height: 60px;
    &:nth-child(2) {
      margin-left: 1.5rem;
    }
    input {
      margin-right: 1.5rem;
      width: 20px;
      height: 20px;
    }
  }
`;

export const SLeptopFormDateInputWrapper = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  border-top: 1px solid #c7c7c7;
  gap: 3.5rem;
  div {
    flex: 1;
  }
`;

export const SLeptopFormBackButton = styled.button`
  color: #62a1eb;
  align-self: center;
  justify-self: flex-start;
  background: none;
  outline: none;
  border: none;
  font-family: inherit;
  letter-spacing: 3px;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const SLeptopFormUploadAgainButton = styled.button`
  padding: 1.1rem 2rem;
  background: #62a1eb;
  color: #ffffff;
  position: relative;
  justify-self: flex-end;
  align-self: center;
  font-size: 1.2rem;
  border-radius: 8px;
  letter-spacing: 2px;
  font-family: inherit;
  border: none;
  outline: none;
  overflow: hidden;
  input[type="file"]{
    position:absolute;
    opacity: 0;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  };
  transition: background 0.2s ease;
  &:hover {
    background: #317ad0;
  }
`;

export const SLeptopFormImageWarnWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0 1.5rem;
  }
`;

export const SLeptopFormSaveButton = styled.button`
  padding: 1.1rem 3rem;
  background: #62a1eb;
  color: #ffffff;
  justify-self: flex-end;
  align-self: center;
  font-size: 1.2rem;
  border-radius: 8px;
  letter-spacing: 2px;
  font-family: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: #317ad0;
  }
`;

export const SLeptopFormFooter = styled.footer`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SLeptopFormLariSpan = styled.span`
  border: 1px solid #8ac0e2;
  padding: 0.95rem;
  display: inline-block;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: none;
`;

export const SLeptopFormLariIcon = styled.img``;

export const SLeptopFormFooterLogo = styled.img``;

SLeptopFormLariIcon.defaultProps = {
  src: "assets/svg/lari.svg",
};

SLeptopFormFooterLogo.defaultProps = {
  src: "assets/svg/LOGO2.svg",
};
