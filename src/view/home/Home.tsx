import React from "react";
import {
  SHome,
  SHomeHeader,
  SHomeLogo,
  SHomeSection,
  SHomeSectionImg,
  SHomeSectionButtonsWrapper,
  SHomeButton,
} from "./SHome.styled";

export const Home = () => {
  return (
    <SHome>
      <SHomeHeader>
        <SHomeLogo />
      </SHomeHeader>
      <SHomeSection>
        <SHomeSectionImg src={"assets/img/Group1.png"} />
        <SHomeSectionButtonsWrapper>
          <SHomeButton to="/employee-form">ჩანაწერის დამატება</SHomeButton>
          <SHomeButton to="/laptops">ჩანაწერის სია</SHomeButton>
        </SHomeSectionButtonsWrapper>
      </SHomeSection>
    </SHome>
  );
};
