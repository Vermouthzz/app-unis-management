<!-- 添加商品View -->
<template>
  <div class="add-goods-block">
    <div class="main">
      <div class="step-top">
        <div class="step-item">商品基本信息填写</div>
      </div>
      <div class="goods-info">
        <template v-if="active == 0">
          <!-- <GoodsInfo /> -->
          <GoodsSku />
        </template>
        <template v-else-if="active == 1">
          <GoodsPromotion />
        </template>
        <template v-else-if="active == 2">
          <GoodsSku />
        </template>
        <!-- <el-form-item label="商品轮播"> 
            <el-upload
              class="avatar-uploader"
              :multiple="true"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="goodsInfo.img" :src="goodsInfo.img" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item> -->
      </div>
      <div class="goods-footer">
        <el-button type="primary" @click="submitForm()">{{
          active == 3 ? "立即添加" : "下一步"
        }}</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsPromotion from "./components/GoodsPromotion.vue";
import GoodsInfo from "./components/GoodsInfo.vue";
import GoodsSku from "./components/GoodsSku.vue";
const stepItems = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { GoodsPromotion, GoodsInfo, GoodsSku },
  data() {
    GoodsInfo; //这里存放数据
    return {
      active: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleAvatarSuccess(res, file) {
      this.goodsInfo.img = URL.createObjectURL(file.raw);
      console.log(this.goodsInfo.img);
    },
    submitForm() {
      if (this.active == 3) {
      } else {
        this.active++;
      }
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
.add-goods-block {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .main {
    position: relative;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    padding: 20px 80px 20px 40px;
    border: 1px solid #efefef;
    border-radius: 16px;
    // background-color: pink;
    overflow: auto;
    ::v-deep .el-step__title {
      text-align: center;
    }
    .second {
    }
    .third {
      ::v-deep .el-step__line {
        margin-right: -36px !important;
      }
    }
    .first ::v-deep .el-step__line {
      margin-left: 110px;
    }
    .step-top {
      .step-item {
        text-align: justify;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .goods-info {
      margin-top: 20px;
    }
    .goods-footer {
    }
  }
}
</style>