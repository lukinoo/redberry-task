import { FC, useMemo } from "react";
import { PhotoUploadProps } from "./PhotoUpload.types";

import { useUploadHandler } from "./hooks/useUploadHandler";

import {
  SPhotoUpload,
  SPhotoUploadInput,
  SPhotoUploadText,
  SPhotoUploadedPhoto,
  SPhotoUploadButton,
} from "./SPhotoUpload.styled";

export const PhotoUpload: FC<PhotoUploadProps> = () => {
  const { blobSource, fileUploadHandler, uploadedPhoto } = useUploadHandler();

  console.log(blobSource, uploadedPhoto);

  if (blobSource && uploadedPhoto) {
    return (
      <SPhotoUpload>
        <SPhotoUploadInput onChange={(e) => fileUploadHandler(e)} />
        <SPhotoUploadedPhoto src={blobSource} />
      </SPhotoUpload>
    );
  }

  return (
    <SPhotoUpload>
      <SPhotoUploadText>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</SPhotoUploadText>
      <SPhotoUploadButton>
        <SPhotoUploadInput onChange={(e) => fileUploadHandler(e)}/>
        ატვირთე
      </SPhotoUploadButton>
    </SPhotoUpload>
  );
};
