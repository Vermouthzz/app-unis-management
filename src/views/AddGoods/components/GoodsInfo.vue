<!--  -->
<template>
  <div class="first-step-block">
    <el-form
      :model="goodsInfo"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item class="fixedWidth" label="商品名称" prop="goods_name">
        <el-input v-model="goodsInfo.goods_name"></el-input>
      </el-form-item>

      <el-form-item label="商品分类">
        <el-cascader
          class="left"
          :options="options"
          :show-all-levels="false"
        ></el-cascader>
      </el-form-item>

      <el-form-item class="fixedWidth" label="商品描述">
        <el-input v-model="goodsInfo.goods_name"></el-input>
        <!-- <span>有多个描述用.分隔</span> -->
      </el-form-item>

      <el-form-item label="商品品牌">
        <el-select class="left" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品封面">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="goodsInfo.img" :src="goodsInfo.img" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      goodsInfo: {
        goods_name: "",
        category: "",
        img: "",
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
.first-step-block {
  .fixedWidth {
    width: 500px;
  }
  .avatar-uploader {
    width: 178px;
    ::v-deep .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409eff;
      }
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>