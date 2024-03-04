import http from '@/request/index'

export const getTicketListAPI = () => {
  return http({
    url: '/tickets'
  })
}

//添加新的红包
export const addTicketAPI = () => {
  return http({
    url: '/tickets',
    method: 'POST',
    data: {
      
    }
  })
}

export const updateTicketAPI = () => {
  return http({
    url: '/tickets',
    method: 'PUT'
  })
}