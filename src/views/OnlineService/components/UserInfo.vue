<!--  -->
<template>
  <div class="user-info-block" v-show="show">
    <div class="user-info-top">
      <h3 class="left">用户信息</h3>
      <i class="el-icon-close close right" @click="onCloseInfo"></i>
    </div>
    <div class="user-info-bd">
      <img
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
      <div class="user">
        <span class="username">吾不甘堕落</span>
        <span class="sign">失败是成功之母</span>
      </div>
    </div>
    <div class="user-info-order clearfix">
      <h3>用户订单</h3>
      <div class="order-block">
        <div class="order-item" v-for="i in 6" :key="i">
          <div class="order-id">
            <span>订单编号:</span>
            <span class="id">468679642</span>
          </div>
          <div class="item-main clearfix">
            <div class="order-img left">
              <img
                src="https://yanxuan-item.nosdn.127.net/1050d0f2ae9ca1cfe0c9df4c0477e7ea.jpg"
              />
              <img
                src="https://yanxuan-item.nosdn.127.net/712e114f766a31d9b8e1ab22dde10574.jpg"
              />
            </div>
            <div class="order-status">
              <span class="packge">包裹1</span>
              <span class="status">待付款</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onCloseInfo() {
      this.$emit('handleShow', false)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.user-info-block {
  display: inline-block;
  width: calc(100% - 840px);
  height: 100%;
  border-radius: 16px;
  background-color: #fff;
  .user-info-top {
    height: 53px;
    padding: 16px 10px;
    overflow: hidden;
    h3 {
      font-size: 16px;
    }
  }
  .user-info-bd {
    height: 150px;
    padding: 10px 0 20px;
    border-bottom: 1px solid #cccc22;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    .user {
      margin-top: 12px;
      font-size: 12px;
      .username {
        font-size: 13px;
        margin-bottom: 6px;
      }
      .sign {
        color: #b7b7b7;
      }
      span {
        display: block;
      }
    }
  }
  .user-info-order {
    height: calc(100% - 53px - 150px);
    padding: 0 16px;
    overflow: auto;
    h3 {
      font-size: 16px;
      padding: 10px;
    }
    .order-block {
      .order-item {
        position: relative;
        .order-id {
          padding: 16px 0;
          text-align: justify;
          .id {
            margin-left: 10px;
          }
        }
        .item-main {
          padding: 10px 0;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          .order-img {
            img {
              width: 80px;
              height: 80px;
              margin-right: 6px;
            }
          }
        }
        .order-status {
          position: absolute;
          right: 0;
          top: 50%;
          span {
            display: block;
          }
          .status {
            margin-top: 6px;
            color: #f82735;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>