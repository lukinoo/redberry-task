import styled from "styled-components";

interface PhotoUploadStyleProp {
  isError?: boolean;
}

export const SPhotoUpload = styled.div<PhotoUploadStyleProp>`
  width: 100%;
  height: 423px;
  grid-column: 1/3;
  border: ${(props) => {
    if (props.isError) {
      return `2px dashed #E52F2F`;
    }

    return `2px dashed #4386A9`;
  }};
  background: ${(props) => {
    if (props.isError) {
      return `#E52F2F29`;
    }

    return `transparent`;
  }};
  border-radius: 18px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 50px;
  overflow: hidden;
  flex-direction: column;
  label {
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
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
  .camera__ {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export const SPhotoUploadText = styled.span<PhotoUploadStyleProp>`
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 38px;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  color: ${(props) => {
    if (props.isError) {
      return `#E52F2F`;
    }

    return `#4386a9`;
  }};
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SPhotoUploadWarn = styled.img`
  width: 30px;
`;

export const SPhotoUploadedPhoto = styled.img`
  width: 100%;
`;

SPhotoUploadWarn.defaultProps = {
  src: "/assets/svg/warn.svg",
  alt: "",
};
