export default function () {
  return {
      
      barColor:  'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
      barImage: process.browser  ? (localStorage.getItem('saveBarImage') || 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg') : 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg',
      color: process.browser ? (localStorage.getItem('saveColor') || 'blue-grey lighten-4') : 'grey lighten-4',
      mode: process.browser ? (localStorage.getItem('saveMode') || false) : false,
      expandSideBar: process.browser ? (localStorage.getItem('saveExpandSidebar') || false) : false,
      drawer: null,
    
  }
 
}


