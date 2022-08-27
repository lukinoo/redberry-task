import { useState, ChangeEvent } from "react";

export const useUploadHandler = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);
  const [blobSource, setBlobSource] = useState<string>("")


  const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadedPhoto(e.target.files![0])
    setBlobSource(URL.createObjectURL(e.target.files![0]))
  }


  return {uploadedPhoto, blobSource, fileUploadHandler}
};
