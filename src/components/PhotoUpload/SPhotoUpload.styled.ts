import styled from "styled-components";

export const SPhotoUpload = styled.div`
  width: 100%;
  height: 423px;
  border: 2px dashed #4386a9;
  border-radius: 18px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 50px;
  overflow: hidden;
  flex-direction: column;
  label{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    padding: 0 100%;
    z-index: 9;
    display: block;
    cursor: pointer;
    border: 1px solid red;
    height: 423px;
  }
`;

export const SPhotoUploadText = styled.span`
  width: 200px;
  text-align: center;
  line-height: 38px;
  color: #4386a9;
  font-weight: 500;
  font-size: 20px;
`;

export const SPhotoUploadButton = styled.button`
  background: #62a1eb;
  color: #fff;
  overflow: hidden;
  border: none;
  width: 233px;
  position: relative;
  height: 60px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 20px;
  outline: none;
  padding: 18px 60px;
`;

export const SPhotoUploadedPhoto = styled.img`
  width: 100%;
`