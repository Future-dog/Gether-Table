<template>
    <header :style="{ backgroundImage: `url(${bg_header})` }">
        <a href="/"><img :src="logo_gether" alt="Logo" class="logo"></a>
        <a href="/"><img :src="name_gether" alt="name Gether Table" class="name-gether"></a>
        <!-- <img src="./image/Name_GETHERTABLE.png" alt="Gether Table" onclick="hello()"> -->
        <div class="useless"></div>
    </header>
</template>



<script setup>
import logo_gether from './../assets/Logo.png'
import name_gether from './../assets/Name_GETHERTABLE.png'
import bg_header from './../assets/puper.png'
</script>



<style scoped>
header{
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    /* height: 114px; */
    padding-bottom: 7px;
    /* background-image: url('./../assets/puper.png'); */
}

.logo{
    /* width: 80px; */
    aspect-ratio: 702 / 722;
    height: 80px;
}

.useless{
    width: 80px;
}

@media (max-width: 650px) {
    .header {
        display: none;
    }
}   
</style>