<template>
    <aside class="sidebar">
        <img :src="bookmark" alt="bookmark" class="bookmark" @click="ToggleSidebar()">
        <div class="navbar" :style="{ backgroundImage: `url(${bg_sidebar})` }">
            <ul class="nav-list">

                <li class="sidebar-item-main">
                    <a href="index.html" :style="{ '--bg-sidebar-button-main': `url(${bg_sidebar_button_main})` }">
                        <div>
                            <span>Главная</span>
                        </div>
                    </a>
                    <img :src="line" alt="" class="line">
                </li>
                <li v-for="item in sidebarItems" :key="item.id" :link="item.link" class="sidebar-item">
                    <a :href="item.link" :style="{ '--bg-sidebar-button': `url(${bg_sidebar_button})` }"
                        @click="item.func">
                        <div>
                            <img :src="item.icon" alt="" class="sidebar-item-img">
                            <span>{{ item.title }}</span>
                        </div>
                    </a>
                    <img :src="line" alt="" class="line">
                </li>
            </ul>
        </div>
        <div class="section_profil">
            <div class="profil_choise" :style="{ backgroundImage: `url(${bg_profile_menu})` }" id="profil_choise">
                <div class="content_profil">
                    <button class="button_prof" @click="ProfileMenuOff()"></button>
                    <a href="./authorization.html" class="auto_reg">Авторизация</a>
                    <a href="./register.html" class="auto_reg">Регистрация</a>
                    <div class="profil_design">
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>



<script setup>
import bookmark from './../assets/bookmark.png'
import bg_sidebar from './../assets/Background_navbar.png'
import line from './../assets/Line-png.png'
import gamesIcon from './../assets/Feather-svg.png'
import playersIcon from './../assets/ShieldSword-svg.png'
import profileIcon from './../assets/User-svg.png'
import aboutIcon from './../assets/Info-svg.png'
import bg_sidebar_button from './../assets/Background-button.png'
import bg_sidebar_button_main from './../assets/Background-button-main.png'
import bg_profile_menu from './../assets/scroll.png'

function ToggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function ProfileMenuOn() {
    const choise = document.getElementById('profil_choise');
    profil_choise.style.display = "block";
    console.log('сработало!');
}

function ProfileMenuOff() {
    const choise = document.getElementById('profil_choise');
    profil_choise.style.display = "none";
}

const sidebarItems = [
    { id: 'games', title: 'Игры', link: '#', icon: gamesIcon },
    { id: 'players', title: 'Игроки', link: '#', icon: playersIcon },
    { id: 'profile', title: 'Профиль', link: '#', icon: profileIcon, func: ProfileMenuOn },
    { id: 'About', title: 'О нас', link: '#', icon: aboutIcon },
]
</script>



<style scoped>
.sidebar {
    height: 100vh;
    width: auto;
    max-height: 100vh;
    max-width: 20vw;
    position: absolute;
    z-index: 2;
    transition: transform 0.25s ease;
    transform: translateX(-117%);
}

.navbar {
    position: relative;
    z-index: 2;
    height: 100%;
    width: auto;
    max-height: 100vh;
    max-width: 40vw;
    z-index: 2;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 187 / 955;
}

.nav-list {
    padding: 0;
    position: relative;
    padding-top: 121px;
    list-style: none;

}

.line {
    padding-top: 14px;
    width: 165px;
}

.sidebar-item-main div {
    font-family: 'Caveat';
    font-size: 36px;
    display: flex;
    align-items: center;
    padding-left: 33px;
}

.sidebar-item-main a {
    width: 95px;
    color: var(--main-color);
    text-decoration: none;
    transition: color 0.3s ease;
    text-decoration: none;
}

.sidebar-item-main a:hover {
    color: var(--paper-color)
}

.sidebar-item-main a::before {
    content: '';
    position: absolute;
    width: 93px;
    height: 54px;
    margin-left: 33px;
    background-image: var(--bg-sidebar-button-main);
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.sidebar-item-main a:hover::before {
    opacity: 1;
}

.sidebar-item a {
    color: var(--main-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.sidebar-item a:hover {
    color: var(--paper-color)
}

.sidebar-item a::before {
    content: '';
    position: absolute;
    margin-left: 10px;
    margin-top: 14px;
    width: 187px;
    height: 60px;
    background-image: var(--bg-sidebar-button);
    background-position: center left;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.sidebar-item a:hover::before {
    opacity: 1;
}

.sidebar-item div {
    font-family: 'Caveat';
    font-size: 29px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-top: 14px;
    gap: 8px;
}

.sidebar-item .line {
    padding-top: 12px;
}

.bookmark {
    width: 110px;
    height: 58px;
    position: absolute;
    top: 50%;
    left: 90%;
    z-index: 1;
    cursor: pointer;
}

.sidebar:not(.open):has(.bookmark:hover) {
    transform: translateX(-100%);
}

.sidebar.open {
    transform: translateX(0);
}

/* ---------------profile-menu--------------- */

.profil_choise {
    position: fixed;
    top: 20%;
    left: 144%;
    width: 220px;
    height: 150px;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    transition-duration: 300ms;
    z-index: 9999;
    display: none;
}

.profil_choise::after {
    transition-duration: 300ms;
}

.content_profil {
    position: relative;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.button_prof {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    width: 195px;
    height: 25px;
}


.auto_reg {
    font-family: Caveat;
    font-size: 28px;
    text-decoration: none;
    color: var(--main-color);
    transition-duration: 300ms;
}

.auto_reg:hover {
    color: var(--red-color);
    transition-duration: 300ms;
}

@media (max-width: 400px) {
    .sidebar {
        display: none;
    }
}

@media (max-width: 790px) {

    .sidebar-item a::before {
        margin-left: 0px;
        margin-top: 7px;
        width: 130px;
        height: 60px;
    }

    .sidebar {
        aspect-ratio: 1920 / 955;
    }

    .sidebar-item div {
        font-size: 24px;
        padding-left: 0px;
        padding-top: 7px;
        gap: 0px;
    }

    .sidebar-item-img {
        transform: scale(0.85);
    }

    .sidebar-item-main div {
        font-size: 30px;
        padding-left: 33px;
    }

    .sidebar-item-main a::before {
        margin-left: 25px;
    }

    .bookmark {
        left: 85%;
    }

    .line {
        width: 129px;
    }
}
</style>