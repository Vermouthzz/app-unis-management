import http from '@/request/index'

export const getUserMessageAPI = () => {
  return http({
    url: '/home/chat'
  })
}