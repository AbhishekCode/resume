import viewportSize from "viewport-size";

export function getHeight() {
  //Returns Browser inner height
  viewportSize.getHeight();
}
export function getWidth() {
  //Returns Browser innerWidth
  return viewportSize.getWidth();
}
