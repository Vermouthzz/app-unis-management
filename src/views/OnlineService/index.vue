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
      <div class="list-right">
        <div class="right-header">
          <div class="user-left">
            <img
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              alt=""
            />
            <div class="user-status">
              <span class="username">吾不甘堕落</span>
              <span class="status">在线</span>
            </div>
          </div>
          <div class="chat-setting"></div>
        </div>
        <div class="right-main">
          <div class="chat-main">
            <div class="chat-times">2024.1.4 8.41</div>
            <div class="chat-block">
              <img
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                class="left"
              />
              <div class="user-message left-message">
                <span>
                  css怎么实现聊天气泡超出width时自动换行
                  在CSS中，可以使用word-wrap属性来控制文本的换行。当设置为break-word时，如果单词太长而无法适应容器的宽度，就会将其断开并放到下一行显示。</span
                >
              </div>
            </div>
            <div class="chat-block">
              <img
                class="left"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                alt=""
              />
              <div class="user-message left-message">hhhhhhhhhhhh</div>
            </div>
            <div class="chat-block right">
              <img
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                class="right"
              />
              <div class="user-message right-message">
                <span>css怎么实现聊天</span>
              </div>
            </div>
          </div>
          <div class="send-form">
            <el-input placeholder="写下你的留言" v-model="sendValue"></el-input>
            <div class="btn">
              <el-button class="files" icon="el-icon-paperclip"></el-button>
              <el-button @click="handleSend">发送</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-info-block">
      <div class="user-info-top">
        <h3 class="left">用户信息</h3>
        <i class="el-icon-close close right"></i>
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
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      sendValue: "",
      socket: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSend() {
      this.socket.emit("sendMessage", { text: this.sendValue });
      this.sendValue = "";
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.socket = io("http://localhost:3001");
  },
  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  },
};
</script>
<style lang='scss' scoped>
.service-block {
  height: 100%;
  .online-status {
    width: 9px;
    height: 9px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: #22ca5e;
  }
  .info-list {
    float: left;
    width: 820px;
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
    .list-right {
      width: calc(100% - 260px);
      height: 100%;
      float: left;
      padding: 16px 12px;

      // background-color: skyblue;
      .right-header {
        margin-bottom: 12px;
        overflow: hidden;
        .user-left {
          float: left;
          img {
            width: 32px;
            height: 32px;
            margin: 2px 0;
            border-radius: 50%;
          }
          .user-status {
            float: right;
            margin-left: 10px;
            text-align: justify;
            span {
              display: block;
            }
            .username {
              font-size: 12px;
              margin-bottom: 4px;
            }
            .status {
              // color: #d0d0d0;
              color: red;
              font-size: 11px;
            }
          }
        }
        .chat-setting {
          float: right;
        }
      }
      .right-main {
        width: 100%;
        height: calc(100% - 52px);
        padding: 12px 10px;
        border-radius: 16px;
        background-color: #f5f8ff;
        .chat-main {
          height: calc(100% - 54px);
          overflow: auto;
          .chat-times {
            padding: 10px 0;
            color: #c3c6cd;
            text-align: center;
          }
          .chat-block {
            margin-bottom: 16px;
            overflow: hidden;
            img {
              width: 32px;
              height: 32px;
              margin-top: 4px;
              border-radius: 50%;
            }
            .user-message {
              max-width: 84%;
              width: fit-content;
              line-height: 24px;
              padding: 10px;
              background-color: #fff;
              text-align: justify;
              overflow-wrap: break-word;
              //文字超出width时，自动换行
              // overflow-wrap: break-word; 或者 word-wrap: break-word;,这两种写法效果相同；
            }
            .right-message {
              float: right;
              margin-right: 10px;
              border-radius: 12px 0 12px 12px;
            }
            .left-message {
              float: left;
              margin-left: 10px;
              border-radius: 0 12px 12px 12px;
            }
          }
        }
        .send-form {
          height: 44px;
          line-height: 44px;
          margin-top: 10px;
          padding: 0 20px 0 8px;
          background-color: #fff;
          border-radius: 12px;
          overflow: hidden;
          ::v-deep .el-input {
            float: left;
            width: 308px;
          }
          ::v-deep .el-input__inner {
            border: none;
            font-size: 13px;
            padding-right: 8px;
          }
          .btn {
            float: right;
            .files {
              border: none;
              ::v-deep .el-icon-paperclip {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
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
}
</style>