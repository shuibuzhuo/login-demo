<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { getData } from '@/api/test'

const _getData = async () => {
  const res = await getData()
  console.log('_getData res', res);
}
_getData()
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
