import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useFetchList } from "./hooks/useFetchList";
import {
  SRecordHeaderBackArrow,
  SRecordHeaderBackBtn,
  SRecordHeaderTitle,
  SRecordListContainer,
  SRecordListImageWrapper,
  SRecordListEachItemInfoWrapper,
  SRecordListHeader,
  SRecordListItems,
  SRecordListWrapper,
  SRecordListEachItem,
} from "./RecordList.styled";

interface RecordListTypes {
  laptop: {
    image: string;
    name: string;
    id: number;
  };
  user: {
    name: string;
    surname: string;
  };
}

export const RecordLists = () => {
  const [recordLists, setRecordLists] = useState<RecordListTypes[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://pcfy.redberryinternship.ge/api/laptops?token=${process.env.REACT_APP_TOKEN}`
      )
      .then((res) => {
        setRecordLists(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SRecordListContainer>
      <SRecordListHeader>
        <SRecordHeaderBackBtn to="/">
          <SRecordHeaderBackArrow />
        </SRecordHeaderBackBtn>
        <SRecordHeaderTitle>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</SRecordHeaderTitle>
      </SRecordListHeader>
      <SRecordListWrapper>
        {(recordLists || []).map((recordList) => {
          const {
            laptop: { id, image },
            user: { name, surname },
          } = recordList;

          return (
            <SRecordListItems key={id}>
              <SRecordListEachItem>
                <SRecordListImageWrapper>
                  <img
                    src={`https://pcfy.redberryinternship.ge${image}`}
                    alt=""
                  />
                </SRecordListImageWrapper>
                <SRecordListEachItemInfoWrapper>
                  <h3>
                    {name} {surname}
                  </h3>
                  <h5>{recordList.laptop.name}</h5>
                  <Link to={`${id}`}>მეტის ნახვა</Link>
                </SRecordListEachItemInfoWrapper>
              </SRecordListEachItem>
            </SRecordListItems>
          );
        })}
      </SRecordListWrapper>
    </SRecordListContainer>
  );
};
