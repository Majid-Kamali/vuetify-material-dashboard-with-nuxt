export const state = () => ({

    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: process.browser
      ? localStorage.getItem('setting-barImage')
      : 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg',
    color: process.browser
      ? localStorage.getItem('setting-color')
      : '#9C27b0',
    mode: process.client ? localStorage.getItem('setting-mode') : true,
    expandSideBar: process.client
      ? localStorage.getItem('setting-expand-sidebar')
      : true,
    drawer: null,
    showImage: process.client
    ? localStorage.getItem('setting-showImage')
    : true,
})

export const mutations = {
  Save_BarImage(state, barImage) {
    state.barImage = barImage || 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg'
    if (process.browser) {
      localStorage.setItem('setting-barImage', barImage ||
      'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg')
    }else{
        this.$cookies.set('setting-barImage', barImage)
    }
  },
  Save_ShowImage(state, showImage) {
    state.showImage = showImage || true
    if (process.browser) {
      localStorage.setItem('setting-showImage', showImage || true)
    }else{
        this.$cookies.set('setting-showImage', showImage)
    }
  },
  Save_Mode(state, mode) {
    state.mode = mode || true
    if (process.browser) {
      localStorage.setItem('setting-mode', mode || true)
    }else{
        this.$cookies.set('setting-mode', mode)
    }
  },
  Save_Expand_Sidebar(state, expandSideBar) {
    state.expandSideBar = expandSideBar || true
    if (process.browser) {
      localStorage.setItem('setting-expand-sidebar', expandSideBar || true)
    }else{
        this.$cookies.set('setting-expand-sidebar', expandSideBar)
    }
  },
  Save_Color(state, color) {
    state.color = color || '#9C27b0'
    if (process.browser) {
        localStorage.setItem('setting-color', color || '#9C27b0')
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
    commit('Save_Color', color)
  },
  Save_BarImage({ commit }, barImage) {
    commit('Save_BarImage', barImage)
  },
  Save_ShowImage({ commit }, showImage) {
    commit('Save_ShowImage', showImage)
  },
  Save_Mode({ commit }, mode) {
    commit('Save_Mode', mode)
  },
  Save_Expand_Sidebar({ commit }, expandSideBar) {
    commit('Save_Expand_Sidebar', expandSideBar)
  },
  SET_Drawer({ commit }, drawer) {
    commit('SET_Drawer', drawer)
  },
}

export const getters = {
  settingGetter: state => state,
}
