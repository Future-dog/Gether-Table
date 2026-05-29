<template>
    <Base />
    <section>
        <div class="paper">
            <div @click="themeStore.toggleTheme" class="button">Сменить тему</div>
        </div>
    </section>
</template>



<script setup>
import Base from './Base.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>



<style scoped>
section {
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
}

.paper {
    width: 79vw;
    height: 49.740vw;          /* 100vh → 49.740vw */
    min-height: 100vh;
    background-image: var(--Bg-setting);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.button {
    width: 41.719vw;           /* 801px → 41.719vw */
    height: 21.875vw;          /* 420px → 21.875vw */
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--red-color);
    font-family: 'VestiSans';
    font-size: 2.5rem;         /* 40px → 2.5rem */
    font-weight: bold;
    transition: color 0.2s ease;
}

.button:hover {
    color: var(--base-blue);
}

.button::before {
    content: '';
    position: absolute;
    width: 41.719vw;
    height: 21.875vw;
    background-image: url('@/assets/Bg-setting-button.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.button:hover::before {
    opacity: 0;
}

.button::after {
    content: '';
    position: absolute;
    width: 41.719vw;
    height: 21.875vw;
    background-image: url('@/assets/Bg-setting-button-blue.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.button:hover::after {
    opacity: 1;
}
</style>