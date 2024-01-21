import http from '@/request/index'

export const getUserFriendAPI = (id) => {
  return http({
    url: '/chatinfo',
    params: {
      id
    }
  })
}

export const getUserChatAPI = (sendid, id) => {
  return http({
    url: '/chat',
    params: {
      id,
      sendid
    }
  })
}