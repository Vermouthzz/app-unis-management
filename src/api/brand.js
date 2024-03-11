import http from '@/request/index'

export const getBrandInfoAPI = () => {
  return http({
    url: '/brand',
  })
}

export const getBrandSearchAPI = (name) => {
  return http({
    url: '/brand/search',
    params: {
      name
    }
  })
}