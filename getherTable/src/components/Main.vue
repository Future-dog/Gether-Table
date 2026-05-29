<template>
    <main class="index-main">
        <Header />
        <Sidebar />
        <div class="dark">
            <div class="background-main" :style="{ backgroundImage: `url(${bg_main})` }"></div>
            <div class="background-side">
                <img :src="green_beta1" alt="" class="sbackground-side-item">
                <img :src="green_beta2" alt="" class="sbackground-side-item">
            </div>
            <div class="things">
                <div class="profile">
                    <img :src="profile" alt="" class="main_game-image">
                </div>
                <div class="dice">
                    <img :src="dice" alt="" class="main_game-image">
                </div>
                <div class="responses">
                    <img :src="responses" alt="" class="main_game-image">
                </div>
            </div>
            <div class="dark-smoke"></div>
            <div class="main-heroes">
                <a href="/games" class="soldier-button">
                    <img :src="soldier" alt="" class="main_game-image">
                </a>
                <a href="/games" class="leshi-button">
                    <img :src="leshi" alt="" class="main_game-image">
                </a>
                <a href="/profile" class="profile-button">
                    <img :src="profile" alt="" class="main_game-image">
                </a>
                <a href="/setting" class="dice-button">
                    <img :src="dice" alt="" class="main_game-image">
                </a>
                <a href="/responses" class="responses-button">
                    <img :src="responses" alt="" class="main_game-image">
                </a>
            </div>
        </div>

        <!-- =============== MOBILE ============== -->

        <header class="header-mob">
            <div class="Gether-Table-mob">
                <img src="./../assets/Gether_Table-mob.png" alt="Gether Table">
            </div>
        </header>
        <aside class="sidemenu">
            <div class="background-navbar-mob">
            <ul class="nav-list-mob">
                <li class="nav-list-item-mob1">
                    <a href="Index.html" class="button-main-mob">Главная</a> 
                </li>
                <li>
                    <div class="item-line-mob">
                        <img src="./../assets/Line-png-mob.png" alt="">
                    </div>
                </li>
                <li class="nav-list-item-mob">
                    <a href="games.html" class="button-ather-mob">
                    <div class="svg-item-mob">
                        <img src="./../assets/Feather-svg-mob.png" alt="Перо">
                    </div>
                    <div class="text-items-mob">Игры</div>
                    </a>
                </li>
                <li>
                    <div class="item-line-mob">
                        <img src="./../assets/Line-png-mob.png" alt="">
                    </div>
                </li>
                <li class="nav-list-item-mob">
                    <a href="#" class="button-ather-mob">
                    <div class="svg-item-mob">
                        <img src="./../assets/ShieldSword-svg-mob.png" alt="Щит и меч">
                    </div>
                    <div class="text-items-mob">Игроки</div>
                </a>
                </li>
                <li>
                    <div class="item-line-mob">
                        <img src="./../assets/Line-png-mob.png" alt="">
                    </div>
                </li>
                <li class="nav-list-item-mob">
                    <a href="#" class="button-ather-mob" onclick="ProfileMenuOn_mob()">
                    <div class="svg-item-mob">
                        <img src="./../assets/User-svg-mob.png" alt="Пользователь">
                    </div>
                    <div class="text-items-mob">Профиль</div>
                </a>
                </li>
                <li>
                    <div class="item-line-mob">
                        <img src="./../assets/Line-png-mob.png" alt="">
                    </div>
                </li>
                <li class="nav-list-item-mob">
                    <a href="#" class="button-ather-mob">
                    <div class="svg-item-mob">
                        <img src="./../assets/Info-svg-mob.png" alt="Информация">
                    </div>
                    <div class="text-items-mob">О нас</div>
                </a>
                </li>
                <li>
                    <div class="item-line-mob">
                        <img src="./../assets/Line-png-mob.png" alt="">
                    </div>
                </li>
            </ul>
            </div>
        <div class="bookmark-mob" @click="ToggleSidebar_mob()">
                <img src="./../assets/bookmark-mob.png" alt="">
            </div>
        </aside>
    </main>
</template>



<script setup>
import { ref } from 'vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import green_beta1 from './../assets/green_disk_beta 1.png'
import green_beta2 from './../assets/green_dick_beta 2.png'
import soldier from './../assets/solders.png'
import leshi from './../assets/leshi.png'
import bg_main from './../assets/Background_main.jpg'
import profile from './../assets/Profile_fn.jpg'
import dice from './../assets/Dice_gether_fn.png'
import responses from './../assets/responses_fn.jpg'

const isSidebarOpen = ref(false)
function ToggleSidebar_mob() {
    const sidemenu = document.querySelector('.sidemenu');
    sidemenu.classList.toggle('open');
}
</script>



<style scoped>
body{
    overflow: hidden;
    height: 100%;
    position: fixed;
    width: 100%;
}

.background-side{
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 2;
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

.background-main{
    position: absolute;
    z-index: 1;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    aspect-ratio: 1426 / 955;
    background-image: var(bg_main);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.things {
    position: absolute;
    z-index: 3;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    aspect-ratio: 1426 / 955;
    position: absolute;
}

.profile {
    position: absolute;
    display: block;
    top: -8%;
    left: -22%;
    cursor: pointer;
    transform: rotate(-5deg) scale(0.5);
}

.dice {
    position: absolute;
    display: block;
    top: 69.3%;
    left: -10.5%;
    cursor: pointer;
    transform: scale(0.5);
}

.responses {
    position: absolute;
    display: block;
    cursor: pointer;
    transform: scale(1) translate(113%, 144%) rotate(5deg);
}

.responses img {
    height: 50%;
    width: 50%;
}

.dark {
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
}

.dark-smoke{
    position: absolute;
    z-index: 4;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transition: opacity 0.4s ease;
}

.dark:has(.soldier-button:hover) .dark-smoke,
.dark:has(.leshi-button:hover) .dark-smoke,
.dark:has(.dice-button:hover) .dark-smoke,
.dark:has(.profile-button:hover) .dark-smoke,
.dark:has(.responses-button:hover) .dark-smoke {
    opacity: 0.3;
}

.dark:has(.soldier-button:hover) .leshi-button,
.dark:has(.soldier-button:hover) .dice-button,
.dark:has(.soldier-button:hover) .profile-button,
.dark:has(.soldier-button:hover) .responses-button,
.dark:has(.leshi-button:hover) .soldier-button,
.dark:has(.leshi-button:hover) .dice-button,
.dark:has(.leshi-button:hover) .profile-button,
.dark:has(.leshi-button:hover) .responses-button,
.dark:has(.dice-button:hover) .responses-button,
.dark:has(.dice-button:hover) .leshi-button,
.dark:has(.dice-button:hover) .soldier-button,
.dark:has(.dice-button:hover) .profile-button,
.dark:has(.profile-button:hover) .responses-button,
.dark:has(.profile-button:hover) .dice-button,
.dark:has(.profile-button:hover) .leshi-button,
.dark:has(.profile-button:hover) .soldier-button,
.dark:has(.responses-button:hover) .soldier-button,
.dark:has(.responses-button:hover) .leshi-button,
.dark:has(.responses-button:hover) .dice-button,
.dark:has(.responses-button:hover) .profile-button {
    opacity: 0;
}

.main-heroes {
    position: absolute;
    z-index: 5;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    aspect-ratio: 1426 / 955;
}

.main_game-image {
    height: 100%;
}

.soldier-button {
    position: absolute;
    display: block;
    top: 29.87%;
    left: 18.83%;
    cursor: pointer;
    width: auto;
    height: 57.696vh;
    transition: opacity 0.4s ease;
}

.soldier-button img {
    height: 100%;
}

.leshi-button{
    position: absolute;
    display: block;
    top: 10.9%;
    left: 44.27%;
    cursor: pointer;
    width: auto;
    height: 39.162vh;
    transition: opacity 0.4s ease;
}

.leshi-button img {
    height: 100%;
}

.profile-button{
    position: absolute;
    display: block;
    top: -8%;
    left: -22%;
    cursor: pointer;
    transform: rotate(-5deg) scale(0.5);
    transition: opacity 0.4s ease;
}


.dice-button{
    position: absolute;
    display: block;
    top: 69.3%;
    left: -10.5%;
    cursor: pointer;
    transform: scale(0.5);
    transition: opacity 0.4s ease;
}

.responses-button{
    position: absolute;
    display: block;
    cursor: pointer;
    transform: scale(1) translate(113%, 144%) rotate(5deg);
    transition: opacity 0.4s ease;
}

.responses-button img {
    height: 50%;
    width: 50%;
}

/* ----- MOBILE ----- */
.main-mob {
    display: none;
}

.header-mob {
    display: none;
}

.sidemenu {
    display: none;
}

@media (max-width: 790px) {
    .things {
        display: none;
    }

    .profile-button {
        display: none;
    }

    .dice-button {
        display: none;
    }    

    .responses-button {
        display: none;
    }
}

@media (max-width: 400px) {
    .header-main {
        display: none;
    }

    .sidebar {
        display: none;
    }

    .background-main {
        display: none;
    }

    .background-side {
        display: none;
    }

    .dark-smoke {
        display: none;
    }

    .things {
        display: none;
    }

    .profile-button {
        display: none;
    }

    .dice-button {
        display: none;
    }    

    .responses-button {
        display: none;
    }

    .index-main {
        width: 100vw;
        height: 100vh;
        background-color: #6A252B;
    }

    .header-mob {
        width: 100vw;
        height: 114px;
        position: absolute;
        z-index: 3;
        display: flex;
        justify-content: center;
        background-image: url('./../assets/background-header-mob.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .dark {
        position: absolute;
        z-index: 1;
        background-image: url(./../assets/background-main-mob.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        aspect-ratio:  657 / 1078;
    }

    .soldier-button {
        height: 26.819vh;
        top: 41.66%;
        left: 18.85%;
    }

    .leshi-button {
        height: 18.203vh;
        top: 33%;
        left: 47.31%;
    }

    .main-heroes {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        transform: translate(0, 0);
        aspect-ratio: 0;
    }

/* --------------   N A V M E N U ------------------- */
    
    .sidemenu {
        display: block;
        height: 750px; 
        width: 100%;
        position: absolute;
        z-index: 2;
        transition: transform 0.25s ease;
        transform: translateY(-670px);
    }

    .background-navbar-mob {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-image: url('./../assets/Background_navbar-mob.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
    } 

    .nav-list-mob{
        padding-top: 90px;
    }

    .nav-list-item-mob{
        font-family: 'Caveat';
        font-size: 43.5px;
        display: flex;
        align-items: center;
        padding-left: 40px;
        padding-top: 21px;
    }

    .nav-list-item-mob1 {
        font-family: 'Caveat';
        display: flex;
        justify-content: center;
        font-size: 54px;
        padding-left: 33px;

    }

    .item-line-mob{
        padding-top: 14px;
    }

    .button-ather-mob {
        display: flex;
        align-items: center;
        color: var(--main-color);
        text-decoration: none;
    }

    .button-ather-mob:hover {
        color: var(--red-color)
    }   

    .button-main-mob{
        text-align: center;
        display: flex;
        align-items: center;
        color: var(--main-color);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .button-main-mob:hover {
        color: var(--red-color)
    }

    .text-items-mob{
        margin-left: 20px;
    }

    .bookmark-mob {
        width: 47px;
        height: 110px;
        position: absolute;
        top: 720px;
        left: 10%;
        z-index: 1;
        cursor: pointer;
    }

    .sidemenu.open {
        transform: translateY(0);
    }
}   
</style>