<template>
    <aside class="sidebar">
        <img :src="bookmark" alt="bookmark" class="bookmark" @click="ToggleSidebar()">
        <div class="navbar" :style="{ backgroundImage: `url(${bg_sidebar})` }">
            <ul class="nav-list">

                <li class="sidebar-item-main">
                    <a href="/" :style="{ '--bg-sidebar-button-main': `url(${bg_sidebar_button_main})` }">
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
    { id: 'games', title: 'Игры', link: '/games', icon: playersIcon },
    { id: 'responses', title: 'Создание', link: '/createGame', icon: gamesIcon },
    { id: 'profile', title: 'Профиль', link: '/profile', icon: profileIcon },
    { id: 'responses', title: 'Отклики', link: '/responses', icon: aboutIcon },
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
    padding-top: 6.302vw;      /* 121px → 6.302vw */
    list-style: none;
}

.line {
    padding-top: 0.729vw;      /* 14px → 0.729vw */
    width: 8.594vw;            /* 165px → 8.594vw */
}

.sidebar-item-main div {
    font-family: 'Caveat';
    font-size: 2.25rem;        /* 36px → 2.25rem */
    display: flex;
    align-items: center;
    padding-left: 1.719vw;     /* 33px → 1.719vw */
}

.sidebar-item-main a {
    width: 4.948vw;            /* 95px → 4.948vw */
    color: var(--main-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.sidebar-item-main a:hover {
    color: var(--paper-color)
}

.sidebar-item-main a::before {
    content: '';
    position: absolute;
    width: 4.844vw;            /* 93px → 4.844vw */
    height: 2.813vw;           /* 54px → 2.813vw */
    margin-left: 1.719vw;
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
    margin-left: 0.521vw;      /* 10px → 0.521vw */
    margin-top: 0.729vw;       /* 14px → 0.729vw */
    width: 9.740vw;            /* 187px → 9.740vw */
    height: 3.125vw;           /* 60px → 3.125vw */
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
    font-size: 1.8125rem;      /* 29px → 1.8125rem */
    display: flex;
    align-items: center;
    padding-left: 0.521vw;     /* 10px → 0.521vw */
    padding-top: 0.729vw;      /* 14px → 0.729vw */
    gap: 0.417vw;              /* 8px → 0.417vw */
}

.sidebar-item .line {
    padding-top: 0.625vw;      /* 12px → 0.625vw */
}

.bookmark {
    width: 5.729vw;            /* 110px → 5.729vw */
    height: 3.021vw;           /* 58px → 3.021vw */
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

.profil_choise {
    position: fixed;
    top: 20%;
    left: 144%;
    width: 11.458vw;           /* 220px → 11.458vw */
    height: 7.813vw;           /* 150px → 7.813vw */
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
    top: 0.521vw;              /* 10px → 0.521vw */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.521vw;              /* 10px → 0.521vw */
}

.button_prof {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    width: 10.156vw;           /* 195px → 10.156vw */
    height: 1.302vw;           /* 25px → 1.302vw */
}

.auto_reg {
    font-family: Caveat;
    font-size: 1.75rem;        /* 28px → 1.75rem */
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
        margin-left: 0;
        margin-top: 0.365vw;   /* 7px → 0.365vw */
        width: 6.771vw;        /* 130px → 6.771vw */
        height: 3.125vw;
    }

    .sidebar {
        aspect-ratio: 1920 / 955;
    }

    .sidebar-item div {
        font-size: 1.5rem;     /* 24px → 1.5rem */
        padding-left: 0;
        padding-top: 0.365vw;  /* 7px → 0.365vw */
        gap: 0;
    }

    .sidebar-item-img {
        transform: scale(0.85);
    }

    .sidebar-item-main div {
        font-size: 1.875rem;   /* 30px → 1.875rem */
        padding-left: 1.719vw;
    }

    .sidebar-item-main a::before {
        margin-left: 1.302vw;  /* 25px → 1.302vw */
    }

    .bookmark {
        left: 85%;
    }

    .line {
        width: 6.719vw;        /* 129px → 6.719vw */
    }
}
</style>