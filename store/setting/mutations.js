export function saveColor(state, color) {

  state.color = color;

}
export function saveBarImage(state, barImage) {

  state.barImage = barImage;

}
export function saveMode(state, mode) {

  state.mode = mode;

}
export function saveShowImg(state, showImg) {

  state.showImg = showImg;

}
export function setDrawer(state, payload) {
  // payload  return boolean data true or false
  state.drawer = payload
}
