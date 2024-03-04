import http from '@/request/index'

export const getOrderListAPI = ({ pageSize, pageNum }) => {
  return http({
    url: '/order',
    params: {
      pageNum,
      pageSize
    }
  })
}

export const getOrderGoodsInfo = (order_id) => {
  return http({
    url: '/order/goods',
    params: {
      order_id
    }
  })
}