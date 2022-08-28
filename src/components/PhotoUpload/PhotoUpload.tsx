import { FC } from "react";
import { PhotoUploadProps } from "./PhotoUpload.types";
import { FileUploader } from "react-drag-drop-files";

import { useUploadHandler } from "./hooks/useUploadHandler";

import {
  SPhotoUpload,
  SPhotoUploadText,
  SPhotoUploadedPhoto,
  SPhotoUploadButton,
  SPhotoUploadWarn
} from "./SPhotoUpload.styled";

export const PhotoUpload: FC<PhotoUploadProps> = ({ onUpload, isError }) => {
  const { blobSource, fileUploadHandler, uploadedPhoto } = useUploadHandler();

  const onUploadCallback = (file: File) => {
    fileUploadHandler(file);
    onUpload(file);
  };

  if (blobSource && uploadedPhoto) {
    return (
      <SPhotoUpload isError={isError}>
        <SPhotoUploadedPhoto src={blobSource} role="img" />
        <FileUploader
          types={["JPG", "PNG"]}
          onDrop={(file: File) => onUploadCallback(file)}
          handleChange={(file: File) => onUploadCallback(file)}
        />
      </SPhotoUpload>
    );
  }

  return (
    <SPhotoUpload role="combobox" isError={isError}>
      <FileUploader
        role="upload"
        types={["JPG", "PNG"]}
        onDrop={(file: File) => onUploadCallback(file)}
        handleChange={(file: File) => onUploadCallback(file)}
      />
      <SPhotoUploadText isError={isError}>
        { isError && <SPhotoUploadWarn /> }
        ჩააგდე ან ატვირთე ლეპტოპის ფოტო
      </SPhotoUploadText>
      <SPhotoUploadButton>ატვირთე</SPhotoUploadButton>
    </SPhotoUpload>
  );
};
