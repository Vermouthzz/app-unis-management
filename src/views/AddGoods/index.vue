<!-- 添加商品View -->
<template>
  <div class="add-goods-block">
    <div class="main">
      <div class="step-top">
        <el-steps :active="active" finish-status="success">
          <el-step class="first" title="填写商品信息"></el-step>
          <el-step title="填写商品促销"></el-step>
          <el-step class="third" title="填写商品属性"></el-step>
          <el-step title="选择商品关联 "></el-step>
        </el-steps>
      </div>
      <div class="goods-info">
        <el-form
          :model="goodsInfo"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="goods_name">
            <el-input v-model="goodsInfo.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="category">
            <el-select v-model="goodsInfo.category" placeholder="选择商品分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
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
    return {
      active: 0,
      goodsInfo: {
        goods_name: "",
        category: "",
      },
      rules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
      },
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
.add-goods-block {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .main {
    width: 900px;
    height: 100%;
    margin: 0 auto;
    padding: 20px 80px 20px 40px;
    border: 1px solid #efefef;
    border-radius: 16px;
    // background-color: pink;
    ::v-deep .el-step__title {
      text-align: center;
    }
    .third {
      ::v-deep .el-step__line {
        margin-right: -36px !important;
      }
    }
    .first ::v-deep .el-step__line {
      margin-left: 110px;
    }
  }
}
</style>