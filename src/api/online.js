import http from '@/request/index'

export const getUserFriendAPI = (id) => {
  return http({
    url: '/chatinfo',
    params: {
      id
    }
  })
}

//sendid发送人id，id接收人id
export const getUserChatAPI = (sendid, id) => {
  return http({
    url: '/chat',
    params: {
      id,
      sendid
    }
  })
}

export const insertSendMessageAPI = ({ chat_time, message, send_id, receiver_id, is_read }) => {
  return http({
    url: '/chat',
    method: 'POST',
    data: {
      chat_time, message, send_id, receiver_id, is_read
    }
  })
}