import axios from "axios";
import { useState, useEffect, useMemo } from "react";
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
import { useFetch } from "./hooks/useFetch";
import { spaceSeperator } from "../../utils/spaceSeperator";

export const EachLaptop = () => {
  const [eachLaptop, setEachLaptop] = useState<EachLaptopType>();

  const { id } = useParams();

  const [teams] = useFetch(`https://pcfy.redberryinternship.ge/api/teams`);
  const [brands] = useFetch(`https://pcfy.redberryinternship.ge/api/brands`);
  const [positions] = useFetch(
    `https://pcfy.redberryinternship.ge/api/positions`
  );

  const fetchEachLaptop = () => {
    axios
      .get(
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${process.env.REACT_APP_TOKEN}`
      )
      .then((res) => {
        setEachLaptop(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEachLaptop();
  }, [id]);

  const currentTeam = useMemo(() => {
    const currentTeamId = eachLaptop?.user.team_id;
    const teamName = teams.find((el) => el.id === currentTeamId);

    const currentPositionId = eachLaptop?.user.position_id;
    const positionName = positions.find((el) => el.id === currentPositionId);

    const currentBrandsId = eachLaptop?.laptop.brand_id;
    const brandsName = brands.find((el) => el.id === currentBrandsId);

    return {
      team: teamName?.name,
      position: positionName?.name,
      brand: brandsName?.name,
    };
  }, [eachLaptop?.user.team_id, teams, positions, brands]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <SEachLaptopContainer>
      <SEachLaptopHeader>
        <SEachLaptopBackBtn to="/">
          <SEachLaptopBackBtnArrow src="/assets/svg/arrow.svg" />
        </SEachLaptopBackBtn>
        <SEachLaptopTitle>???????????????????????? ????????????</SEachLaptopTitle>
      </SEachLaptopHeader>
      <SEachLaptopWrapper>
        <SEachLaptopImage
          src={"https://pcfy.redberryinternship.ge" + eachLaptop?.laptop.image}
        />
        <SEachLaptopEmployeeInfoWrapper>
          <div>
            <h3>??????????????????:</h3>
            <h3>????????????:</h3>
            <h3>?????????????????????:</h3>
            <h3>???????????????:</h3>
            <h3>?????????.??????????????????:</h3>
          </div>
          <div>
            <p>
              {eachLaptop?.user.name} {eachLaptop?.user.surname}
            </p>
            <p>{currentTeam.team}</p>
            <p>{currentTeam.position}</p>
            <p>{eachLaptop?.user.email}</p>
            <p>{eachLaptop?.user.phone_number}</p>
          </div>
        </SEachLaptopEmployeeInfoWrapper>
        <SEachLaptopInfoWrapper>
          <div className="laptop__info__wrapper__left">
            <div style={{ marginRight: "4rem" }}>
              <h3>???????????????????????? ??????????????????:</h3>
              <h3>???????????????????????? ??????????????????:</h3>
              <h3>RAM:</h3>
              <h3>????????????????????????????????? ????????????:</h3>
            </div>
            <div>
              <p>{eachLaptop?.laptop.name}</p>
              <p>{currentTeam.brand}</p>
              <p>{eachLaptop?.laptop.ram}</p>
              <p>{eachLaptop?.laptop.hard_drive_type}</p>
            </div>
          </div>
          <div className="laptop__info__wrapper__right">
            <div style={{ marginRight: "4rem" }}>
              <h3>CPU:</h3>
              <h3>CPU-??? ??????????????????:</h3>
              <h3>CPU-??? ??????????????????:</h3>
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
              <h3>???????????????????????? ?????????????????????????????????:</h3>
              <h3>???????????????????????? ????????????:</h3>
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <p>{eachLaptop?.laptop.state === "new" ? "???????????????" : "?????????????????????"}</p>
              <p>{spaceSeperator(eachLaptop?.laptop.price)}???</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h3>
              ????????????????????? ???????????????a???: <span>{eachLaptop?.laptop.purchase_date}</span>
            </h3>
          </div>
        </SEachLaptopPriceWrapper>
      </SEachLaptopWrapper>
    </SEachLaptopContainer>
  );
};
