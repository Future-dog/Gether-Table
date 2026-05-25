<template>
    <Base />
    <section>
        <div class="paper">
            <div class="response" v-for="item in cardsItems" :key="item.id">
                <div class="card">
                    <div class="column">
                        <img :src="item.avatar" alt="">
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
    { id: '1', avatar: Avatar, link: '#', game: 'След кульминации', title: 'Лягух', count: '2 года', genre: 'хоррор', games_count: '3', hb: 'да', soc: 3, fig: 3 },
    { id: '2', avatar: Avatar, link: '#', game: 'Страх подземелий', title: 'Будущее', count: 'год', genre: 'панк', games_count: '7', hb: 'нет', soc: 2, fig: 1 },
    { id: '3', avatar: Avatar, link: '#', game: 'Какое-то название', title: 'Прошлое', count: 'пол года', genre: 'метал', games_count: '10', hb: 'да', soc: 1, fig: 3 },
    { id: '4', avatar: Avatar, link: '#', game: 'Уже лень придумывать', title: 'Кажюни', count: '2 года', genre: 'железо', games_count: '23', hb: 'да', soc: 2, fig: 2 },
    { id: '5', avatar: Avatar, link: '#', game: 'След кульминации', title: 'Лягух', count: '2 года', genre: 'хоррор', games_count: '3', hb: 'да', soc: 3, fig: 3 },
    { id: '6', avatar: Avatar, link: '#', game: 'След кульминации', title: 'Лягух', count: '2 года', genre: 'хоррор', games_count: '3', hb: 'да', soc: 3, fig: 3 },
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
    height: 199.17vh;
    background-image: url('@/assets/Bg-paper-responses.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

.response {
    width: 1025px;
    height: 280px;
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
    margin-top: 182px;
}

.column:first-child {
    width: 181px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 19px;
    margin-top: 35px;
}

.column img {
    width: 150px;
    height: 150px;
}

.column a {
    margin-top: 26px;
    text-align: center;
    font-family: 'VestiSans';
    font-size: 18px;
    color: var(--red-color);
    transition: color 0.2s ease;
}

.column a:hover {
    color: var(--base-blue);
}

.column a::before {
    top: 30px;
    position: relative;
    display: block;
    content: '';
    width: 180px;
    height: 4px;
    background-image: url('@/assets/Bg-line-game.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.column a:hover::before {
    opacity: 0;
}

.column a::after {
    top: -1px;
    position: relative;
    display: block;
    content: '';
    width: 180px;
    height: 4px;
    background-image: url('@/assets/Bg-line-game-blue.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.column a:hover::after {
    opacity: 1;
}

.column:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3px;
    margin-left: 36px;
}

.column h2 {
    font-family: 'Caveat';
    font-weight: bold;
    font-size: 24px;
    color: var(--main-color);
}

.info {
    margin-top: 5px;
    display: flex;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.text div {
    width: 250px;
    display: flex;
    justify-content: space-between;
    font-family: 'VestiSans';
    font-size: 18px;
}

.text div span {
    font-weight: bold;
}

.dop-text {
    margin-left: 28px;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    width: 226px;
}

.dop-text span {
    font-family: 'VestiSans';
    font-size: 18px;
    font-weight: bold;
}

.title-text {
    align-self: start;
}

.title-text span:last-child {
    margin-left: 69px;
}

.rating {
    display: flex;
    justify-content: space-between;
    width: 208px;
}

.rating div {
    width: 74px;
    display: flex;
    justify-content: center;
    gap: 4px;
}

.rating img {
    width: 22px;
    height: 23px;
}

.answer {
    display: flex;
    flex-direction: column;
    margin-left: 58px;
    margin-top: 32px;
    gap: 32px;
}

.answer div {
    width: 152px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'VestiSans';
    font-size: 24px;
    font-weight: bold;
    transition: color 0.2s ease;
}

.answer div:first-child {
    color: var(--base-green);
}

.answer div:last-child {
    color: var(--red-color);
}

.answer div:hover {
    color: var(--base-blue);
}

.answer div:first-child::before {
    content: '';
    position: absolute;
    width: 152px;
    height: 92px;
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
    width: 152px;
    height: 92px;
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
    width: 152px;
    height: 92px;
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