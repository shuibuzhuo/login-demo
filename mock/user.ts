/*
 * @Author: zhuotuo
 * @Date: 2023-07-22 09:11:59
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-07-22 10:54:43
 * @Description: 
 */
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/user',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          username: 'shuibuzhuo',
          age: 20
        }
      }
    }
  }
] as MockMethod[]
