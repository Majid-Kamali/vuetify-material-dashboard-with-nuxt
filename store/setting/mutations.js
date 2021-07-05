export function  savePersonalsetting(state, data){

  state.barColor   = data.barColor;
  state.barImage  = data.barImage;
  state.mode  = data.mode;
  state.sidebarImage  = data.sidebarImage;

  // localStorage.setItem('roles', data.roles);
  // localStorage.setItem('permissions', data.permissions);

}
