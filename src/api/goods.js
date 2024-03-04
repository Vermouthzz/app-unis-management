import http from '@/request/index'

export const getGoodsListAPI = ({ pageSize, pageNum }) => {
  return http({
    url: '/goods',
    params: {
      pageNum,
      pageSize
    }
  })
}