<template>
   <div class='bread-block'>
    <ul class="bread-ul flex">
      <li class="flex-a" @click="onSwitch(item.path)" v-for="item in $store.state.routeList" :key="item.path">
        <span class="dot" :class="{dot_active: item.active}"></span>
        <span>{{item.name}}</span>
        <i class="el-icon-close" v-show="item.close" @click="onDeletePage(item.path)"></i>
      </li>
    </ul>
   </div>
</template>

<script>

export default {
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
      List: []
    }
  },
  //监听属性 类似于data概念
  computed: {

  },
  //监控data中的数据变化
  watch: {

  },
  //方法集合
  methods: {
    onDeletePage(path) {
      if(path == this.$route.path)
      this.$store.dispatch('onDelete', path)
      const item = this.$store.state.routeList[this.$store.state.routeList.length - 1]
      this.$store.state.routeList[this.$store.state.routeList.length - 1].active = true
      this.$router.replace(item.path)
    },
    onSwitch(path) {
      if(path == this.$route.path) return
      this.$store.dispatch('switchRouteList', path)
      this.replace ? this.$router.replace(path) : this.$router.push(path)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
   this.List.push(...this.$store.state.routeList)
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