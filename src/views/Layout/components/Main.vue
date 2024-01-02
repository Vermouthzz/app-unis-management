<!--  -->
<template>
  <div class="main-block">
    <div class="breadcurmb flex">
      <div class="bread-left">
        <i class="el-icon-arrow-left i-size"></i>
      </div>
      <div class="bread-mid">
        <Breadcrumb />
      </div>
      <div class="bread-right flex">
        <i
          class="el-icon-arrow-right i-size"
          :style="{ marginLeft: '10px' }"
        ></i>
        <i class="el-icon-arrow-down i-size"></i>
      </div>
    </div>
    <div class="main-body">
      <router-view />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Breadcrumb },
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
.main-block {
  height: 100%;
  background-color: #f6f6f6;
  border-radius: 0 0 16px 0;
  .breadcurmb {
    height: 40px;
    padding: 0 12px;
    border: 1px solid whitesmoke;
    background-color: #fff;
    .bread-left {
      flex: 0 1 30px;
    }
    .bread-mid {
      flex: 1;
    }
    .bread-right {
      flex: 0 1 70px;
      margin-right: 5px;
      justify-content: space-between;
    }
    .i-size {
      font-size: 16px;
      text-align: center;
      line-height: 40px;
    }
  }
  .main-body {
    height: calc(100% - 40px);
    padding: 12px;
  }
}
</style>