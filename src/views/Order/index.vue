<template>
  <div class="order-block flex-c">
    <div class="search-block">
      <div class="title">
        <div class="left">
          <i class="el-icon-search"></i>
          <span class="search">筛选搜索</span>
        </div>
        <div class="right">
          <el-button>重置</el-button>
          <el-button>搜索</el-button>
        </div>
      </div>
      <div class="search-item flex">
        <div class="item-box">
          <el-select v-model="statusVal" placeholder="按订单状态">
            <el-option
              v-for="item in status"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="item-box">
          <el-input placeholder="收件人姓名/手机号码"></el-input>
        </div>
        <div class="item-box">
          <el-input placeholder="订单编号"></el-input>
        </div>
      </div>
    </div>
    <div class="order-info">
      <el-table :data="orderData" style="width: 100%, height: 100%">
        <el-table-column
          fixed
          align="center"
          prop="order_id"
          label="订单号"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="goods_price"
          align="center"
          label="商品信息"
          width="180"
        >
          <template slot-scope="scope">
            <el-button @click="showGoodsInfo(scope.row.order_id)"
              >点击查看商品信息</el-button
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="order_status"
          align="center"
          label="订单状态"
          width="120"
        >
          <template slot-scope="scope">
            <span class="order-status">{{
              orderStatus(scope.row.order_status)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="pay_mode"
          align="center"
          label="支付方式"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="pay_price"
          align="center"
          label="实付金额"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="all_price"
          align="center"
          label="总金额"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="adress_name"
          align="center"
          label="收件人姓名"
          width="140"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.adress_name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="contact"
          align="center"
          label="联系方式"
          width="140"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.contact }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="img" align="center" label="收件地址" width="240">
          <template slot-scope="scope">
            <div class="address">
              {{ scope.row.address + scope.row.detail_adrs }}
            </div>
          </template>
          <span>江西省南昌市红谷滩区华东交通大学</span>
        </el-table-column>
        <el-table-column align="center" label="操作" width="160">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="plation">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <el-drawer
      title="商品信息"
      :visible.sync="drawer"
      :direction="'rtl'"
      :close="handleClose"
    >
      <drawer-item :goodsInfo="orderGoodsInfo"></drawer-item>
    </el-drawer>
    <edit-dialog
      :FormData="currentRow"
      :show="dialogVisible"
      @onClose="onDialogClose"
    ></edit-dialog>
  </div>
</template>

<script>
import { getOrderListAPI, getOrderGoodsInfo } from "@/api/order";
import DrawerItem from "./components/DrawerItem.vue";
import EditDialog from "./components/EditDialog.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { DrawerItem, EditDialog },
  data() {
    //这里存放数据
    return {
      drawer: false, //是否展示drawer
      dialogVisible: false,
      orderData: [],
      orderGoodsInfo: [],
      currentRow: {}, //当前编辑行的数据
      status: [
        { label: "已取消", value: "-1" },
        { label: "待付款", value: "0" },
        { label: "待发货", value: "1" },
        { label: "已收货", value: "2" },
        { label: "待评价", value: "3" },
      ],
      statusVal: "",
      orderId: "",
      page: {
        pageSize: 6,
        pageNum: 1,
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getOrderList() {
      const res = await getOrderListAPI(this.page);
      this.orderData.push(...res.result);
    },
    //生成order状态
    orderStatus(val) {
      const item = this.status.find((i) => i.value == val);
      return item ? item.label : "交易完成";
    },
    // 控制drawer关闭
    handleClose() {
      this.drawer = false;
    },
    // 展示drawer
    async showGoodsInfo(id) {
      this.drawer = true;
      const res = await getOrderGoodsInfo(id);
      this.orderGoodsInfo.length = 0;
      this.orderGoodsInfo.push(...res.result.goods_info);
      console.log(this.orderGoodsInfo);
    },
    handleEdit(index, val) {
      this.dialogVisible = true;
      Object.assign(this.currentRow, val);
      console.log(this.currentRow);
    },
    onDialogClose(val) {
      this.dialogVisible = val;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getOrderList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.order-block {
  height: 100%;
  .order-info {
    flex: 1;
    ::v-deep(.el-table) {
    }
    .plation {
      padding: 10px 0;
      text-align: justify;
      background-color: #fff;
    }
    .cancel {
      color: #d9d9d9;
    }
    .wait_pay {
      color: #b2b2b2;
    }
    .had_sent {
      color: #93c979;
    }
    .wait_send {
    }
  }
  .search-block {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    .title {
      width: 100%;
      padding: 16px;
      overflow: hidden;
      line-height: 38px;
      .search {
        margin-left: 6px;
      }
    }
    .item-box {
      margin-left: 50px;
      ::v-deep .el-input {
        width: 200px;
      }
      ::v-deep .el-button {
        margin-left: 6px;
        background-color: #cc9756;
        color: #fff;
      }
    }
  }
}
</style>