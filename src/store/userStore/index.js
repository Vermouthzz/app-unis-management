const userModule = {
  state: () => ({
    userinfo: {}
  }),
  mutations: {
    setUserInfo(state, payload) {
      state.userinfo = payload
    }
  },
  actions: {
    setUserInfo(state, val) {
      state.commit('setUserInfo', val)
    }
  }
}