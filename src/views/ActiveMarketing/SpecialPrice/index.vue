<!-- 特价管理 -->
<template>
  <div class="special-price-block">
    <header>商品特价填写</header>
    <div class="goods-produce">
      <div class="produce-header">添加商品</div>
      <div class="goods-info"></div>
    </div>
    <div class="relevance-goods">
      <div class="relevance-header">关联商品</div>
      <div class="relevance-main">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="商品名称" width="180">
          </el-table-column>
          <el-table-column prop="name" label="商品sku" width="180">
          </el-table-column>
          <el-table-column prop="address" label="销售价"> </el-table-column>
          <el-table-column prop="address" label="特价"> </el-table-column>
        </el-table>
      </div>
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
.special-price-block {
  height: 100%;
  padding: 0 16px;
  header {
    padding: 16px 0;
    text-align: left;
    font-weight: 550;
  }
  .goods-produce {
    background-color: #fff;
    .produce-header {
      padding: 16px;
      border-bottom: 1px solid #ccc;
      text-align: left;
    }
  }
  .relevance-goods {
    background-color: #fff;
    .relevance-header {
      padding: 16px;
      text-align: left;
    }
  }
}
</style>