import { useState } from "react";

export const useUploadHandler = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);
  const [blobSource, setBlobSource] = useState<string>("")


  const fileUploadHandler = (file: File) => {
    setUploadedPhoto(file)
    setBlobSource(URL.createObjectURL(file))
  }


  return {uploadedPhoto, blobSource, fileUploadHandler}
};
