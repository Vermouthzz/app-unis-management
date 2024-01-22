<template>
  <div class="service-block">
    <div class="info-list">
      <div class="list-left">
        <p class="title">在线客服</p>
        <div class="user-list">
          <div
            class="chat-info-block"
            v-for="i in allUserInfo"
            :key="i.socket_id"
            @click="onClick(i.socket_id)"
            :class="{ active_chat: activeId == i.socket_id }"
          >
            <img :src="i.avator" />
            <div class="chat-info">
              <div class="username">{{ i.nickname }}</div>
              <div class="chat">{{ i.msg }}</div>
            </div>
            <div class="chat-time">
              <span class="time">{{ i.time | timeFilter }}</span>
              <span class="nums" v-if="i.count">{{ i.count }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-right" v-if="singleInfo">
        <div class="right-header">
          <div class="user-left">
            <img :src="singleInfo.avator" @click="onShowInfo" />
            <div class="user-status">
              <span class="username">{{ singleInfo.nickname }}</span>
              <span class="status">{{ onlineStatus ? "在线" : "离线" }}</span>
            </div>
          </div>
          <div class="chat-setting"></div>
        </div>
        <div class="right-main">
          <div class="chat-main">
            <div class="chat-times">2024.1.4 8.41</div>
            <div
              class="chat-block"
              v-for="item in chatinfo"
              :key="item.chat_id"
            >
              <img
                v-if="item.send_id == activeId"
                :src="singleInfo.avator"
                :class="[item.send_id == sendId ? 'right' : 'left']"
                @click="onShowInfo"
              />
              <img v-else :src="avator" class="right" />
              <div
                class="user_message"
                :class="[
                  item.send_id == sendId ? 'right-message' : 'left-message',
                ]"
              >
                <span>{{ item.message }}</span>
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
      <div class="list-right" v-else>hhhhh</div>
    </div>
    <div class="user-info-block" v-show="is_show">
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
  </div>
</template>

<script>
import {
  getUserFriendAPI,
  getUserChatAPI,
  insertSendMessageAPI,
} from "@/api/online";
import { mapState } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      sendValue: "", //发送的消息
      socket: null,
      is_show: false, //是否展示用户信息
      allUserInfo: [], //所有聊天的对象列表
      activeId: 0, //正在聊天对象的socket_id
      chatinfo: [], //正在聊天对象的聊天记录
      userStatus: {}, //用户是否在线列表
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      sendId: (state) => state.userModule.userinfo.socket_id,
      avator: (state) => state.userModule.userinfo.avator,
    }),
    singleInfo() {
      return this.allUserInfo?.find((i) => i.socket_id == this.activeId);
    },
    //用户在线状态：在线/离线
    onlineStatus() {
      for (let key in this.userStatus) {
        if (key == this.activeId) {
          return this.userStatus[key];
        }
      }
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //初始化Socket
    initSocket() {
      console.log(this.sendId);
      const socketURL = `ws://localhost:3001?socket=${this.sendId}`;
      this.socket = new WebSocket(socketURL);
      this.socket.onmessage = this.socketOnMessage;
    },
    //接收消息
    socketOnMessage(e) {
      const msg = JSON.parse(e.data);
      if (msg.type == "online") {
        for (let key in this.userStatus) {
          this.$set(this.userStatus, key, null);
        }
        for (let key in msg.online) {
          this.$set(this.userStatus, key, msg.online[key]);
        }
      } else {
        this.chatinfo.push(msg);
      }
    },
    //发送消息
    async handleSend() {
      const now = new Date();
      const is_read = 0; //开始为未读状态
      const msg = {
        message: this.sendValue,
        chat_time: now.getTime(),
        send_id: this.sendId,
        receiver_id: this.activeId,
        is_read,
      };
      //判断用户是否在线
      const id = Object.keys(this.userStatus).find((i) => i == this.activeId);
      //在线则通过socket传输数据，并且上传到服务器
      if (id) {
        msg.is_read = 1; //设置为已读
        this.socket.send(JSON.stringify(msg));
      }
      //将记录上传到服务器
      const res = await insertSendMessageAPI(msg);

      this.chatinfo.push(msg);

      console.log(res);

      this.sendValue = "";
    },
    onCloseInfo() {
      this.is_show = false;
    },
    onShowInfo() {
      if (this.is_show) return;
      this.is_show = true;
    },
    async getUserFriend() {
      const res = await getUserFriendAPI(this.sendId);
      this.allUserInfo.push(...res.result);
    },
    async getChatInfo() {
      const res = await getUserChatAPI(this.activeId, this.sendId);
      this.chatinfo.length = 0;
      this.chatinfo.push(...res.result);
    },
    onClick(val) {
      this.activeId = val;
      this.getChatInfo();
    },
  },
  filters: {
    timeFilter(value) {
      const now = new Date();
      const time = new Date(Number(value));
      const t = now.getDate() - time.getDate();
      if (t < 1) {
        return time.toLocaleString();
      } else if (t == 1) {
        return "昨天";
      } else if (t == 2) {
        return "前天";
      } else {
        return time.toLocaleString();
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.initSocket();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getUserFriend();
  },
  beforeDestroy() {},
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

          &.active_chat {
            background-color: #ecf5ff;
          }
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
            text-align: justify;
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
              line-height: 16px;
              margin-left: auto;
              border-radius: 50%;
              background-color: #d84689;
              color: #fff;
              text-align: center;
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
            .user_message {
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