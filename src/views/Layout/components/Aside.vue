<template>
  <div class="aside-block">
    <div class="admin-title flex">
      <h4>网易严选后台管理</h4>
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

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  updated() { }, //生命周期 - 更新之后
}
</script>
<style lang='scss' scoped>
.aside-block {
  height: 100vh;
  background-color: skyblue;
  .admin-title {
    padding: 10px 0 10px 10px;
    h4 {
      line-height: 42px;
      margin-left: 5px;
    }
    &::before {
      content: '';
      display: block;
      width: 42px;
      height: 42px;
      background: url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-component/p/20170601/style/img/x2/icon-yxtop-s4b76696bd6-801b2550ab.png?imageView&type=webp');
      background-position: 0px -592px;
      background-size: 287px;
    }
  }
}
</style>