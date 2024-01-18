import http from '@/request/index'

export const getUserInfoAPI = () => {
  return http({
    url: '/user'
  })
}