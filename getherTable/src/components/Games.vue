<template>
    <Header />
    <Sidebar />
    <div class="background-base">
        <img src="./../assets/background_games.jpg" alt="">
    </div>
    <section>
        <div class="background-scroll">
            <img src="./../assets/background_scroll.png" alt="">
        </div>
        <div class="anti-scroll">
            <div class="flexer">
                <div class="rails">
                    <h2>Игры</h2>
                    <div class="normalize-childclass">
                        <article v-for="item in cardsItems" :key="item.id" :link="item.link" class="card">
                            <a :href="item.link">
                                <div class="stamp">
                                    <img src="#" alt="">
                                </div>
                                <div class="background-card">
                                    <img src="./../assets/background_card.png" alt="">
                                </div>
                                <h3>{{ item.title }}</h3>
                                <div class="flexer">
                                    <div class="cover-img">
                                        <img :src="item.src" alt="">
                                    </div>
                                    <div class="grid-cardtext">
                                        <div class="grid-item"><span class="signatire">Дата</span> <span
                                                class="info">{{ item.date }}</span></div>
                                        <div class="grid-item"><span class="signatire">Жанр</span> <span
                                                class="info">{{ item.genre }}</span></div>
                                        <div class="grid-item"><span class="signatire">Кол-во игроков</span> <span
                                                class="info">{{ item.quantity }}</span></div>
                                        <div class="grid-item"><span class="signatire">ХБ</span> <span
                                                class="info">{{ item.hb }}</span></div>
                                        <div class="grid-item"><span class="signatire">Синопсис</span></div>
                                        <div class="grid-item">
                                            <p>
                                                {{ item.text }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>
                </div>
                <search class="filter">
                    <span class="filter-name">Фильтр</span>
                    <div class="background-filter">
                        <img src="./../assets/background-filter.png" alt="">
                    </div>
                    <div class="rails-filter">
                        <span class="class-filter1">Дата</span>
                        <span class="item-filter">на этой неделе</span>
                        <span class="item-filter">в этом месяце</span>
                        <span class="item-filter">в этом году</span>
                        <span class="item-filter">неопределенно</span>

                        <span class="class-filter">Число игроков</span>
                        <div class="mens">
                            <img src="./../assets/mans.png" alt="mens">
                        </div>

                        <span class="class-filter">Жанр</span>
                        <span class="item-filter">комедия</span>
                        <span class="item-filter">хоррор</span>
                        <span class="item-filter">геймвар</span>
                        <span class="item-filter">выживание</span>
                        <span class="item-filter">серьёзность</span>

                        <span class="class-filter">Количество сессий</span>
                        <span class="item-filter">ваншот</span>
                        <span class="item-filter">даблшот</span>
                        <span class="item-filter">триплшот</span>
                        <span class="item-filter">малая компания</span>
                        <span class="item-filter">долгая компания</span>

                        <span class="class-filter">Длительность</span>
                        <span class="item-filter">менее 4 часов</span>
                        <span class="item-filter">4-6 часов</span>
                        <span class="item-filter">более 6 часов</span>

                        <span class="class-filter">Уровень</span>
                        <span class="item-filter">новичок</span>
                        <span class="item-filter">любитель</span>
                        <span class="item-filter">опытный</span>

                        <span class="class-filter">Пробные сессии</span>
                        <span class="item-filter">есть</span>
                        <span class="item-filter">нет</span>

                        <span class="class-filter">Ограничеия</span>
                        <span class="item-filter">18+</span>
                        <span class="item-filter">без ограничений</span>

                        <span class="class-filter">Рейтинг мастера</span>
                        <span class="item-filter">надежный</span>
                        <span class="item-filter">любой</span>

                        <span class="class-filter">Наличие ХБ</span>
                        <span class="item-filter">большое</span>
                        <span class="item-filter">малое</span>
                        <span class="item-filter">нет</span>
                    </div>
                </search>
            </div>
        </div>
    </section>
</template>


<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import src1 from './../assets/c8f1e70ce0d147d726b15c20b2477921 2.jpg'
import src2 from './../assets//f71c2ac36677e50e37df03080c0de5b0 1.jpg'


const cardsItems = [
    { id: '1', link: '#', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text:'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.'},
    { id: '2', link: '#', title: 'Страх подземелий', src: src2, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text:'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.'},
    { id: '3', link: '#', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'серьезно', quantity: '4', hb: 'нет', text:'Ужас, страх, боль, печаль - это все ждет всех, кто сунеться в замок вапира. Но такие мелочи не заботят нюх на ноживу. Лорд ждет вас в своих покоях.'},
    { id: '4', link: '#', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text:'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.'},
    { id: '5', link: '#', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text:'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.'},
]
</script>


<style>
.background-base {
    position: absolute;
    z-index: -1;
}

.games section {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
}

.background-scroll {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 1;
}

.anti-scroll {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
}

.rails {
    position: relative;
    overflow-y: auto;
    width: 848px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 79px;
    margin-left: 351px;
}

.rails h2 {
    font-family: Caveat;
    font-size: 96px;
}

a {
    text-decoration: none;
    color: inherit;
    font: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    transition: none
}

.card {
    width: 803px;
    height: 284px;
    margin-top: 16px;
}

.card:first-child {
    margin-top: 0;
}

.background-card {
    position: absolute;
    z-index: -1;
    max-width: 803px;
}

.card h3 {
    font-family: Caveat;
    font-size: 20px;
    font-weight: bold;
    padding-left: 409px;
    padding-top: 3px;
}

.flexer {
    display: flex;
}

.cover-img {
    position: relative;
    z-index: -2;
    max-width: 140px;
    top: 3px;
    left: 36px;
}

.grid-cardtext {
    width: 533px;
    height: 220px;
    position: relative;
    left: 82px;
    bottom: 2px;
    display: grid;
    grid-template-columns: 195px auto;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 33px;
    place-items: center stretch;
}

.grid-item {
    display: flex;
    justify-content: space-between;
}

.grid-item:nth-child(2) {
    grid-row: 2 / 3;
}

.grid-item:nth-child(3) {
    grid-row: 3 / 4;
}

.grid-item:nth-child(4) {
    grid-row: 4 / 5;
}

.grid-item:nth-child(5) {
    justify-content: center;
}

.grid-item:last-child {
    grid-row: 2 / span 3;
}

.signatire {
    font-family: Quicksand;
    font-size: 18px;
    font-weight: bold;
}

.info {
    font-family: Quicksand;
    font-size: 18px;
}

.grid-item p {
    font-family: Quicksand;
    font-size: 17px;
    text-align: justify;
}

.filter {
    margin-top: 150px;
    margin-left: 118px;
}

.filter-name {
    font-family: Quicksand;
    font-size: 40px;
    padding-left: 30px;
}

.background-filter {
    max-width: 222px;
    position: relative;
    z-index: 1;
    top: 10px;
}

.rails-filter {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    bottom: 1290px;
}

/* 44 */

.class-filter {
    font-family: Quicksand;
    font-size: 18px;
    font-weight: bold;
    max-width: 222px;
    text-align: center;
    padding-bottom: 3px;
    padding-top: 5px;
}

.item-filter {
    font-family: Quicksand;
    font-size: 18px;
    padding-left: 33px;
    padding-bottom: 3px;
}

.class-filter1 {
    font-family: Quicksand;
    font-size: 18px;
    font-weight: bold;
    max-width: 222px;
    text-align: center;
    padding-bottom: 3px;
}

.mens {
    padding-top: 12px;
    padding-left: 33px;
    padding-bottom: 16px;
}
</style>