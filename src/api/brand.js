import http from '@/request/index'

export const getBrandInfoAPI = () => {
  return http({
    url: '/brand'
  })
}