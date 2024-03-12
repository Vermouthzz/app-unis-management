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
              <!-- 最后一条消息 -->
              <div class="chat">{{ i.msg }}</div>
            </div>
            <div class="chat-time">
              <span class="time">{{ i.time | timeFilter }}</span>
              <!-- 未读消息个数 -->
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
    <UserInfo :show="is_show" @handleShow="(val) => (is_show = val)" />
  </div>
</template>

<script>
import {
  getUserFriendAPI,
  getUserChatAPI,
  insertSendMessageAPI,
  updateMessageStatusAPI,
} from "@/api/online";
import { mapState } from "vuex";
import UserInfo from "./components/UserInfo.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    UserInfo,
  },
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
      badge: (state) => state.badgeModule.badge,
      receiveMsg: (state) => state.wsModule.receive_msg,
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
  watch: {
    receiveMsg: {
      handler(newVal, oldVal) {
        if (newVal.type == "online") {
          //用户登录信息
          for (let key in this.userStatus) {
            this.$set(this.userStatus, key, null);
          }
          for (let key in newVal.online) {
            this.$set(this.userStatus, key, newVal.online[key]);
          }
        } else {
          const userinfo = this.allUserInfo.find(
            (item) => item.socket_id == newVal.send_id
          );
          if (this.activeId != newVal.send_id) {
            //说明用户未打开发送者聊天框
            userinfo.count++;
          } else {
            // 用户打开与发送者的聊天框
            this.chatinfo.push(newVal);
          }
          userinfo.msg = newVal.message;
        }
      },
      deep: true,
    },
  },
  //方法集合
  methods: {
    //初始化Socket
    initSocket() {
      const socketURL = `ws://localhost:3001?socket=${this.sendId}`;
      // this.socket = new WebSocket(socketURL);
      // this.socket.onmessage = this.socketOnMessage;
      this.$store.dispatch("onInitWs", socketURL);
    },
    //接收消息
    socketOnMessage(e) {
      const msg = JSON.parse(e.data);
      console.log(msg);
      if (msg.type == "online") {
        //用户登录信息
        for (let key in this.userStatus) {
          this.$set(this.userStatus, key, null);
        }
        for (let key in msg.online) {
          this.$set(this.userStatus, key, msg.online[key]);
        }
      } else {
        const userinfo = this.allUserInfo.find(
          (item) => item.socket_id == msg.send_id
        );
        if (this.activeId != msg.send_id) {
          //说明用户未打开发送者聊天框
          userinfo.count++;
        } else {
          // 用户打开与发送者的聊天框
          this.chatinfo.push(msg);
        }
        userinfo.msg = msg.message;
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
        this.$store.dispatch("onSendMsg", JSON.stringify(msg));
      }
      //将记录上传到服务器
      const res = await insertSendMessageAPI(msg);

      this.chatinfo.push(msg);
      this.sendValue = "";
      const userinfo = this.allUserInfo.find(
        (item) => item.socket_id == msg.receiver_id
      );
      userinfo.msg = msg.message;
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
    async onClick(val) {
      if (this.activeId == val) return;
      this.activeId = val;
      this.getChatInfo(); //获取聊天记录
      const userInfo = this.allUserInfo.find(
        (item) => item.socket_id == this.activeId
      ); //获取用户未读消息个数
      if (userInfo.count > 0) {
        //大于0则表示有未读消息
        this.$store.dispatch("handleBadge", this.badge - userInfo.count);
        await updateMessageStatusAPI(this.sendId, userInfo.socket_id);
        userInfo.count = 0;
      }
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
}
</style>