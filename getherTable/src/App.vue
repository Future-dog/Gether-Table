<script setup>
import './assets/base.css'
import './assets/normalize.css'
// import Main from './components/Main.vue';
// import Games from './components/Games.vue';
// import CreateGames from './components/CreateGames.vue';
// import Profile from './components/Profile.vue';
// import EditProfile from './components/EditProfile.vue';
// import Responses from './components/Responses.vue';
// import Setting from './components/Setting.vue';
// import Game from './components/Game.vue';
// import EditGame from './components/EditGame.vue';

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
