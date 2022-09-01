export function getBinaryFromFile(file: File) {
  const r = new FileReader();
  return r.readAsBinaryString(file);
}
