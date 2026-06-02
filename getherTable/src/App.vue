<script setup>
import './assets/base.css'
import './assets/normalize.css'

import { onMounted } from 'vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import './assets/normalize.css';
@import './assets/base.css';

html, body {
  scrollbar-width: none; 
}

.anti-scroll {
  scrollbar-width: none; 
}
</style>
