export function resultScreenTrimmer(text: string){
  let trimmed:string = text.trim().slice(0, 12);
  return trimmed;
}