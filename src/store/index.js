import Vue from 'vue'
import Vuex from 'vuex'
import List from '../hooks/useRouteLsit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeList: [
      { name: '首页', path: '/', active: true }
    ]
  },
  getters: {
  },
  mutations: {
    switchRouteList(state, payload) {
      let arrIndex = -1
      state.routeList.forEach((item, index) => {
        item.active = false
        if (Object.values(item).includes(payload)) {
          arrIndex = index
        }
      })
      console.log(arrIndex);
      if (arrIndex != -1) {
        state.routeList[arrIndex].active = true
      } else {
        const item = List.find(item => Object.values(item).includes(payload))
        console.log(item);
        state.routeList.push(item)
        console.log(state.routeList);
      }
    },
    handleDelete(state, payload) {

    }
  },
  actions: {
    switchRouteList(state, val) {
      state.commit('switchRouteList', val)
    }
  },
  modules: {
  }
})
