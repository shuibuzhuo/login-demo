/*
 * @Author: zhuotuo
 * @Date: 2023-07-22 09:11:59
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-07-22 11:01:30
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
