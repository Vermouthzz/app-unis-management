<!-- 品牌管理View -->
<template>
  <div class="brand-block">
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
          <el-input placeholder="品牌名称/关键字"></el-input>
        </div>
      </div>
    </div>
    <div class="brand-info">
      <el-table :data="orderData" style="width: 100%" height="auto">
        <el-table-column
          fixed
          align="center"
          prop="order_id"
          label="品牌编号"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="goods_price"
          align="center"
          label="品牌名称"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="goods_price"
          align="center"
          label="品牌图片"
          width="160"
        >
          <template slot-scope="scope">
            <img class="brand-img" :src="scope.row.img" alt="" />
          </template>
        </el-table-column>
        <el-table-column
          prop="retail_price"
          align="center"
          label="品牌描述"
          width="120"
        >
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
import { getBrandInfoAPI } from "@/api/brand";
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
  methods: {
    async getBrandInfo() {
      const res = await getBrandInfoAPI();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.brand-block {
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