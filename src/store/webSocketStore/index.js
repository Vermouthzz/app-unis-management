
const wsModule = {
  state: () => ({
    socket: null,
    socket_id: '',
    receive_msg: {}
  }),

  mutations: {
    onInitWs(state, payload) {
      state.socket = new WebSocket(payload)
      state.socket.onmessage = (e) => {
        const msg = JSON.parse(e.data);
        console.log(msg);
        state.receive_msg = msg
      }
    },
    onClose(state) {
      state.socket.close()
    },
    onSendMsg(state, payload) {
      state.socket.send(payload)
    }
  },

  actions: {
    onInitWs(state, payload) {
      state.commit('onInitWs', payload)
    },
    onClose(state) {
      state.commit('onClose')
    },
    onSendMsg(state, payload) {
      state.commit('onSendMsg', payload)
    },
  }
}

export default wsModule