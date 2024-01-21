<!-- 用户聊天界面 -->
<template>
  <div class="user-chat-block">
    <!-- <div class="list-right">
      <div class="right-header">
        <div class="user-left">
          <img :src="singleInfo.avator" @click="onShowInfo" />
          <div class="user-status">
            <span class="username">{{ singleInfo.nickname }}</span>
            <span class="status">在线</span>
          </div>
        </div>
        <div class="chat-setting"></div>
      </div>
      <div class="right-main">
        <div class="chat-main">
          <div class="chat-times">2024.1.4 8.41</div>
          <div class="chat-block" v-for="item in chatinfo" :key="item.chat_id">
            <img :src="singleInfo.avator" class="left" @click="onShowInfo" />
            <div class="user-message left-message">
              <span>{{ item.message }}</span>
            </div>
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
    </div> -->
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
.user-chat-block {
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
</style>