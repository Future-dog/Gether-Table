<template>
    <Base />
    <section>
        <div class="paper">
            <form action="">
                <input type="text" class="name">
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
                            <div><label for="date">Дата</label><input type="text" id="date"></div>
                            <div><label for="duration">Длительность</label><input type="text" id="duration"></div>
                            <div><label for="genre">Жанр</label><input type="text" id="genre"></div>
                            <div><label for="quantity">Кол-во игроков</label><input type="text" id="quantity"></div>
                            <div><label for="restrictions">Ограничения</label><input type="text" id="restrictions">
                            </div>
                            <div><label for="hb">ХБ</label><input type="text" id="hb"></div>
                        </div>
                        <div class="column">
                            <div><label for="quantity1">Количество сессий</label><input type="text" id="quantity1">
                            </div>
                            <div><label for="test">Пробные сессии</label><input type="text" id="test"></div>
                            <div><label for="subgenre">Поджанр</label><input type="text" id="subgenre"></div>
                            <div><label for="collected">Собрано</label><input type="text" id="collected"></div>
                            <div><label for="level">Уровень</label><input type="text" id="level"></div>
                        </div>
                    </div>
                </div>
                <div class="second-group">
                    <div class="description-group">
                        <label for="synopsis">Синопсис</label>
                        <textarea id="synopsis" cols="35" rows="12"></textarea>
                    </div>
                    <div class="description-group">
                        <label for="description">Описание</label>
                        <textarea id="description" cols="35" rows="12"></textarea>
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
    height: 75vw;
    min-height: 49.740vw;   /* 100vh → 49.740vw */
    aspect-ratio: 1536 / 1450;
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
    height: 65vw;
    min-height: 49.740vw;   /* 100vh → 49.740vw */
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
    margin-top: 0.2vw;
    width: 61vw;
    height: 4.02vw;
    font-family: 'Caveat';
    font-size: 4rem;
    font-weight: bold;
    color: var(--base-color);
    text-align: center;
}

.first-group {
    display: flex;
    justify-content: flex-start;
    margin-top: 2.238vw;   /* 4.5vh → 2.238vw */
    gap: 6.5vw;
}

.upload-wrapper {
    width: 14.17vw;
    height: 21.439vw;      /* 43.1vh → 21.439vw */
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
}

.upload-label:hover .upload-text {
    color: var(--active-color);
}

/* Текст */
.upload-text {
    display: block;
    text-align: center;
    font-family: 'VestiSans';
    font-size: 1.75rem;    /* 28px → 1.75rem */
    color: var(--detail-color);
    cursor: pointer;
    transform: translateY(-86%);
    transition: all 0.25s ease;
}

/* После выбора картинки */
.upload-frame.has-image {
    background-size: cover;
    background-position: center;
    border: none;
}

/* ------------ Основные данные --------- */

.columns {
    margin-top: 0.746vw;   /* 1.5vh → 0.746vw */
    display: flex;
    gap: 1.2vw;
    margin-right: 1vw;
}

.column {
    display: flex;
    flex-direction: column;
    gap: 1.303vw;          /* 2.62vh → 1.303vw */
}

.column div {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    font-size: 1.75rem;    /* 28px → 1.75rem */
    color: var(--base-color);
}

.column input {
    height: 1.990vw;       /* 4vh → 1.990vw */
    font-family: 'VestiSans';
    font-size: 1.6875rem;  /* 27px → 1.6875rem */
    color: var(--base-color);
    text-align: center;
}

input[id="date"] {
    width: 6.5vw;
}

input[id="duration"] {
    width: 7.3vw;
}

input[id="genre"] {
    width: 9.5vw;
}

input[id="quantity"] {
    width: 1.6vw;
}

input[id="restrictions"] {
    width: 3.9vw;
}

input[id="hb"] {
    width: 3.9vw;
}

input[id="quantity1"] {
    width: 2.45vw;
}

input[id="test"] {
    width: 4vw;
}

input[id="subgenre"] {
    width: 9.5vw;
}

input[id="collected"] {
    width: 1.6vw;
}

input[id="level"] {
    width: 2.5vw;
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
    margin-top: 7.958vw;   /* 16vh → 7.958vw */
    gap: 1.3vw;
    display: flex;
}

.description-group {
    display: flex;
    flex-direction: column;
}

.description-group label {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 1.75rem;    /* 28px → 1.75rem */
    color: var(--base-color);
}

textarea {
    width: 29.7vw;
    height: 27.621vw;      /* 55.52vh → 27.621vw */
    font-family: 'VestiSans';
    font-size: 1.75rem;    /* 28px → 1.75rem */
    color: var(--base-color);
    line-height: 150%;
}

/* Базовый размер для ширины 1920px и выше */
</style>