export function saveColor(state, color) {

  state.color = color;
  if (process.browser) {
    localStorage.setItem('saveColor', color)
  }

}
export function saveBarImage(state, barImage) {

  state.barImage = barImage;
  if (process.browser) {
    localStorage.setItem('saveBarImage', barImage)
  }
}
export function saveMode(state, mode) {

  state.mode = mode;
  if (process.browser) {
    localStorage.setItem('saveMode', mode)
  }
}

export function saveExpandSidebar(state, expandSideBar) {

  state.expandSideBar = expandSideBar;
  if (process.browser) {
    localStorage.setItem('saveExpandSidebar', expandSideBar)
  }

}

export function setDrawer(state, payload) {

  state.drawer = payload
}
