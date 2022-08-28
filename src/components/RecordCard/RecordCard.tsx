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
import { RecordCardProps } from "./RecordCard.types";

export const RecordCard: FC<RecordCardProps> = ({ laptop, user }) => {
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
