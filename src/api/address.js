import http from '@/request/index'

export const getRegionTreeAPI = (level, id) => {
  return http({
    url: '/region',
    params: {
      level,
      id
    }
  })
}