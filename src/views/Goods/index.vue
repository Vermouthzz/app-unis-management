<!--  -->
<template>
  <div class="goods-block">
    <div class="goods-info">
      <el-table :data="goodsData" style="width: 100%" height="598">
        <el-table-column
          fixed
          align="center"
          prop="goods_name"
          label="商品名称"
          width="120"
        >
          <template slot-scope="scope">
            <div class="goods_name">{{ scope.row.goods_name }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="img" align="center" label="商品图" width="150">
          <template slot-scope="scope">
            <img class="goods_img" :src="scope.row.goods_img" />
          </template>
        </el-table-column>
        <el-table-column
          prop="goods_price"
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
          prop="goods_category"
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
          prop="goods_num"
          align="center"
          label="商品数量"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="goods_pull"
          align="center"
          label="是否上架"
          width="120"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.goods_pull"
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
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getGoodsListAPI } from "@/api/goods.js";
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      tablePage: {
        pageSize: 6,
        pageNum: 1,
        total: 70,
      },
      goodsData: [],
      result: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    tablePage: {
      handler: function(newVal, oldVal) {
        this.goodsData.splice(0, )
        const start = (this.tablePage.pageNum - 1) * this.tablePage.pageSize
        const end = start + this.tablePage.pageSize
        this.goodsData.push(...this.result.slice(start, end))
      },
      deep: true
    }
  },
  //方法集合
  methods: {
    handleEdit(index, row) {},
    onPullChange(index, row) {
      console.log(index, row.goods_id);
    },
    handleDelete(index, row) {},
    onPageChange(page) {
      this.tablePage.pageNum = page
    },
    async getGoodsList() {
      const res = await getGoodsListAPI();
      this.result.push(...res.result);
      this.goodsData.push(...this.result.slice(0, this.tablePage.pageSize))
      this.tablePage.total = this.result.length
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getGoodsList();
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
    .goods_name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      //要显示的行数 2
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .goods_img {
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
  .pagination {
    margin-top: 6px;
    ::v-deep .el-pagination {
      float: left;
    }
  }
}
</style>