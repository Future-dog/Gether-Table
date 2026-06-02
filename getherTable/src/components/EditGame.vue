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
    height: 75.605vw;
    min-height: 100vh;
    background-image: url('@/assets/Bg-paper-createGames.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    margin-top: 7.292vw;
    width: 61.5vw;
    height: 65.657vw;
    min-height: 100vh;
    background: url('@/assets/Bg-form-createGames.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
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
    display: flex;
    justify-content: flex-start;
    margin-top: 2.238vw;
    gap: 6.5vw;
}

.upload-wrapper {
    width: 14.17vw;
    height: 21.439vw;
}

.upload-label input {
    display: none;
}

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

.upload-text {
    display: block;
    text-align: center;
    font-family: 'VestiSans';
    font-size: 1.75rem;
    color: var(--detail-color);
    cursor: pointer;
    transform: translateY(-5%);
    transition: color 0.2s ease;
}

.upload-wrapper:hover .upload-text {
    color: var(--active-color);
}

.upload-frame.has-image {
    background-size: cover;
    background-position: center;
    border: none;
}

.columns {
    margin-top: 0.746vw;
    display: flex;
    gap: 1.2vw;
    margin-right: 1vw;
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
    font-size: 1.75rem;
    color: var(--base-color);
}

.column input {
    height: 1.990vw;
    font-family: 'VestiSans';
    font-size: 1.6875rem;
    color: var(--base-color);
    text-align: center;
}

input[id="date"] { width: 6.5vw; }
input[id="duration"] { width: 7.3vw; }
input[id="genre"] { width: 9.5vw; }
input[id="quantity"] { width: 1.6vw; }
input[id="restrictions"] { width: 3.9vw; }
input[id="hb"] { width: 3.9vw; }
input[id="quantity1"] { width: 2.45vw; }
input[id="test"] { width: 4vw; }
input[id="subgenre"] { width: 9.5vw; }
input[id="collected"] { width: 1.6vw; }
input[id="level"] { width: 2.5vw; }

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
    margin-top: 7.958vw;
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
    font-size: 1.75rem;
    color: var(--base-color);
}

textarea {
    width: 29vw !important;
    height: 27.621vw;
    font-family: 'VestiSans';
    font-size: 1.75rem;
    color: var(--base-color);
    line-height: 150%;
    text-align: justify;
    overflow-x: hidden;
}

.description-group:last-child {
    margin-left: 0.313vw;
}
</style>