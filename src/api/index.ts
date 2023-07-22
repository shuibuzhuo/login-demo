/*
 * @Author: zhuotuo
 * @Date: 2023-07-22 10:50:55
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-07-22 10:52:07
 * @Description: <
 */
import request from "@/utils/request";
import type { UserInfo } from "./types";

export function getUser() {
  return request<UserInfo>({
    url: '/user',
    method: 'get'
  })
}
