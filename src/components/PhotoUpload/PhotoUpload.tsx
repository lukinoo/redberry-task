import { FC } from "react";
import { PhotoUploadProps } from "./PhotoUpload.types";
import { FileUploader } from "react-drag-drop-files";

import { useUploadHandler } from "./hooks/useUploadHandler";

import {
  SPhotoUpload,
  SPhotoUploadText,
  SPhotoUploadedPhoto,
  SPhotoUploadButton,
} from "./SPhotoUpload.styled";

export const PhotoUpload: FC<PhotoUploadProps> = ({onUpload}) => {
  const { blobSource, fileUploadHandler, uploadedPhoto } = useUploadHandler();

  const onUploadCallback = (file: File) => {
    fileUploadHandler(file)
    onUpload(file)
  } 

  if (blobSource && uploadedPhoto) {
    return (
      <SPhotoUpload>
        <SPhotoUploadedPhoto src={blobSource} />
        <FileUploader
          types={["JPG", "PNG"]}
          onDrop={(file: File) => onUploadCallback(file)}
          handleChange={(file: File) => onUploadCallback(file)}
        />
      </SPhotoUpload>
    );
  }

  return (
    <SPhotoUpload role="combobox">
      <FileUploader
        types={["JPG", "PNG"]}
        onDrop={(file: File) => onUploadCallback(file)}
        handleChange={(file: File) => onUploadCallback(file)}
      />
      <SPhotoUploadText>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</SPhotoUploadText>
      <SPhotoUploadButton>
        ატვირთე
      </SPhotoUploadButton>
    </SPhotoUpload>
  );
};
