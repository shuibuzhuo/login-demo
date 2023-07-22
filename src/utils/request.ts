/*
 * @Author: zhuotuo
 * @Date: 2023-07-22 09:11:59
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-07-22 11:15:18
 * @Description: 
 */
import axios, { type AxiosRequestConfig } from 'axios'

export type ResType<T = any> = {
  msg: string
  code: number
  data: T
}

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  const { code, data, msg } = response.data as ResType

  if (code === 200) {
    return data
  } else {
    return Promise.reject(new Error(msg))
  }
}, (error) => {
  return Promise.reject(error)
})

function request<T>(config: AxiosRequestConfig<T>): Promise<T> {
  return service(config)
}

export default request
