import { useState } from "react";

export const useUploadHandler = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);


  const fileUploadHandler = (file: File) => {
    setUploadedPhoto(file)
  }


  return {uploadedPhoto, fileUploadHandler}
};
