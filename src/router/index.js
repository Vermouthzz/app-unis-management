import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/online',
        name: 'online-service',
        component: () => import('@/views/OnlineService/index.vue')
      },
      {
        path: '/goods',
        name: '商品管理',
        component: () => import('@/views/Goods/index.vue'),
      },
      {
        path: '/add',
        name: '添加商品',
        component: () => import('@/views/AddGoods/index.vue')
      },
      {
        path: '/brand',
        name: '品牌管理',
        component: () => import('@/views/Brand/index.vue')
      },
      {
        path: '/order',
        name: '订单管理',
        component: () => import('@/views/Order/index.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  next()
})

export default router
