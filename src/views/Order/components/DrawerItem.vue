<!--  -->
<template>
  <div class="goods-info-block flex-c">
    <div
      class="goods-block flex"
      v-for="(item, index) in goodsInfo"
      :key="index"
    >
      <div class="left-img">
        <img :src="item.pic" alt="" />
      </div>
      <div class="right-info flex-c">
        <div class="goods-name">{{ item.goods_name }}</div>
        <!-- <div class="goods-sku">{{ item.spec }}</div> -->
        <div class="goods-sku">哈哈哈哈哈哈哈</div>
        <div class="goods-price flex">
          <span class="retail-price">￥{{ item.retail_price }}</span>
          <span class="real-price">￥{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    goodsInfo: {
      type: Array,
      default: [],
    },
  },
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
.goods-info-block {
  padding: 0 10px;
  .goods-block {
    border: 1px solid #ccc;
    border-radius: 8px;
    // box-shadow: 4px 4px 10px 10px rgba(0, 0, 0, 0.3);
    .left-img {
      margin-right: 8px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 8px;
      }
    }
    .right-info {
      padding: 10px 6px 10px 0;

      justify-content: space-around;
      .goods-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        text-align: justify;
        letter-spacing: 0;
        overflow: hidden;
        font-size: 14px;
      }
      .goods-sku {
        text-align: justify;
        font-size: 13px;
      }
      .goods-price {
        .retail-price {
          margin-right: 8px;
        }
        .real-price {
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>