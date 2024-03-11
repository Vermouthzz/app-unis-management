<!--  -->
<template>
  <div class="edit-dialog-block">
    <el-dialog
      title="编辑订单信息"
      :close-on-click-modal="false"
      :visible.sync="show"
    >
      <el-form :model="FormData" label-position="left" class="edit-form flex">
        <div class="form-item">
          <el-form-item label="收件人姓名">
            <el-input
              v-model="FormData.adress_name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="联系方式">
            <el-input v-model="FormData.contact" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="省市地址">
            <el-cascader :props="addresVal"></el-cascader>
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="详细地址">
            <el-input
              v-model="FormData.detail_adrs"
              autocomplete="off"
            ></el-input>
          </el-form-item>
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
import { getRegionTreeAPI } from "@/api/address";
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
    return {
      addresVal: {
        lazy: true,
        async lazyLoad(node, resolve) {
          const { level, data } = node;
          if (data) {
            var id = data.value;
          }
          const res = await getRegionTreeAPI(level, id);
          const nodes = res.result.map((item) => ({
            value: item.id,
            label: item.Name,
            leaf: item.level >= 3,
          }));
          resolve(nodes);
        },
      },
    };
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
    flex-wrap: wrap;
    .form-item {
      width: 50%;
    }
    ::v-deep(.el-form-item) {
      margin-bottom: 10px;
      text-align: justify;
    }
    ::v-deep(.el-input) {
      width: 50%;
    }
    ::v-deep(.el-input--suffix) {
      width: 94%;
      margin-left: 14px;
    }
    ::v-deep(.el-cascader) {
    }
  }
}
</style>