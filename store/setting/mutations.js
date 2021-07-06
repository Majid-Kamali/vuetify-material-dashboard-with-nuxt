export function savePersonalsetting(state, data) {

  state.barColor = data.barColor;
  state.barImage = data.barImage;
  state.mode = data.mode;
  state.sidebarImage = data.sidebarImage;

  // localStorage.setItem('roles', data.roles);
  // localStorage.setItem('permissions', data.permissions);

}
export function setDrawer(state, payload) {
  // payload  return boolean data true or false
  state.drawer = payload
}
