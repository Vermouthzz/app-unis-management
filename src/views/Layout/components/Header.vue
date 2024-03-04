<!--  -->
<template>
  <div class="header-block flex-a">
    <div class="header-left">
      <div class="collapse-block" @click="$store.dispatch('changeCollapse')">
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <div class="header-right flex-a">
      <div class="online-service" @click="$router.push('/online')">
        <el-badge :value="badge" :max="99">
          <i class="el-icon-bell"></i>
        </el-badge>
      </div>
      <el-avatar :src="avator"></el-avatar>
      <span class="welcome">Hi,{{ nickname }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      badge: 10,
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      avator: (state) => state.userModule.userinfo.avator,
      nickname: (state) => state.userModule.userinfo.nickname,
    }),
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.header-block {
  height: 100%;
  justify-content: space-between;
  padding: 0 12px;
  .header-left {
    .collapse-block {
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        font-size: 24px;
      }
    }
  }
  .header-right {
    .online-service {
      margin-right: 30px;
      font-size: 20px;
    }
    .welcome {
      margin-left: 5px;
      font-size: 12px;
      font-weight: 550;
    }
  }
}
</style>