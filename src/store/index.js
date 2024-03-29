import Vue from 'vue'
import Vuex from 'vuex'
import List from '../hooks/useRouteLsit'

Vue.use(Vuex)

import userModule from './userStore/index'
import badgeModule from './headerBadgeStore/index'
import wsModule from './webSocketStore'

export default new Vuex.Store({
  state: {
    routeList: [
      { name: '首页', path: '/', active: true, close: false }
    ],
    isCollapes: true,
  },
  getters: {
  },
  mutations: {
    onReload(state) {
      const list = JSON.parse(localStorage.getItem('bread'))
      if (list) {
        state.routeList = list
      }
    },
    updateBread(state) {
      localStorage.setItem('bread', JSON.stringify(state.routeList))
    },
    switchRouteList(state, payload) {
      let arrIndex = -1
      state.routeList.forEach((item, index) => {
        item.active = false
        if (Object.values(item).includes(payload)) {
          arrIndex = index
        }
      })
      if (arrIndex != -1) {
        state.routeList[arrIndex].active = true
      } else {
        const item = List.find(item => Object.values(item).includes(payload))
        state.routeList.push(item)
      }
      localStorage.setItem('bread', JSON.stringify(state.routeList))
    },
    handleDelete(state, payload) {
      let i = -1
      state.routeList.forEach((item, index) => {
        if (Object.values(item).includes(payload)) {
          i = index
        }
      })
      state.routeList.splice(i, 1)
      localStorage.setItem('bread', JSON.stringify(state.routeList))
    },
    changeCollapse(state) {
      state.isCollapes = !state.isCollapes
    },

  },
  actions: {
    switchRouteList(state, val) {
      state.commit('switchRouteList', val)
    },
    handleReload(state, val) {
      state.commit('onReload', val)
    },
    handleInit(state, payload) {
      state.commit('onReload', payload)
    },
    onDelete(state, val) {
      state.commit('handleDelete', val)
    },
    changeCollapse(state) {
      state.commit('changeCollapse')
    },
  },
  modules: {
    userModule,
    badgeModule,
    wsModule
  }
})
