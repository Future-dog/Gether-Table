<template>
    <div class="background" :style="{ backgroundImage: `url(${bg})` }"></div>
    <div class="background-side">
        <img :src="green_beta1" alt="" class="sbackground-side-item">
        <img :src="green_beta2" alt="" class="sbackground-side-item">
    </div>
    <Header />
    <Sidebar />
</template>



<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import bg from './../assets/Background_main.jpg'
import green_beta1 from './../assets/green_disk_beta 1.png'
import green_beta2 from './../assets/green_dick_beta 2.png'
</script>



<style scoped>
.background {
    position: absolute;
    z-index: -1;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    aspect-ratio: 1426 / 955;
    background-image: var(bg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.background-side {
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100vw;
}

.background-side-item {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: auto;
}

.background-side-item img {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: auto;
}
</style>