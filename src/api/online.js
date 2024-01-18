import http from '@/request/index'

export const getUserFriendAPI = () => {
  return http({
    url: '/chatinfo'
  })
}

export const getUserChatAPI = (id) => {
  return http({
    url: '/chat',
    params: {
      id
    }
  })
}