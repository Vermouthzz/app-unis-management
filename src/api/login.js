import http from '@/request/index'

export const verifyLoginAPI = ({account, password}) => {
  return http({
    url: '/admin/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}