import axios from '@/utils/request'

export const getData = async () => {
  return axios.get('/test')
}
