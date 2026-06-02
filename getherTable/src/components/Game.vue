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
    width: 78.958vw;
    height: 91.146vw;
    min-height: 100vh;
    background-image: url('@/assets/Bg-paper-game.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form {
    margin-top: 6.823vw;
    width: 61.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    width: auto;
    height: auto;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
}

input:focus {
    outline: none;
    box-shadow: none;
}

.name {
    margin-top: 0.249vw;
    width: 61vw;
    height: 4.029vw;
    font-family: 'Caveat';
    font-size: 4rem;
    font-weight: bold;
    color: var(--base-color);
    text-align: center;
}

.first-group {
    width: 61.563vw;
    height: 22.240vw;
    background: url('@/assets/Bg-form-game.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    margin-top: 2.238vw;
    gap: 6.406vw;
}

.upload-wrapper {
    margin-top: 0.208vw;
    margin-left: 0.156vw;
    width: 14.583vw;
    height: 21.875vw;
}

.upload-wrapper img {
    width: 100%;
    height: 100%;
}

.columns {
    margin-top: 1.198vw;
    display: flex;
    gap: 1.302vw;
}

.column {
    display: flex;
    flex-direction: column;
    gap: 1.303vw;
}

.column div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'VestiSans';
    font-size: 1.7625rem;
    color: var(--base-color);
}

.column:first-child {
    width: 19.271vw;
}

.column:last-child {
    width: 18.490vw;
}

.column label {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 1.75rem;
    color: var(--base-color);
}

.description-group div {
    font-family: 'VestiSans';
    font-size: 1.75rem;
    color: var(--base-color);
    width: 29.740vw;
    line-height: 150%;
    text-align: justify;
}

.second-group {
    margin-top: 7.958vw;
    gap: 1.823vw;
    display: flex;
}

.description-group {
    display: flex;
    flex-direction: column;
}

.description-group label {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 1.75rem;
    color: var(--base-color);
}

.master-card {
    margin-top: 3.125vw;
    gap: 0.833vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.master-card h2 {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 1.75rem;
    color: var(--base-color);
}

.card-background {
    width: 61.563vw;
    height: 14.583vw;
    background: url('@/assets/Bg-form-game-masterCard.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1.823vw;
    display: flex;
}

.card-column:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.card-column:first-child img {
    width: 7.813vw;
    height: 7.813vw;
}

.card-column:first-child span {
    font-family: 'Caveat';
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--base-color);
}

.card-column:nth-child(2) {
    margin-left: 3.021vw;
    margin-top: 0.156vw;
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

.card-column:last-child {
    margin-left: 3.021vw;
    width: 17.448vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.625vw;
    font-family: 'VestiSans';
    font-size: 1.125rem;
    color: var(--base-color);
    font-weight: bold;
}

.game-title:first-child {
    margin-top: 0.833vw;
}

.game-title {
    margin-top: 0.182vw;
    font-family: 'VestiSans';
    font-size: 1.125rem;
    font-weight: normal;
    color: var(--detail-color);
    transition: color 0.2s ease;
    cursor: pointer;
}

.game-title:hover {
    color: var(--active-color);
}

.game-title::before {
    top: 1.563vw;
    position: relative;
    display: block;
    content: '';
    width: 100%;
    height: 0.208vw;
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
    top: -0.052vw;
    position: relative;
    display: block;
    content: '';
    width: 100%;
    height: 0.208vw;
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