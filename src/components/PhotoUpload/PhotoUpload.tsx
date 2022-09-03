import { FC } from "react";
import { PhotoUploadProps } from "./PhotoUpload.types";
import { FileUploader } from "react-drag-drop-files";

import { useUploadHandler } from "./hooks/useUploadHandler";

import {
  SPhotoUpload,
  SPhotoUploadText,
  SPhotoUploadedPhoto,
  SPhotoUploadButton,
  SPhotoUploadWarn,
} from "./SPhotoUpload.styled";

export const PhotoUpload: FC<PhotoUploadProps> = ({
  onUpload,
  isError,
  blobSourcePath,
}) => {
  const { fileUploadHandler, uploadedPhoto } = useUploadHandler();

  const onUploadCallback = (file: File) => {
    fileUploadHandler(file);
    onUpload(file);
  };

  if (blobSourcePath && uploadedPhoto) {
    return (
      <SPhotoUpload isError={isError}>
        <SPhotoUploadedPhoto src={blobSourcePath} role="img" />
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
      <img className="camera__" src="assets/svg/camera.svg" alt="" />
      <SPhotoUploadText isError={isError}>
        ჩააგდე ან ატვირთე ლეპტოპის ფოტო
        {isError && <SPhotoUploadWarn />}
      </SPhotoUploadText>
      <SPhotoUploadButton>ატვირთე</SPhotoUploadButton>
    </SPhotoUpload>
  );
};
