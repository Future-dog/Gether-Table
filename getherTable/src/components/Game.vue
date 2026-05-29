<template>
    <Base />
    <section>
        <div class="paper">
            <div class="form">
                <h1 class="name">Страх подземелий</h1>
                <div class="first-group">
                    <div class="upload-wrapper">
                        <img :src="Cover" alt="">
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div><label for="date">Дата</label>01.01.2001</div>
                            <div><label for="duration">Длительность</label>2 недели</div>
                            <div><label for="genre">Жанр</label>фэнтези</div>
                            <div><label for="quantity">Кол-во игроков</label>5</div>
                            <div><label for="restrictions">Ограничения</label>да
                            </div>
                            <div><label for="hb">ХБ</label>да</div>
                        </div>
                        <div class="column">
                            <div><label for="quantity1">Количество сессий</label>20
                            </div>
                            <div><label for="test">Пробные сессии</label>да</div>
                            <div><label for="subgenre">Поджанр</label>хоррор</div>
                            <div><label for="collected">Собрано</label>4</div>
                            <div><label for="level">Уровень</label>15</div>
                        </div>
                    </div>
                </div>
                <div class="second-group">
                    <div class="description-group">
                        <label for="synopsis">Синопсис</label>
                        <div>Ужас, страх, боль, печаль - это все ждет всех, кто сунеться в замок вапира. Но такие мелочи
                            не заботят нюх на ноживу. Лорд ждет вас в своих покоях.</div>
                    </div>
                    <div class="description-group">
                        <label for="description">Описание</label>
                        <div>Ужас, страх, боль, печаль - это все ждет всех, кто сунеться в замок вапира. Но такие мелочи
                            не заботят нюх на ноживу. Лорд ждет вас в своих покоях. Ужас, страх, боль, печаль - это все
                            ждет всех, кто сунеться в замок вапира. Но такие мелочи не заботят нюх на ноживу. Лорд ждет
                            вас в своих покоях.</div>
                    </div>
                </div>
                <div class="master-card">
                    <h2>Мастер</h2>
                    <div class="card-background">
                        <div class="card-column">
                            <a href="/profile"><img :src="Avatar" alt=""></a>
                            <span>Лягух</span>
                        </div>
                        <div class="card-column">
                            <div class="info">
                                <div class="text">
                                    <div><span>Сколько в D&D</span>2 года</div>
                                    <div><span>Любимый жанр</span>Хоррор</div>
                                    <div><span>Кол-во игр сыграно</span>20</div>
                                    <div><span>Играет с ХБ</span>нет</div>
                                </div>
                                <div class="dop-text">
                                    <span>Средние оценки</span>
                                    <div class="title-text"><span>Социалка</span><span>Бой</span></div>
                                    <div class="rating">
                                        <div><img v-for="n in 3" :key="n" :src="Frog_red" class="Logo-icon"></div>
                                        <div><img v-for="n in 3" :key="n" :src="Frog_red" class="Logo-icon"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-column">
                            <span>Другие игры</span>
                            <span class="game-title" v-for="game in itemsGames"><a href="/game">{{ game }}</a></span>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    </section>
</template>



<script setup>
import Base from './Base.vue'
import Cover from './../assets/f71c2ac36677e50e37df03080c0de5b0 1.jpg'
import Avatar from './../assets/Logo.png'
import Frog_red from './../assets/FrogRed.svg'

const itemsGames = [
    'След кульминации',
    'След кульминации и еще там',
    'След кульминации',
    'След кульминации тут еще длиннее'
]

// В вашем Vue компоненте
function previewImage(event) {
    const file = event.target.files[0];
    const frame = document.getElementById('upload-frame');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            frame.style.backgroundImage = `url(${e.target.result})`;
            frame.style.backgroundSize = 'cover';
            frame.style.backgroundPosition = 'center';
            // Убираем штриховую рамку, показываем картинку
            frame.style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(file);
    }
}
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
}

.paper {
    width: 1516px;
    height: 1750px;
    background-image: url('@/assets/Bg-paper-game.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form {
    margin-top: 131px;
    width: 61.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    /* Сброс базовых стилей */
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    width: auto;
    height: auto;

    /* Убираем стандартные эффекты */
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
}

input:focus {
    outline: none;
    box-shadow: none;
}

.name {
    margin-top: 0.5vh;
    width: 61vw;
    height: 8.1vh;
    font-family: 'Caveat';
    font-size: 64px;
    font-weight: bold;
    color: var(--main-color);
    text-align: center;
}

.first-group {
    width: 1182px;
    height: 427px;
    background: url('@/assets/Bg-form-game.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    margin-top: 4.5vh;
    gap: 123px;
}

.upload-wrapper {
    margin-top: 4px;
    margin-left: 3px;
    width: 280px;
    height: 420px;
}

.upload-wrapper img {
    width: 100%;
    height: 100%;
}

/* ------------ Основные данные --------- */

.columns {
    margin-top: 23px;
    display: flex;
    gap: 25px;
}

.column {
    display: flex;
    flex-direction: column;
    gap: 2.62vh;
}

.column div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'VestiSans';
    font-size: 28.2px;
    color: var(--main-color);
}

.column:first-child {
    width: 370px;
}

.column:last-child {
    width: 355px;
}

.column label {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 28px;
    color: var(--main-color);
}

.description-group div {
    font-family: 'VestiSans';
    font-size: 28px;
    color: var(--main-color);
    width: 571px;
    line-height: 150%;
    text-align: justify;
}

.second-group {
    margin-top: 16vh;
    gap: 35px;
    display: flex;
}

.description-group {
    display: flex;
    flex-direction: column;
}

.description-group label {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 28px;
    color: var(--main-color);
}

.master-card {
    margin-top: 60px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.master-card h2 {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 28px;
    color: var(--main-color);
}

.card-background {
    width: 1182px;
    height: 280px;
    background: url('@/assets/Bg-form-game-masterCard.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 35px;
    display: flex;
}

.card-column:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.card-column:first-child img {
    width: 150px;
    height: 150px;
}

.card-column:first-child span {
    font-family: 'Caveat';
    font-weight: bold;
    font-size: 24px;
    color: var(--main-color);
}

.card-column:nth-child(2) {
    margin-left: 58px;
    margin-top: 3px;
}

/* ========== card info ========= */

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

/* ========= END ========== */

.card-column:last-child {
    margin-left: 58px;
    width: 335px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 11px;
    margin-top: 12px;
    font-family: 'VestiSans';
    font-size: 18px;
    color: var(--base-color);
    font-weight: bold;
}

.game-title:first-child {
    margin-top: 16px;
}

.game-title {
    margin-top: 3.5px;
    font-family: 'VestiSans';
    font-size: 18px;
    font-weight: normal;
    color: var(--red-color);
    transition: color 0.2s ease;
    cursor: pointer;
}

.game-title:hover {
    color: var(--base-blue);
}

.game-title::before {
    top: 30px;
    position: relative;
    display: block;
    content: '';
    width: 100%;
    height: 4px;
    background-image: url('@/assets/Bg-line-game.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.game-title:hover::before {
    opacity: 0;
}

.game-title::after {
    top: -1px;
    position: relative;
    display: block;
    content: '';
    width: 100%;
    height: 4px;
    background-image: url('@/assets/Bg-line-game-blue.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.2s ease;
}

.game-title:hover::after {
    opacity: 1;
}
</style>