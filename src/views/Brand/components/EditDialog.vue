<!--  -->
<template>
  <div class="edit-dialog-block">
    <el-dialog
      title="编辑订单信息"
      :visible.sync="show"
      :close-on-click-modal="false"
    >
      <el-form :model="FormData" label-position="left" class="edit-form">
        <div class="form-text">
          <el-form-item label="商品名称" class="form-name">
            <el-input
              v-model="FormData.brand_name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品描述" class="form-desc">
            <el-input
              v-model="FormData.brand_desc"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </div>
        <div class="form-img flex">
          <div class="img-block flex-a">
            <span class="img-label">商品图片</span>
            <el-upload
              action="http://127.0.0.1:3000/api/admin/img/brand"
              :on-success="handleAvatarSuccess"
              class="upload-img"
            >
              <img @click="onChangeImg" :src="FormData.brand_pic" alt="" />
            </el-upload>
          </div>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onClose">取 消</el-button>
        <el-button type="primary" @click="onClose">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    FormData: {
      type: Object,
      default: {},
    },
  },
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
    onClose() {
      this.$emit("onClose", false);
    },
    onChangeImg() {},
    handleAvatarSuccess(res, file) {
      console.log(res, file);
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
.edit-dialog-block {
  .edit-form {
    .form-text {
      ::v-deep(.el-form-item) {
        margin-bottom: 10px;
        text-align: justify;
      }
      .form-name {
        ::v-deep(.el-input) {
          width: 50%;
        }
      }
      .form-desc {
        ::v-deep(.el-input) {
          width: 80%;
        }
      }
    }
  }
  .form-img {
    text-align: justify;
    margin-top: 20px;
    .img-block {
      .img-label {
        line-height: 60px;
      }
      .upload-img {
        position: relative;
        width: 60px;
        height: 60px;
        margin: 0 10px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;
          cursor: pointer;
        }
      }
    }
    .change-img {
      .btn-change {
        font-size: 12px;
      }
    }
  }
}
</style>