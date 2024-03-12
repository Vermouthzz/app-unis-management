<!--  -->
<template>
  <div class="add-sku-block">
    <el-form ref="form" label-position="top" label-width="120px">
      <el-form-item label="商品规格名称">
        <div class="sku-name-block flex">
          <div
            class="sku-item-name common-block"
            v-for="(item, index) in skuNames"
            :key="index"
            @click="onSwitchItem(item)"
            :class="{ active: activeType == item.type }"
          >
            {{ item.name }}
          </div>
        </div>
      </el-form-item>
      <el-form-item label="商品规格属性">
        <div class="sku-value-block flex">
          <div class="block flex">
            <div
              class="sku-item-value"
              v-for="(item, index) in skuValues"
              :key="index"
            >
              {{ item }}
              <i class="el-icon-circle-close" @click="onDeleteVal(index)"></i>
            </div>
          </div>
          <div class="add-sku-value" v-if="show">
            <el-input
              v-model="itemValue"
              placeholder="添加商品规格属性"
            ></el-input>
            <el-button type="primary" @click="onAddConfirm">确认</el-button>
            <el-button type="primary" @click="() => (show = false)"
              >关闭</el-button
            >
          </div>
          <div class="" v-else>
            <el-button type="primary" @click="onClickAdd"
              >点击添加属性</el-button
            >
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onMakeSku">生成Sku</el-button>
        <el-button type="primary" @click="onResetSku">重置Sku</el-button>
      </el-form-item>
      <el-form-item>
        <div class="sku-block">
          <div class="sku-item" v-for="(item, index) in skuData" :key="index">
            <span class="sku-name">{{ item.sku_name }}</span>
            <div class="values-block flex">
              <div
                class="sku-value common-block"
                v-for="(subItem, i) in item.sku_value"
                :key="i"
                @click="onSelectSkuVal(subItem, i, index)"
                :class="{ active: subItem.selected }"
              >
                {{ subItem.value }}
              </div>
            </div>
          </div>
          <div class="goods-price">
            <span>商品特价：</span>
            <div class=""></div>
          </div>
        </div>
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
      activeType: -1,
      show: false,
      skuNames: [
        { name: "颜色", type: "1" },
        { name: "规格", type: "2" },
        { name: "季节", type: "3" },
        { name: "容量", type: "4" },
        { name: "尺码", type: "5" },
        { name: "净含量", type: "6" },
        { name: "款式", type: "7" },
        { name: "口味", type: "8" },
      ],
      skuValues: [],
      itemValue: "",
      skuData: [
        {
          sku_name: "规格",
          sku_value: [
            { value: "aaa", selected: false },
            { value: "ddd", selected: false },
          ],
        },
        {
          sku_name: "颜色",
          sku_value: [
            { value: "bbb", selected: false },
            { value: "ccc", selected: false },
          ],
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onAddConfirm() {
      if (!this.itemValue.length) return;
      const skuVal = {
        value: this.itemValue,
        selected: false,
      };
      this.skuValues.push(skuVal);
      this.itemValue = "";
    },
    onDeleteVal(index) {
      this.skuValues.splice(index, 1);
    },
    onSwitchItem(item) {
      this.activeType == item.type
        ? (this.activeType = -1)
        : (this.activeType = item.type);
      // const selectItem = this.skuNames.find(i = i.type == item.type)
    },
    handleWarning() {
      //处理警告事件
      if (this.activeType == -1) {
        this.$message({
          message: "请先选择规格",
          type: "warning",
        });
      }
      return false;
    },
    onClickAdd() {
      if (!this.handleWarning()) return;
      this.show = true;
    },
    onMakeSku() {
      //生成sku
      if (!this.handleWarning()) return;
      const { name: sku_name } = this.skuNames.find(
        (i) => i.type == this.activeType
      );
      const sku_value = [...this.skuValues];
      const sku = { sku_name, sku_value };
      this.skuData.push(sku);
      //清空sku
      this.onResetSku();
    },
    onResetSku() {
      if (!this.handleWarning()) return;
      this.activeType = -1;
      this.skuValues.length = 0;
      this.itemValue = "";
      this.show = false;
    },
    onSelectSkuVal(subItem, i, index) {
      //点击选择生成的sku
      // console.log(subItem, i, index);
      if (subItem.selected) {
        //已经选择，再次点击取消
        subItem.selected = false;
      } else {
        //未选择，点击取消其他，选择当前
        this.skuData[index].sku_value.forEach((i) => (i.selected = false));
        subItem.selected = true;
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
.add-sku-block {
  ::v-deep(.el-form-item) {
    text-align: justify;
  }
  ::v-deep(.el-form-item) {
    margin: 0 0 10px 0;
  }
  .common-block {
    padding: 0 10px;
    margin-right: 12px;
    border: 1px solid #ccc;
    cursor: pointer;
    &.active {
      background-color: skyblue;
    }
  }
  .sku-name-block {
    .sku-item-name {
    }
  }
  .sku-value-block {
    .block {
      flex-wrap: wrap;
      .sku-item-value {
        position: relative;
        padding: 0 10px;
        margin: 0 12px 6px 0;
        border: 1px solid #ccc;
        .el-icon-circle-close {
          position: absolute;
          right: -5px;
          top: -6px;
          font-size: 14px;
          cursor: pointer;
          z-index: 10;
        }
      }
    }
    .add-sku-value {
      flex: 0 0 356px;
      ::v-deep(.el-input) {
        width: 50%;
      }
    }
  }
  .sku-block {
    padding: 6px;
    // border: 1px solid #ccc;
  }
}
</style>