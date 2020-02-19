export const minuteToHour = (n) => {
  const num = n;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes)-1;
  return rhours + "h " + rminutes + "min";
}