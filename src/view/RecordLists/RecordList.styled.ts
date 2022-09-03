import { Link } from "react-router-dom";
import styled from "styled-components";

export const SRecordListContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const SRecordListHeader = styled.header`
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

export const SRecordHeaderBackBtn = styled(Link)`
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
    background: transparent;
  }
`;

export const SRecordHeaderTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SRecordListWrapper = styled.div`
  min-height: 100vh;
  width: 70%;
  margin: 5rem auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SRecordListItems = styled.div``;

export const SRecordListEachItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #eafaff;
  border: 1px solid #aed1ea;
  border-radius: 1.2rem;
  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }
  img {
    max-width: 200px;
    width: 100%;
    @media screen and (max-width: 768px) {
      max-width: 150px;
      width: 100%;
    }
  }
`;

export const SRecordListEachItemInfoWrapp = styled.div`
  padding-left: 1.5rem;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2e2e2e;
  }
  h5 {
    margin: 2rem 0;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      margin: 0.8rem 0;
    }
  }
  h3,
  h5,
  p {
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const SRecordHeaderBackArrow = styled.img``;

SRecordHeaderBackArrow.defaultProps = {
  src: "assets/svg/arrow.svg",
};
