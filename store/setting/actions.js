export function saveColor({commit}, color){
  commit('saveColor', color)
}

export function saveBarImage({commit}, barImage){
  commit('saveBarImage', barImage)
}

export function saveMode({commit}, mode){
  commit('saveMode', mode)
}

export function saveShowImg({commit}, showImg){
  commit('saveShowImg', showImg)
}

export function setDrawer({commit}, drawer){
  commit('setDrawer', drawer)
}
