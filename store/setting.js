export const state = () => ({

    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: process.browser
      ? localStorage.getItem('setting-barImage')
      : './setting/sidebar-1.jpg',
    color: process.client ? localStorage.getItem('setting-color') : '#9C27b0',
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
  SAVE_BARIMAGE(state, barImage) {
    state.barImage = barImage 
    if (process.browser) {
      localStorage.setItem('setting-barImage', barImage ||
      './setting/sidebar-1.jpg')
    }else{
        this.$cookies.set('setting-barImage', barImage)
    }
  },
  SAVE_SHOWIMAGE(state, showImage) {
    state.showImage = showImage 
    if (process.browser) {
      localStorage.setItem('setting-showImage', showImage)
    }else{
        this.$cookies.set('setting-showImage', showImage)
    }
  },
  SAVE_MODE(state, mode) {console.log('SAVE_MODE',mode);
    state.mode = mode 
    if (process.browser) {
      localStorage.setItem('setting-mode', mode )
    }else{
        this.$cookies.set('setting-mode', mode)
    }
  },
  SAVE_EXPAND_SIDEBAR(state, expandSideBar) {
    state.expandSideBar = expandSideBar 
    if (process.browser) {
      localStorage.setItem('setting-expand-sidebar', expandSideBar)
    }else{
        this.$cookies.set('setting-expand-sidebar', expandSideBar)
    }
  },
  SAVE_COLOR(state, color) {console.log('SAVE_COLOR',color);
    state.color = color 
    if (process.browser) {
        localStorage.setItem('setting-color', color )
    }else{
        this.$cookies.set('setting-color', color)
    }
  },
  SET_BAR_IMAGE (state, payload) {
    state.barImage = payload
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload
  },
}

export const actions = {
  SAVE_COLOR({ commit }, color) {
    commit('SAVE_COLOR', color)
  },
  SAVE_BARIMAGE({ commit }, barImage) {
    commit('SAVE_BARIMAGE', barImage)
  },
  SAVE_SHOWIMAGE({ commit }, showImage) {
    commit('SAVE_SHOWIMAGE', showImage)
  },
  SAVE_MODE({ commit }, mode) {
    commit('SAVE_MODE', mode)
  },
  SAVE_EXPAND_SIDEBAR({ commit }, expandSideBar) {
    commit('SAVE_EXPAND_SIDEBAR', expandSideBar)
  },
  SET_DRAWER({ commit }, drawer) {
    commit('SET_DRAWER', drawer)
  },
}

export const getters = {
  SETTING_GETTER: state => state,
}
