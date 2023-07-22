/*
 * @Author: zhuotuo
 * @Date: 2023-07-22 09:11:59
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-07-22 10:41:40
 * @Description: 
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "vue/multi-word-component-names": "off"
  }
}
