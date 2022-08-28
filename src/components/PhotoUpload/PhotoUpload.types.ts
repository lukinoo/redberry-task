export interface PhotoUploadProps {
  onUpload: (file: File) => void,
  isError?: boolean
}