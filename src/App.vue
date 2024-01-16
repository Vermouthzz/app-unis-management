<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener('beforeunload', this.onUnload)
    this.$store.dispatch('handleInit')
  },
  methods: {
    onUnload() {
      localStorage.removeItem('bread')
    }
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.onUnload)
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 2px; /* 滚动条宽度 */
}
</style>
