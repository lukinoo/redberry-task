import styled from "styled-components";
import { Link } from "react-router-dom";

export const SHome = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const SHomeHeader = styled.header`
  min-height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SHomeSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SHomeSectionImg = styled.img`
  max-width: 700px;
  width: 100%;
`;

export const SHomeSectionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  gap: 1rem;
`;

export const SHomeButton = styled(Link)`
  text-decoration: none;
  max-width: 380px;
  width: 100%;
  padding: 1.1rem 3.5rem;
  text-align: center;
  background: #62a1eb;
  color: #ffffff;
  font-size: 1.2rem;
  border-radius: 8px;
  letter-spacing: 2px;
  transition: background 0.2s ease;
  &:hover {
    background: #317ad0;
  }
`;

export const SHomeLogo = styled.img``;

SHomeLogo.defaultProps = {
  src: "assets/svg/LOGO.svg",
};
