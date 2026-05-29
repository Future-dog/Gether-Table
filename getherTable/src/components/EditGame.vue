<template>
    <Base />
    <section>
        <div class="paper">
            <form action="">
                <input value="Страх подземелий" type="text" class="name">
                <div class="first-group">
                    <div class="upload-wrapper">
                        <label for="image-upload" class="upload-label">
                            <input type="file" id="image-upload" accept="image/*" @change="previewImage">
                            <div class="upload-frame" id="upload-frame"></div>
                            <span class="upload-text">Выбрать</span>
                        </label>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div><label for="date">Дата</label><input value="12.12.1212" type="text" id="date"></div>
                            <div><label for="duration">Длительность</label><input value="2 года" type="text"
                                    id="duration"></div>
                            <div><label for="genre">Жанр</label><input value="смешанно" type="text" id="genre"></div>
                            <div><label for="quantity">Кол-во игроков</label><input value="5" type="text" id="quantity">
                            </div>
                            <div><label for="restrictions">Ограничения</label><input value="есть" type="text"
                                    id="restrictions">
                            </div>
                            <div><label for="hb">ХБ</label><input value="есть" type="text" id="hb"></div>
                        </div>
                        <div class="column">
                            <div><label for="quantity1">Количество сессий</label><input value="?" type="text"
                                    id="quantity1">
                            </div>
                            <div><label for="test">Пробные сессии</label><input value="есть" type="text" id="test">
                            </div>
                            <div><label for="subgenre">Поджанр</label><input value="смешанно" type="text" id="subgenre">
                            </div>
                            <div><label for="collected">Собрано</label><input value="5" type="text" id="collected">
                            </div>
                            <div><label for="level">Уровень</label><input value="20" type="text" id="level"></div>
                        </div>
                    </div>
                </div>
                <div class="second-group">
                    <div class="description-group">
                        <label for="synopsis">Синопсис</label>
                        <textarea id="synopsis" cols="35"
                            rows="12">Ужас, страх, боль, печаль - это все ждет всех, кто сунеться в замок вапира. Но такие мелочи не заботят нюх на ноживу. Лорд ждет вас в своих покоях.</textarea>
                    </div>
                    <div class="description-group">
                        <label for="description">Описание</label>
                        <textarea id="description" cols="25"
                            rows="12">Ужас, страх, боль, печаль - это все ждет всех, кто сунется в замок вапира. Но такие мелочи не заботят нюх на ноживу. Лорд ждет вас в своих покоях. Ужас, страх, боль, печаль - это все ждет всех, кто сунеться в замок вапира. Но такие мелочи не заботят нюх на ноживу. Лорд ждет вас в своих покоях.</textarea>
                    </div>
                </div>



            </form>
        </div>
    </section>
</template>



<script setup>
import Base from './Base.vue'
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
    width: 80vw;
    height: 152vh;
    background-image: url('@/assets/Bg-paper-createGames.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    margin-top: 140px;
    width: 61.5vw;
    height: 132vh;
    background: url('@/assets/Bg-form-createGames.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
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
    display: flex;
    justify-content: flex-start;
    margin-top: 4.5vh;
    gap: 6.5vw;
}

.upload-wrapper {
    width: 14.17vw;
    height: 43.1vh;
}

/* Скрываем стандартный input */
.upload-label input {
    display: none;
}

/* Рамка для загрузки */
.upload-frame {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    background-image: url('@/assets/f71c2ac36677e50e37df03080c0de5b0 1.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

/* Текст */
.upload-text {
    display: block;
    text-align: center;
    font-family: 'VestiSans';
    font-size: 28px;
    color: var(--base-red);
    cursor: pointer;
    transform: translateY(-5%);
    transition: color 0.2s ease;
}

.upload-wrapper:hover .upload-text {
    color: var(--base-blue);
}

/* После выбора картинки */
.upload-frame.has-image {
    background-size: cover;
    background-position: center;
    border: none;
}

/* ------------ Основные данные --------- */

.columns {
    margin-top: 1.5vh;
    display: flex;
    gap: 1.2vw;
    margin-right: 1vw;
}

.column {
    display: flex;
    flex-direction: column;
    gap: 2.62vh;
}

.column div {
    display: flex;
    align-items: center;
}

.column:first-child {
    width: 19.7vw;
}

.column:last-child {
    width: 18.4vw;
}

.column label {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 28px;
    color: var(--main-color);
}

.column input {
    height: 4vh;
    font-family: 'VestiSans';
    font-size: 27px;
    color: var(--main-color);
    text-align: center;
}

input[id="date"] {
    width: 6.5vw;
    margin-left: 9.6vw;
}

input[id="duration"] {
    width: 7.3vw;
    margin-left: 1.79vw;
}

input[id="genre"] {
    width: 9.5vw;
    margin-left: 5.79vw;
}

input[id="quantity"] {
    width: 1.6vw;
    margin-left: 6.01vw;
}

input[id="restrictions"] {
    width: 3.9vw;
    margin-left: 5.65vw;
}

input[id="hb"] {
    width: 3.9vw;
    margin-left: 13.65vw;
}

input[id="quantity1"] {
    width: 2.45vw;
    margin-left: 1.17vw;
}

input[id="test"] {
    width: 4vw;
    margin-left: 1.65vw;
}

input[id="subgenre"] {
    width: 9.5vw;
    margin-left: 1.75vw;
}

input[id="collected"] {
    width: 1.6vw;
    margin-left: 9.99vw;
}

input[id="level"] {
    width: 2.5vw;
    margin-left: 9.3vw;
}

textarea {
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    resize: none;
    box-shadow: none;
}

.second-group {
    margin-top: 16vh;
    gap: 1.9vw;
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

textarea {
    width: 29vw !important;
    height: 55.52vh;
    font-family: 'VestiSans';
    font-size: 28px;
    color: var(--main-color);
    line-height: 150%;
    text-align: justify;
    overflow-x: hidden;
}

.description-group:last-child {
    margin-left: 6px;
}
</style>