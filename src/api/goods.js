import http from '@/request/index'

export const getGoodsListAPI = () => {
  return http({
    url: '/goods'
  })
}