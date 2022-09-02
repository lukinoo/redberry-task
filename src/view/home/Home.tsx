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

  const src_check: string =
    (window.innerWidth as number) > 768
      ? "assets/img/Group1.png"
      : "assets/img/Group.png";

  return (
    <SHome>
      <SHomeHeader>
        <SHomeLogo />
      </SHomeHeader>
      <SHomeSection>
        <SHomeSectionImgWrapper>
          <SHomeSectionImg src={homeImage || src_check} />
        </SHomeSectionImgWrapper>
        <SHomeSectionButtonsWrapper>
          <SHomeButton to="/employee-form">ჩანაწერის დამატება</SHomeButton>
          <SHomeButton to="/record-list">ჩანაწერის სია</SHomeButton>
        </SHomeSectionButtonsWrapper>
      </SHomeSection>
    </SHome>
  );
};
