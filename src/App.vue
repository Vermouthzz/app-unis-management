<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getUserInfoAPI } from "@/api/user";
export default {
  created() {
    window.addEventListener("beforeunload", this.onUnload);
    this.$store.dispatch("handleInit", this.$route.path);
    this.getUserInfo();
  },
  methods: {
    onUnload() {
      localStorage.removeItem("bread");
    },
    async getUserInfo() {
      const res = await getUserInfoAPI();
      this.$store.dispatch("setUserInfo", res.result);
    },
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.onUnload);
    //断开websocket
    this.$store.dispatch('onClose')
  },
};
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
