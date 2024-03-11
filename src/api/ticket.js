import http from '@/request/index'

export const getTicketListAPI = () => {
  return http({
    url: '/tickets'
  })
}

//添加新的红包
export const addTicketAPI = (ticket) => {
  return http({
    url: '/tickets',
    method: 'POST',
    data: {
      ticket
    }
  })
}

export const updateTicketAPI = () => {
  return http({
    url: '/tickets',
    method: 'PUT'
  })
}