import { FC } from "react";
import {
  SRecordCard,
  SRecordCardImage,
  SRecordCardImageContainer,
  SRecordCardFullName,
  SRecordCardInfo,
  SRecordCardLaptopName,
  SRecordCardLink
} from "./SRecordCard.styled";
import { RecordListTypes } from "../../types/RecordList.types";

export const RecordCard: FC<RecordListTypes> = ({ laptop, user }) => {
  return (
    <SRecordCard>
      <SRecordCardImageContainer>
        <SRecordCardImage src={laptop.image} />
      </SRecordCardImageContainer>
      <SRecordCardInfo>
        <SRecordCardFullName>
          {user.name} {user.surname}
        </SRecordCardFullName>
        <SRecordCardLaptopName>
          {laptop.name}
        </SRecordCardLaptopName>
        <SRecordCardLink to={`/laptop/${laptop.id}`}>
          მეტის ნახვა
        </SRecordCardLink>
      </SRecordCardInfo>
    </SRecordCard>
  );
};
