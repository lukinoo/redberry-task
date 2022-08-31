export const calculateFileSize = (file: File): string => {
  const { size } = file;

  return (size / 1024 ** 2).toFixed(2);
};
