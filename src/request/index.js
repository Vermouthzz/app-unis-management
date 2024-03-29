import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/admin',
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

instance.interceptors.response.use((res) => {
  if (res.status == 200) {
    return res.data
  }
  return res
})

export default instance