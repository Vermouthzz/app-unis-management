const badgeModule = {
  state: () => ({
    badge: 0
  }),
  mutations: {
    badgeChange(state, payload) {
      state.badge = payload
    },
    addBadge(state) {
      state.badge++
    }
  },
  actions: {
    handleBadge(state, payload) {
      state.commit('badgeChange', payload)
    },
    addBadge(state) {
      state.commit('addBadge')
    }
  }
}

export default badgeModule