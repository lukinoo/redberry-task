import { Link } from "react-router-dom";
import styled from "styled-components";

export const SCompleteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4a4a4a;
`;

export const SCompletePopUp = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #ffffff;
  border-radius: 8px;
`;

export const SCompleteImage = styled.img``;

export const SCompleteTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SCompleteListButton = styled(Link)`
  text-decoration: none;
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

export const SCompleteBackButton = styled(Link)`
  text-decoration: none;
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

SCompleteImage.defaultProps = {
  src: "assets/svg/Frame.svg",
};
