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
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/online',
        name: 'online-service',
        component: () => import('@/views/OnlineService/index.vue')
      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/OnlineService/user.vue')
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
      {
        path: '/redticket',
        name: '红包管理',
        component: () => import('@/views/DiscountManage/RedTicket/index.vue')
      },
      {
        path: '/integral',
        name: '积分管理',
        component: () => import('@/views/DiscountManage/Integral/index.vue')
      },
      {
        path: '/specialprice',
        name: '特价管理',
        component: () => import('@/views/ActiveMarketing/SpecialPrice/index.vue')
      },
      {
        path: '/limitdiscount',
        name: '特价管理',
        component: () => import('@/views/ActiveMarketing/LimitDiscount/index.vue')
      }
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
  if (to.path == '/login') {
    next()
  } else {
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
