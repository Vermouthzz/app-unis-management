<!-- 品牌管理View -->
<template>
  <div class="brand-block flex-c">
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
      <el-table :data="brandData" style="width: 100%" height="100%">
        <el-table-column
          fixed
          align="center"
          prop="order_id"
          label="品牌编号"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="brand_name"
          align="center"
          label="品牌名称"
          width="160"
        >
        </el-table-column>
        <el-table-column
          prop="brand_pic"
          align="center"
          label="品牌图片"
          width="160"
        >
          <template slot-scope="scope">
            <img class="brand-img" :src="scope.row.brand_pic" alt="" />
          </template>
        </el-table-column>
        <el-table-column
          prop="brand_desc"
          align="center"
          label="品牌描述"
          width="400"
        >
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <edit-dialog
      :FormData="currentRowVal"
      :show="dialogShow"
      @onClose="onClose"
    ></edit-dialog>
  </div>
</template>

<script>
import { getBrandInfoAPI } from "@/api/brand";
import EditDialog from "./components/EditDialog.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { EditDialog },
  data() {
    //这里存放数据
    return {
      currentRowVal: {},
      dialogShow: false,
      brandData: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getBrandInfo() {
      const res = await getBrandInfoAPI();
      this.brandData.push(...res.result);
    },
    handleEdit(index, val) {
      this.dialogShow = true;
      Object.assign(this.currentRowVal, val);
      console.log(this.currentRowVal);
    },
    onClose() {
      this.dialogShow = false;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getBrandInfo();
  },
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.brand-block {
  height: 100%;
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
  .brand-info {
    flex: 1;
    .brand-img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>