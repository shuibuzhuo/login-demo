<!--
 * @Author: zhuotuo
 * @Date: 2023-07-22 09:11:59
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-07-22 11:44:13
 * @Description: 
-->
<script setup lang="ts">
import { getUser } from './api';
import type { UserInfo } from './api/types';

const userData = ref<UserInfo | null>(null)
async function getUserData() {
  const res = await getUser()
  userData.value = res
  console.log('getUserData res', res);
}
getUserData()
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Hello Vue + Unocss</h1>
    <h2 class="text-2xl">username: {{ userData?.username }}</h2>
    <h2 class="text-2xl">age: {{ userData?.age }}</h2>
  </div>
</template>

<style scoped></style>
