<template>
  <div class="service-block">
    <div class="info-list">
      <div class="list-left">
        <p class="title">在线客服</p>
        <div class="user-list">
          <div class="chat-info-block" v-for="i in 16" :key="i">
            <img
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              alt=""
            />
            <div class="chat-info">
              <div class="username">吾不甘堕落</div>
              <div class="chat">你好呀客服</div>
            </div>
            <div class="chat-time">
              <span class="time">30分钟</span>
              <span class="nums">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-info-block"></div>
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
.service-block {
  height: 100%;
  .info-list {
    float: left;
    width: 780px;
    height: 100%;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 16px;
    .list-left {
      float: left;
      width: 260px;
      height: 100%;
      border-right: 1px solid #dadada;
      .title {
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      .user-list {
        height: calc(100% - 40px);
        padding: 12px 10px 12px 12px;
        overflow: auto;
        .chat-info-block {
          overflow: hidden;
          margin-bottom: 12px;
          // background-color: skyblue;
          &:last-child {
            margin: 0;
          }
          img {
            float: left;
            width: 40px;
            height: 40px;
            margin: 4px 0;
            border-radius: 50%;
          }
          .chat-info {
            float: left;
            margin-left: 10px;
            .username {
              font-size: 13px;
            }
            .chat {
              margin-top: 10px;
              font-size: 12px;
              color: #919191;
            }
          }
          .chat-time {
            float: right;
            font-size: 12px;
            span {
              display: block;
            }
            .time {
              margin-bottom: 10px;
            }
            .nums {
              width: 16px;
              height: 16px;
              margin-left: auto;
              border-radius: 50%;
              background-color: #d84689;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .user-info-block {
    display: inline-block;
    width: calc(100% - 800px);
    height: 100%;
    background-color: pink;
  }
}
</style>