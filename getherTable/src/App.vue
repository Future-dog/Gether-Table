<script setup>
import './assets/base.css'
import './assets/normalize.css'
import Main from './components/Main.vue';
import Games from './components/Games.vue';
import CreateGames from './components/CreateGames.vue';
import Profile from './components/Profile.vue';
</script>

<template>
  <Profile />
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
