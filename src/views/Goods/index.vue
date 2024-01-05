<!--  -->
<template>
  <div class="goods-block">
    <div class="goods-info">
      <el-table :data="tableData" style="width: 100%" height="598">
        <el-table-column fixed prop="date" label="商品名称" width="150">
        </el-table-column>
        <el-table-column prop="name" label="商品图" width="120">
        </el-table-column>
        <el-table-column prop="province" label="商品价格" width="120">
        </el-table-column>
        <el-table-column prop="city" label="零售价格" width="120">
        </el-table-column>
        <el-table-column prop="address" label="商品种类" width="100">
        </el-table-column>
        <el-table-column prop="address" label="商品品牌" width="100">
        </el-table-column>
        <el-table-column prop="address" label="商品数量" width="100">
        </el-table-column>
        <el-table-column prop="zip" label="是否上架" width="120">
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>
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
.goods-block {
  height: 100%;
  background-color: #fff;
  .goods-info {
  }
  .pagination {
    margin-top: 6px;
    ::v-deep .el-pagination {
      float: left;
    }
  }
}
</style>