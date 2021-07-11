export const state = () => ({
   
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: process.browser
      ? localStorage.getItem('setting-barImage')
      : 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg',
    color: process.browser
      ? localStorage.getItem('setting-color')
      : '',
    mode: process.browser ? localStorage.getItem('setting-mode') : false,
    expandSideBar: process.browser
      ? localStorage.getItem('setting-expand-sidebar')
      : false,
    drawer: null,
    
  
})

export const mutations = {
  Save_BarImage(state, barImage) {
      console.log('mutations barImage',barImage);
    state.barImage = barImage
    if (process.browser) {
      localStorage.setItem('setting-barImage', barImage)
    }else{
        this.$cookies.set('setting-barImage', barImage)
    }
  },
  Save_Mode(state, mode) {
    console.log('mutations mode',mode);
    state.mode = mode
    if (process.browser) {
      localStorage.setItem('setting-mode', mode)
    }else{
        this.$cookies.set('setting-mode', mode)
    }
  },
  Save_Expand_Sidebar(state, expandSideBar) {
    console.log('mutations expandSideBar',expandSideBar);
    state.expandSideBar = expandSideBar
    if (process.browser) {
      localStorage.setItem('setting-expand-sidebar', expandSideBar)
    }else{
        this.$cookies.set('setting-expand-sidebar', expandSideBar)
    }
  },
  Save_Color(state, color) {
    console.log('mutations color',color);
    state.color = color
    if (process.browser) {
        localStorage.setItem('setting-color', color)
    }else{
        this.$cookies.set('setting-color', color)
    }
  },
  SET_BAR_IMAGE (state, payload) {
    state.barImage = payload
  },
  SET_Drawer(state, payload) {
    state.drawer = payload
  },
}

export const actions = {
  Save_Color({ commit }, color) {
    console.log('actions color', color)
    commit('Save_Color', color)
  },
  Save_BarImage({ commit }, barImage) {
    console.log('actions barImage', barImage)
    commit('Save_BarImage', barImage)
  },
  Save_Mode({ commit }, mode) {
    console.log('actions Save_Mode', mode)
    commit('Save_Mode', mode)
  },
  Save_Expand_Sidebar({ commit }, expandSideBar) {
    console.log('actions expandSideBar', expandSideBar)
    commit('Save_Expand_Sidebar', expandSideBar)
  },
  SET_Drawer({ commit }, drawer) {
    commit('SET_Drawer', drawer)
  },
}

export const getters = {
  settingGetter: state => state,
  SWITCH_DARK(state) {
    state.darkMode = !state.darkMode
  },
}
