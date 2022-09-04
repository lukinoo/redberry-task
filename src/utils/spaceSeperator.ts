export const spaceSeperator = (price: number | undefined): string => {
  if(price === undefined){
    return ""
  }
  
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}