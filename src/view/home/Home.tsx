import { useResponsive } from "./hooks/useResponsive";
import {
  SHome,
  SHomeHeader,
  SHomeLogo,
  SHomeSection,
  SHomeSectionImg,
  SHomeSectionButtonsWrapper,
  SHomeButton,
  SHomeSectionImgWrapper,
} from "./SHome.styled";

export const Home = () => {
  const [homeImage] = useResponsive();

  return (
    <SHome>
      <SHomeHeader>
        <SHomeLogo />
      </SHomeHeader>
      <SHomeSection>
        <SHomeSectionImgWrapper>
          <SHomeSectionImg src={homeImage} />
        </SHomeSectionImgWrapper>
        <SHomeSectionButtonsWrapper>
          <SHomeButton to="/employee-form">ჩანაწერის დამატება</SHomeButton>
          <SHomeButton to="/record-list">ჩანაწერის სია</SHomeButton>
        </SHomeSectionButtonsWrapper>
      </SHomeSection>
    </SHome>
  );
};
