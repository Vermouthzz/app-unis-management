<template>
  <div class="aside-block flex-c">
    <div class="admin-title flex">
      <h4>网易严选后台管理</h4>
    </div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      :collapse="isCollapse"
      :router="true"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu item-icon"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <i class="el-icon-s-order item-icon"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-goods item-icon"></i>
          <span slot="title">商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item class="group-menu-item" index="/goods"
            >商品列表</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item class="group-menu-item" index="/add"
            >添加商品</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item class="group-menu-item" index="/brand"
            >品牌管理</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/online">
        <i class="el-icon-setting item-icon"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      isCollapse: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleOpen(key, keyPath) {
      // this.$router.push(key)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(path) {
      this.$store.dispatch("switchRouteList", path);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.aside-block {
  // height: calc(100vh - 34px);
  height: 100%;
  border-radius: 16px;
  .admin-title {
    padding: 10px 0 10px 10px;
    h4 {
      line-height: 42px;
      margin-left: 5px;
    }
    &::before {
      content: "";
      display: block;
      width: 42px;
      height: 42px;
      background: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-component/p/20170601/style/img/x2/icon-yxtop-s4b76696bd6-801b2550ab.png?imageView&type=webp");
      background-position: 0px -592px;
      background-size: 287px;
    }
  }
  ::v-deep .el-menu {
    // height: calc(100vh - 42px);
    flex: 1;
    border-radius: 0 0 0 16px;
  }
  .item-icon {
    margin: 0 24px 0 16px;
  }
  .group-menu-item {
    text-align: center;
  }
  ::v-deep .el-submenu {
    // padding: ;
    text-align: justify;
  }
  ::v-deep .el-menu-item {
    text-align: justify;
    &.is-active {
      color: #fff;
      background-color: #cc9756;
    }
    &:hover {
      background-color: #aedd81;
    }
  }
}
</style>