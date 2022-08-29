import {
  SCompleteContainer,
  SCompletePopUp,
  SCompleteImage,
  SCompleteTitle,
  SCompleteListButton,
  SCompleteBackButton,
} from "./Complete.style";

export const Complete = () => {
  return (
    <SCompleteContainer>
      <SCompletePopUp>
        <SCompleteImage />
        <SCompleteTitle>ჩანაწერი დამატებულია!</SCompleteTitle>
        <SCompleteListButton to="/laptops">სიაში გადაყვანა</SCompleteListButton>
        <SCompleteBackButton to="/">მთავარი</SCompleteBackButton>
      </SCompletePopUp>
    </SCompleteContainer>
  );
};
