<template>
  <div class="order-block">
    <div class="search-block flex">
      <div class="item-box flex">
        <el-select v-model="statusVal" placeholder="按订单状态">
          <el-option
            v-for="item in status"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button>搜索</el-button>
      </div>
      <div class="item-box">
        <el-input v-model="orderId" placeholder="按订单号搜索"></el-input>
        <el-button>搜索</el-button>
      </div>
    </div>
    <div class="order-info">
      <el-table :data="orderData" style="width: 100%" height="578">
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
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="retail_price"
          align="center"
          label="订单状态"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="brand"
          align="center"
          label="支付方式"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="goods_num"
          align="center"
          label="商品数量"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="goods_pull"
          align="center"
          label="应付金额"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="goods_pull"
          align="center"
          label="总金额"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="goods_category"
          align="center"
          label="用户信息"
          width="100"
        >
        </el-table-column>
        <el-table-column prop="img" align="center" label="收件地址" width="120">
          <!-- <template slot-scope="scope">
            <div class="address">{{scope.row}}</div>
          </template> -->
        </el-table-column>
        <el-table-column align="center" label="操作" width="160">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
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
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      orderData: [],
      status: [
        { label: "待付款", value: "0" },
        { label: "待发货", value: "1" },
        { label: "已收货", value: "2" },
        { label: "待评价", value: "3" },
      ],
      statusVal: "",
      orderId: "",
    };
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
.order-block {
  height: 100%;
  .search-block {
    padding: 10px;
    background-color: #fff;
    .item-box {
      flex: 1;
      ::v-deep .el-input {
        width: 126px;
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