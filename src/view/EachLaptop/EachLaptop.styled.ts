import { Link } from "react-router-dom";
import styled from "styled-components";

export const SEachLaptopContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const SEachLaptopHeader = styled.header`
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

export const SEachLaptopBackBtn = styled(Link)`
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
    background: inherit;
  }
`;

export const SEachLaptopTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SEachLaptopWrapper = styled.div`
  min-height: 150vh;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3.5rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3.5rem 0;
  }
`;

export const SEachLaptopImage = styled.img`
  width: 100%;
  align-self: center;
  justify-self: center;
  @media screen and (max-width: 768px) {
    grid-column: 1/3;
  }
`;

export const SEachLaptopEmployeeInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    grid-column: 1/3;
    justify-content: flex-start;
  }
  div {
    &:nth-child(2) {
      margin-left: 2rem;
    }
    h3 {
      font-size: 1.3rem;
      color: #2e2e2e;
      font-weight: 600;
      margin: 2rem 0;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    p {
      color: #797979;
      font-size: 1.3rem;
      font-weight: 400;
      margin: 2rem 0;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const SEachLaptopInfoWrapper = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  border-top: 1px solid #a5a5a5;
  border-bottom: 1px solid #a5a5a5;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
  .laptop__info__wrapper__left {
    flex: 1;
    display: flex;
    div {
      h3 {
        font-size: 1.3rem;
        color: #2e2e2e;
        font-weight: 600;
        margin: 2rem 0;
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
      p {
        color: #797979;
        font-size: 1.3rem;
        font-weight: 400;
        margin: 2rem 0;
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }
  }
  .laptop__info__wrapper__right {
    flex: 1;
    display: flex;
    div {
      h3 {
        font-size: 1.3rem;
        color: #2e2e2e;
        font-weight: 600;
        margin: 2rem 0;
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
      p {
        color: #797979;
        font-size: 1.3rem;
        font-weight: 400;
        margin: 2rem 0;
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export const SEachLaptopPriceWrapper = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  div {
    h3 {
      font-size: 1.3rem;
      color: #2e2e2e;
      font-weight: 600;
      margin: 2rem 0;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
      span {
        margin-left: 2rem;
        font-weight: 400;
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }
    p {
      color: #797979;
      font-size: 1.3rem;
      font-weight: 400;
      margin: 2rem 0;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const SEachLaptopBackBtnArrow = styled.img``;
