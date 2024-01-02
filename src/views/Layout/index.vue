
<template>
  <div class="layout-block">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header :style="{height: '60px'}">
          <Header />
        </el-header>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  components: {
    Aside,
    Header,
    Main
  },
  data() {
    //这里存放数据
    return {

    }
  },
  computed: {},

  watch: {},

  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  updated() { }, //生命周期 - 更新之后
}
</script>

<style lang='scss' scoped>
.layout-block {
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #fff;
  ::v-deep .el-header {
    padding: 0;
  }
  ::v-deep .el-main {
    padding: 0;
  }
}
</style>