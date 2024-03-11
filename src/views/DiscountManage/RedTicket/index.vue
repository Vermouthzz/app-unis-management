<!-- 红包管理 -->
<template>
  <div class="ticket-block">
    <div class="main">
      <!-- 添加红包 -->
      <div class="add-ticket">
        <span class="title">添加红包</span>
        <el-form :inline="true" :model="ticketInfo" class="ticket-form">
          <el-form-item label="红包名称">
            <el-input v-model="ticketInfo.ticket_name"></el-input>
          </el-form-item>
          <el-form-item label="红包金额">
            <el-input v-model="ticketInfo.ticket_price"></el-input>
          </el-form-item>
          <el-form-item label="满减条件">
            <el-input v-model="ticketInfo.ticket_condition"></el-input>
          </el-form-item>
          <el-form-item label="条件名称">
            <el-input v-model="ticketInfo.condition_name"></el-input>
          </el-form-item>
          <el-form-item label="适用商品" class="left suit-item">
            <el-checkbox-group v-model="checkList">
              <el-checkbox
                v-for="item in suitOptions"
                :key="item"
                :label="item"
                >{{ item }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="is_exchange">是否可兑换</el-checkbox>
          </el-form-item>
          <el-form-item class="right submit">
            <el-button type="primary" @click="handleAddTicket"
              >添加新红包</el-button
            >
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 红包列表 -->
      <div class="ticket-list">
        <el-table :data="ticketList" style="width: 100%" height="470">
          <el-table-column
            fixed
            align="center"
            prop="ticket_name"
            label="红包名称"
            width="120"
          >
            <template slot-scope="scope">
              <div class="ticket_name">{{ scope.row.ticket_name }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="img"
            align="center"
            label="红包图片"
            width="150"
          >
            <template>
              <img
                class="ticket_img"
                src="https://yanxuan.nosdn.127.net/4333b709fac8932bbf86a48ebb022e34.png?type=webp&imageView&thumbnail=160x160&quality=75"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="ticket_price"
            align="center"
            label="红包价格"
            width="120"
          >
          </el-table-column>
          <el-table-column
            prop="ticket_condition"
            align="center"
            label="红包条件"
            width="120"
          >
          </el-table-column>

          <el-table-column
            prop="condition_name"
            align="center"
            label="红包条件"
            width="120"
          >
          </el-table-column>

          <el-table-column
            align="center"
            prop="ticket_name"
            label="适用商品"
            width="200"
          >
            <template slot-scope="scope">
              <div class="suit-goods">{{ scope.row.suit_goods }}</div>
            </template>
          </el-table-column>

          <el-table-column align="center" label="操作" width="160">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                class="delete-btn"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getTicketListAPI, addTicketAPI } from "@/api/ticket";

const suitOptions = ["礼品卡", "部分新品", "秒杀商品", "加购商品"];
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      ticketInfo: {
        ticket_name: "",
        ticket_price: "",
        ticket_condition: "",
        condition_name: "",
      },
      ticket_exchange: false,
      ticketList: [],
      checkList: [],
      suitOptions,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getTicketList() {
      const res = await getTicketListAPI();
      this.ticketList.push(...res.result);
    },
    async handleAddTicket() {
      try {
        await addTicketAPI(this.ticketInfo);
        this.onReset()
      } catch (err) {}
    },
    onReset() {
      for (let key in this.ticketInfo) {
        this.ticketInfo[key] = "";
      }
      this.ticket_exchange = false
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getTicketList();
  },
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.ticket-block {
  height: 100%;
  background-color: #fff;
  .main {
    height: auto;
    .add-ticket {
      border-bottom: 1px solid #ccc;
      .title {
        display: block;
        width: fit-content;
        padding: 10px;
        margin-left: 20px;
        color: #cc9756;
      }
      .ticket-form {
        overflow: hidden;
        .suit-item {
          margin-left: 16px;
        }
        .submit {
          margin-right: 30px;
        }
      }
    }
    .ticket-list {
      .suit-goods {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        //要显示的行数 2
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ticket_img {
        width: 60px;
        height: 60px;
      }
      .delete-btn {
        color: #fff;
        background-color: #cc9756;
        .cell {
          ::v-deep .el-button {
            float: left;
          }
        }
      }
    }
  }
}
</style>