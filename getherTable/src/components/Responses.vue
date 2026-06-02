<template>
    <Base />
    <section>
        <div class="paper">
            <div class="response" v-for="item in cardsItems" :key="item.id">
                <div class="card">
                    <div class="column">
                        <a href="/profile"><img :src="item.avatar" alt=""></a>
                        <a :href="item.link">{{ item.game}}</a>
                    </div>
                    <div class="column">
                        <h2>{{ item.title }}</h2>
                        <div class="info">
                            <div class="text">
                                <div><span>Сколько в D&D</span>{{ item.count }}</div>
                                <div><span>Любимый жанр</span>{{ item.genre }}</div>
                                <div><span>Кол-во игр сыграно</span>{{ item.games_count}}</div>
                                <div><span>Играет с ХБ</span>{{ item.hb }}</div>
                            </div>
                            <div class="dop-text">
                                <span>Средние оценки</span>
                                <div class="title-text"><span>Социалка</span><span>Бой</span></div>
                                <div class="rating">
                                    <div><img v-for="n in item.soc" :key="n" :src="Frog_red" class="Logo-icon"></div>
                                    <div><img v-for="n in item.fig" :key="n" :src="Frog_red" class="Logo-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="answer">
                    <div class="approve">Одобрить</div>
                    <div class="refusal">Отказать</div>
                </div>
            </div>
        </div>
    </section>
</template>



<script setup>
import Base from './Base.vue'
import Avatar from './../assets/Logo.png'
import Frog_red from './../assets/FrogRed.svg'

const cardsItems = [
    { id: '1', avatar: Avatar, link: '/game', game: 'След кульминации', title: 'Лягух', count: '2 года', genre: 'хоррор', games_count: '3', hb: 'да', soc: 3, fig: 3 },
    { id: '2', avatar: Avatar, link: '/game', game: 'Страх подземелий', title: 'Будущее', count: 'год', genre: 'панк', games_count: '7', hb: 'нет', soc: 2, fig: 1 },
    { id: '3', avatar: Avatar, link: '/game', game: 'Какое-то название', title: 'Прошлое', count: 'пол года', genre: 'метал', games_count: '10', hb: 'да', soc: 1, fig: 3 },
    { id: '4', avatar: Avatar, link: '/game', game: 'Уже лень придумывать', title: 'Кажюни', count: '2 года', genre: 'железо', games_count: '23', hb: 'да', soc: 2, fig: 2 },
    { id: '5', avatar: Avatar, link: '/game', game: 'След кульминации', title: 'Лягух', count: '2 года', genre: 'хоррор', games_count: '3', hb: 'да', soc: 3, fig: 3 },
]
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
    height: 99.074vw;
    min-height: 100vh;
    background-image: url('@/assets/Bg-paper-responses.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.604vw;
}

.response {
    width: 53.385vw;
    height: 14.583vw;
    background-image: url('@/assets/Bg-form-response.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
}

.card {
    display: flex;
}

.response:first-child {
    margin-top: 9.479vw;
}

.column:first-child {
    width: 9.427vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0.990vw;
    margin-top: 1.823vw;
}

.column img {
    width: 7.813vw;
    height: 7.813vw;
}

.column a:last-child {
    margin-top: 1.354vw;
    text-align: center;
    font-family: 'VestiSans';
    font-size: 1.125rem;
    color: var(--detail-color);
    transition: color 0.2s ease;
}

.column a:last-child:hover {
    color: var(--active-color);
}

.column a:last-child::before {
    top: 1.563vw;
    position: relative;
    display: block;
    content: '';
    width: 9.375vw;
    height: 0.208vw;
    background-image: url('@/assets/Bg-line-game.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.column a:last-child:hover::before {
    opacity: 0;
}

.column a:last-child::after {
    top: -0.052vw;
    position: relative;
    display: block;
    content: '';
    width: 9.375vw;
    height: 0.208vw;
    background-image: url('@/assets/Bg-line-game-blue.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.column a:last-child:hover::after {
    opacity: 1;
}

.column:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.156vw;
    margin-left: 1.875vw;
}

.column h2 {
    font-family: 'Caveat';
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--base-color);
}

.info {
    margin-top: 0.260vw;
    display: flex;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 1.458vw;
}

.text div {
    width: 13.021vw;
    display: flex;
    justify-content: space-between;
    font-family: 'VestiSans';
    font-size: 1.125rem;
}

.text div span {
    font-weight: bold;
}

.dop-text {
    margin-left: 1.458vw;
    margin-top: 1.458vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.458vw;
    width: 11.771vw;
}

.dop-text span {
    font-family: 'VestiSans';
    font-size: 1.125rem;
    font-weight: bold;
}

.title-text {
    align-self: start;
}

.title-text span:last-child {
    margin-left: 3.594vw;
}

.rating {
    display: flex;
    justify-content: space-between;
    width: 10.833vw;
}

.rating div {
    width: 3.854vw;
    display: flex;
    justify-content: center;
    gap: 0.208vw;
}

.rating img {
    width: 1.146vw;
    height: 1.198vw;
}

.answer {
    display: flex;
    flex-direction: column;
    margin-left: 3.021vw;
    margin-top: 1.667vw;
    gap: 1.667vw;
}

.answer div {
    width: 7.917vw;
    height: 4.792vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'VestiSans';
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.2s ease;
}

.answer div:first-child {
    color: var(--base-green);
}

.answer div:last-child {
    color: var(--detail-color);
}

.answer div:hover {
    color: var(--active-color);
}

.answer div:first-child::before {
    content: '';
    position: absolute;
    width: 7.917vw;
    height: 4.792vw;
    background-image: url('@/assets/Bg-form-answer-green.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.answer div:last-child::before {
    content: '';
    position: absolute;
    width: 7.917vw;
    height: 4.792vw;
    background-image: url('@/assets/Bg-form-answer-red.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.answer div:hover::before {
    opacity: 0;
}

.answer div::after {
    content: '';
    position: absolute;
    width: 7.917vw;
    height: 4.792vw;
    background-image: url('@/assets/Bg-form-answer-blue.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.answer div:hover::after {
    opacity: 1;
}
</style>