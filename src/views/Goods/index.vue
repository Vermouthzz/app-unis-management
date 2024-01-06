<!--  -->
<template>
  <div class="goods-block">
    <div class="goods-info">
      <el-table :data="goodsData" style="width: 100%" height="598">
        <el-table-column
          fixed
          align="center"
          prop="name"
          label="商品名称"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="img" align="center" label="商品图" width="150">
          <template slot-scope="scope">
            <img class="goods_img" :src="scope.row.img" />
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          align="center"
          label="商品价格"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="retail_price"
          align="center"
          label="零售价格"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="category"
          align="center"
          label="商品种类"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="brand"
          align="center"
          label="商品品牌"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="count"
          align="center"
          label="商品数量"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="pull"
          align="center"
          label="是否上架"
          width="120"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.pull"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="onPullChange($event, scope.row)"
            >
            </el-switch>
          </template>
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
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="tablePage.pager"
        :page-size="tablePage.pageSize"
        :total="tablePage.total"
        @current-change="onPageChange"
        @size-change="onSizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getGoodsListAPI} from '@/api/goods.js'
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      tablePage: {
        pageSize: 7,
        pageNum: 1,
        total: 70,
      },
      goodsData: [
        {
          name: "嘿嘿嘿",
          img: "https://yanxuan-item.nosdn.127.net/067ff9d40d446872a5864d828125c40f.jpg",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: true,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
        {
          name: "嘿嘿嘿",
          img: "",
          price: 100,
          retail_price: 79,
          category: "零售",
          brand: "兰蔻",
          count: 999,
          pull: false,
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleEdit(index, row) {},
    onPullChange(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {},
    onPageChange(page) {
      console.log(page)
    },
    onSizeChange(e) {
      console.log(e);
    },
    async getGoodsList() {
      const res = await getGoodsListAPI()
      console.log(res);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getGoodsList()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.goods-block {
  height: 100%;
  background-color: #fff;
  .goods-info {
    .goods_img {
      width: 50px;
      height: 50px;
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
  .pagination {
    margin-top: 6px;
    ::v-deep .el-pagination {
      float: left;
    }
  }
}
</style>