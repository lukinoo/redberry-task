import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { EachLaptopType } from "./EachLaptop.types";

/*
      "user": {
      "name": "გელა",
      "surname": "გელაშვილი",
      "team_id": 1,
      "position_id": 1,
      "email": "gela.gelashvili@redberry.ge",
      "phone_number": 995555555555
    },
    "laptop": {
      "name": "HP",
      "image": "/storage/images/uLuuQCcXG9MhotvvMbezzXvPrEJFc5m74JfUlWdp.jpg",
      "brand_id": 1,
      "cpu": {
        "name": "Intel Core i3",
        "cores": 64,
        "threads": 128
      },
      "ram": 34,
      "hard_drive_type": "HDD",
      "state": "new",
      "purchase_date": "10-10-2003",
      "price": 1600
    }
*/

export const EachLaptop = () => {
  const [eachLaptop, setEachLaptop] = useState<EachLaptopType>();

  const { id } = useParams();

  const fetchEachLaptop = () => {
    axios
      .get(
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${process.env.REACT_APP_TOKEN}`
      )
      .then((res) => {
        setEachLaptop(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEachLaptop();
  }, [id]);

  // `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${process.env.REACT_APP_TOKEN}`

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <SEachLaptopContainer>
      <SEachLaptopHeader>
        <SEachLaptopBackBtn to="/">
          <SEachLaptopBackBtnArrow src="assets/svg/arrow.svg" />
        </SEachLaptopBackBtn>
        <SEachLaptopTitle>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</SEachLaptopTitle>
      </SEachLaptopHeader>
      <SEachLaptopWrapper>
        <SEachLaptopImage
          src={"https://pcfy.redberryinternship.ge" + eachLaptop?.laptop.image}
        />
        <SEachLaptopEmployeeInfoWrapper>
          <div>
            <h3>სახელი:</h3>
            <h3>თიმი:</h3>
            <h3>პოზიცია:</h3>
            <h3>მეილი:</h3>
            <h3>ტელ.ნომერი:</h3>
          </div>
          <div>
            <p>
              {eachLaptop?.user.name} {eachLaptop?.user.surname}
            </p>
            <p>დეველოპერი</p>
            <p>ილუსტრატორი</p>
            <p>{eachLaptop?.user.email}</p>
            <p>{eachLaptop?.user.phone_number}</p>
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
              <p>{eachLaptop?.laptop.name}</p>
              <p>HP</p>
              <p>{eachLaptop?.laptop.ram}</p>
              <p>{eachLaptop?.laptop.hard_drive_type}</p>
            </div>
          </div>
          <div className="laptop__info__wrapper__right">
            <div style={{ marginRight: "4rem" }}>
              <h3>CPU:</h3>
              <h3>CPU-ს ბირთვი:</h3>
              <h3>CPU-ს ნაკადი:</h3>
            </div>
            <div>
              <p>{eachLaptop?.laptop.cpu.name}</p>
              <p>{eachLaptop?.laptop.cpu.cores}</p>
              <p>{eachLaptop?.laptop.cpu.threads}</p>
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
              <p>{eachLaptop?.laptop.state}</p>
              <p>{eachLaptop?.laptop.price}ლ</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h3>
              შეძენის რიცხვი: <span>{eachLaptop?.laptop.purchase_date}</span>
            </h3>
          </div>
        </SEachLaptopPriceWrapper>
      </SEachLaptopWrapper>
    </SEachLaptopContainer>
  );
};
