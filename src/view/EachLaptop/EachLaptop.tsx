import {
  SEachLaptopBackBtn,
  SEachLaptopBackBtnArrow,
  SEachLaptopContainer,
  SEachLaptopEmployeeInfoWrapper,
  SEachLaptopHeader,
  SEachLaptopImage,
  SEachLaptopInfoWrapper,
  SEachLaptopPriceWrapper,
  SEachLaptopTitle,
  SEachLaptopWrapper,
} from "./EachLaptop.styled";

export const EachLaptop = () => {
  return (
    <SEachLaptopContainer>
      <SEachLaptopHeader>
        <SEachLaptopBackBtn to="/">
          <SEachLaptopBackBtnArrow />
        </SEachLaptopBackBtn>
        <SEachLaptopTitle>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</SEachLaptopTitle>
      </SEachLaptopHeader>
      <SEachLaptopWrapper>
        <SEachLaptopImage />
        <SEachLaptopEmployeeInfoWrapper>
          <div>
            <h3>სახელი:</h3>
            <h3>თიმი:</h3>
            <h3>პოზიცია:</h3>
            <h3>მეილი:</h3>
            <h3>ტელ.ნომერი:</h3>
          </div>
          <div>
            <p>აკაკი წერეთელი</p>
            <p>დეველოპერი</p>
            <p>ილუსტრატორი</p>
            <p>ako@redberry.ge</p>
            <p>+995 522 525 521</p>
          </div>
        </SEachLaptopEmployeeInfoWrapper>
        <SEachLaptopInfoWrapper>
          <div className="laptop__info__wrapper__left">
            <div style={{ marginRight: "4rem" }}>
              <h3>ლეპტოპის სახელი:</h3>
              <h3>ლეპტოპის ბრენდი:</h3>
              <h3>RAM:</h3>
              <h3>მეხსიერების ტიპი:</h3>
            </div>
            <div>
              <p>Razor bla bla</p>
              <p>HP</p>
              <p>16</p>
              <p>SSD</p>
            </div>
          </div>
          <div className="laptop__info__wrapper__right">
            <div style={{ marginRight: "4rem" }}>
              <h3>CPU:</h3>
              <h3>CPU-ს ბირთვი:</h3>
              <h3>CPU-ს ნაკადი:</h3>
            </div>
            <div>
              <p>Intel 5</p>
              <p>13</p>
              <p>67</p>
            </div>
          </div>
        </SEachLaptopInfoWrapper>
        <SEachLaptopPriceWrapper>
          <div style={{ display: "flex", flex: 1 }}>
            <div>
              <h3>ლეპტოპის მდგომარეობა:</h3>
              <h3>ლეპტოპის ფასი:</h3>
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <p>მეორადი</p>
              <p>1500ლ</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h3>
              შეძენის რიცხვი: <span>03/06/15</span>
            </h3>
          </div>
        </SEachLaptopPriceWrapper>
      </SEachLaptopWrapper>
    </SEachLaptopContainer>
  );
};
