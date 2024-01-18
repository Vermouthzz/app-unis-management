import http from '@/request/index'

export const verifyLoginAPI = ({account, password}) => {
  return http({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}