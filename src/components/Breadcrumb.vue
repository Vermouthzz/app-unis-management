<template>
   <div class='bread-block'>
    <ul class="bread-ul flex">
      <li class="flex-a" @click="onSwitch(item)" v-for="item in $store.state.routeList" :key="item.path">
        <span class="dot" :class="{dot_active: item.active}"></span>
        <span>{{item.name}}</span>
        <i class="el-icon-close" @click="onDeletePage"></i>
      </li>
    </ul>
   </div>
</template>

<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    replace: {
      type: Boolean,
      default: true
    },
    to: {
      type: String,
      default: ''
    }
  },
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
    onDeletePage() {
      
    },
    onSwitch(item) {
      if(item.path == this.$$route.path) return
      this.$store.dispatch('switchRouteList', item.path)
      this.replace ? this.$router.replace(item.path) : this.$router.push(item.path)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  
  },
  updated() {}, //生命周期 - 更新之后
  }
</script>
<style lang='scss' scoped>
.bread-block {
  height: 100%;
  .bread-ul {
    height: 100%;
    li {
      height: 100%;
      padding: 0 15px;
      border-left: 1px solid whitesmoke;
      &:last-child {
        border-right: 1px solid whitesmoke;
      }
      .dot {
      width: 8px;
      height: 8px;
      margin-right: 12px;
      border-radius: 50%;
      background-color: lightgray;
      &.dot_active {
        background-color: #CC9756;
      }
    }
    .el-icon-close {
      font-size: 14px;
      margin-left: 12px;
    }
    }
  }
}
</style>