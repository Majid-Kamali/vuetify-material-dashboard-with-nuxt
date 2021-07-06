export function getPersonalSetting(state) {

  if (process.server) {
    return state
  }
  if (process.browser) {
    return {
      barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
      barImage: localStorage.getItem('saveBarImage') || 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg',
      color: localStorage.getItem('saveColor') || 'blue-grey lighten-4',
      mode: localStorage.getItem('saveMode') || false,
      expandSideBar: localStorage.getItem('saveExpandSidebar') || false,
      drawer: null,
    }
  }


}
