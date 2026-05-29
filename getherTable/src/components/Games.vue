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
                                        <div class="grid-item"><span class="signatire">Дата</span> <span class="info">{{
                                            item.date }}</span></div>
                                        <div class="grid-item"><span class="signatire">Жанр</span> <span class="info">{{
                                            item.genre }}</span></div>
                                        <div class="grid-item"><span class="signatire">Кол-во игроков</span> <span
                                                class="info">{{ item.quantity }}</span></div>
                                        <div class="grid-item"><span class="signatire">ХБ</span> <span class="info">{{
                                            item.hb }}</span></div>
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
    { id: '1', link: '/game', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text: 'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.' },
    { id: '2', link: '/game', title: 'Страх подземелий', src: src2, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text: 'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.' },
    { id: '3', link: '/game', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'серьезно', quantity: '4', hb: 'нет', text: 'Ужас, страх, боль, печаль - это все ждет всех, кто сунеться в замок вапира. Но такие мелочи не заботят нюх на ноживу. Лорд ждет вас в своих покоях.' },
    { id: '4', link: '/game', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text: 'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.' },
    { id: '5', link: '/game', title: 'След кульминации', src: src1, date: '01.01.2001', genre: 'комедия', quantity: '3', hb: 'есть', text: 'Воры магических артефактов. Убийство лорда-мага. Расследование ведёт ваша команда. Ваше трио последняя надежда королевства Нельзя ни кому доверять.' },
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
    /* 100vh → 49.740vw */
}

.rails {
    position: relative;
    overflow-y: auto;
    width: 44.167vw;
    /* 848px → 44.167vw */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4.115vw;
    /* 79px → 4.115vw */
    margin-left: 18.281vw;
    /* 351px → 18.281vw */
}

.rails h2 {
    font-family: Caveat;
    font-size: 6rem;
    /* 96px → 6rem */
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
    width: 41.823vw;
    /* 803px → 41.823vw */
    height: 14.792vw;
    /* 284px → 14.792vw */
    margin-top: 0.833vw;
    /* 16px → 0.833vw */
}

.card:first-child {
    margin-top: 0;
}

.background-card {
    position: absolute;
    z-index: -1;
    max-width: 41.823vw;
}

.card h3 {
    font-family: Caveat;
    font-size: 1.25rem;
    /* 20px → 1.25rem */
    font-weight: bold;
    padding-left: 21.302vw;
    /* 409px → 21.302vw */
    padding-top: 0.156vw;
    /* 3px → 0.156vw */
}

.flexer {
    display: flex;
}

.cover-img {
    position: relative;
    z-index: -2;
    max-width: 7.292vw;
    /* 140px → 7.292vw */
    top: 0.156vw;
    left: 1.875vw;
    /* 36px → 1.875vw */
}

.grid-cardtext {
    width: 27.760vw;
    /* 533px → 27.760vw */
    height: 11.458vw;
    /* 220px → 11.458vw */
    position: relative;
    left: 4.271vw;
    /* 82px → 4.271vw */
    bottom: 0.104vw;
    /* 2px → 0.104vw */
    display: grid;
    grid-template-columns: 10.156vw auto;
    /* 195px → 10.156vw */
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 1.719vw;
    /* 33px → 1.719vw */
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
    font-family: VestiSans;
    font-size: 1.125rem;
    font-weight: bold;
}

.info {
    font-family: VestiSans;
    font-size: 1.125rem;
}

.grid-item p {
    font-family: VestiSans;
    font-size: 1.0625rem;
    /* 17px → 1.0625rem */
    text-align: justify;
}

.filter {
    margin-top: 7.813vw;
    /* 150px → 7.813vw */
    margin-left: 6.146vw;
    /* 118px → 6.146vw */
}

.filter-name {
    font-family: VestiSans;
    font-size: 2.5rem;
    /* 40px → 2.5rem */
    padding-left: 1.563vw;
    /* 30px → 1.563vw */
}

.background-filter {
    max-width: 11.563vw;
    /* 222px → 11.563vw */
    position: relative;
    z-index: 1;
    top: 0.521vw;
    /* 10px → 0.521vw */
}

.rails-filter {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    bottom: 67.188vw;
    /* 1290px → 67.188vw */
}

.class-filter {
    font-family: VestiSans;
    font-size: 1.125rem;
    font-weight: bold;
    max-width: 11.563vw;
    text-align: center;
    padding-bottom: 0.156vw;
    /* 3px → 0.156vw */
    padding-top: 0.260vw;
    /* 5px → 0.260vw */
}

.item-filter {
    font-family: VestiSans;
    font-size: 1.125rem;
    padding-left: 1.719vw;
    /* 33px → 1.719vw */
    padding-bottom: 0.156vw;
}

.class-filter1 {
    font-family: VestiSans;
    font-size: 1.125rem;
    font-weight: bold;
    max-width: 11.563vw;
    text-align: center;
    padding-bottom: 0.156vw;
}

.mens {
    padding-top: 0.625vw;
    /* 12px → 0.625vw */
    padding-left: 1.719vw;
    padding-bottom: 0.833vw;
    /* 16px → 0.833vw */
}
</style>