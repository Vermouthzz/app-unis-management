<!-- 积分管理 -->
<template>
  <div class="integral-block flex">
    <div class="left-detail">
      <div class="header">
        <div class="header-left flex-a">
          <i class="el-icon-search"></i>
          <span>查询用户积分</span>
          <div class="search">
            <el-input placeholder="用户账户/用户名"></el-input>
          </div>
        </div>
        <div class="header-right"></div>
      </div>
      <div class="integral-block"></div>
    </div>
    <div class="right-exchange">
      <div class="change-block flex">
        <div class="left-user">
          <img src="" alt="" />
          <div class="username">风神温迪</div>
        </div>
        <div class="right-item">
          <div class="change-detail">兑换红包</div>
          <div class="change-time">刚刚</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
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
.integral-block {
  height: 100%;
  .left-detail {
    width: 70%;
    height: 100%;
    margin-right: 16px;
    background-color: skyblue;
  }
  .right-exchange {
    flex: 1;
    height: 100%;
    padding: 0 12px;
    background-color: pink;
    .change-block {
      justify-content: space-between;
      .left-user {
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .username {
          color: #ccc;
          font-size: 12px;
        }
      }
      .right-item {
        .change-detail {
        }
        .change-time {
        }
      }
    }
  }
}
</style>