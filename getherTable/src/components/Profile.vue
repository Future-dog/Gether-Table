<template>
    <Base />
    <section>
        <div class="paper">
            <div class="cards">
                <div class="card">
                    <div class="card-column">
                        <img :src="Logo" alt="">
                        <div class="reviews">

                            <div v-for="item in reviwsItems" :key="item.id" class="review">
                                <div class="review-column">
                                    <a :href="item.link"><img :src="item.src" alt="avatar"></a>
                                </div>
                                <div class="review-column">
                                    <span>Социалка</span>
                                    <span>Бой</span>
                                </div>
                                <div class="review-column">
                                    <div><img v-for="n in item.meaning_soc" :key="n" class="Logo-icon" :src="Logo_Red"
                                            alt="Logo icon"></div>
                                    <div><img v-for="n in item.meaning_fig" :key="n" class="Logo-icon" :src="Logo_Red"
                                            alt="Logo icon"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Кнопка или форма создания -->
                        <div v-if="!isCreating" class="create-review" @click="showCreateForm">
                            Оставить отзыв
                        </div>

                        <!-- Форма создания нового отзыва (копия структуры review) -->
                        <div v-else style="margin-top: 7px;">
                            <div class="review">
                                <div class="review-column">
                                    <img :src="Logo" alt="avatar">
                                </div>
                                <div class="review-column">
                                    <span>Социалка</span>
                                    <span>Бой</span>
                                </div>
                                <div class="review-column">
                                    <div class="rating-group">
                                        <div class="rating-star">
                                            <img v-for="n in 3" :key="n" @click="setSocRating(n)"
                                                :src="n <= newReview.meaning_soc ? Logo_Red : Logo_Red_Gray"
                                                class="Logo-icon clickable" alt="rating">
                                        </div>
                                    </div>
                                    <div class="rating-group">
                                        <div class="rating-star">
                                            <img v-for="n in 3" :key="n" @click="setFigRating(n)"
                                                :src="n <= newReview.meaning_fig ? Logo_Red : Logo_Red_Gray"
                                                class="Logo-icon clickable" alt="rating">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button @click="saveReview" class="save-btn">Сохранить</button>
                                <button @click="cancelCreate" class="cancel-btn">Отмена</button>
                            </div>
                        </div>

                    </div>
                    <div class="card-column">
                        <h1>Игрок</h1>
                        <div>
                            <svg></svg>
                        </div>
                        <div class="info">
                            <div class="info-column">
                                <div><span>Имя</span>Лягух</div>
                                <div><span>Сколько в D&D</span>2 года</div>
                                <div><span>Любимый жанр</span>Хоррор</div>
                                <div><span>Кол-во игр сыграно</span>20</div>
                                <div><span>Играет с хб</span>нет</div>
                                <div><span>Играет с хб</span>нет</div>
                                <div><span>Играет с хб</span>нет</div>
                            </div>
                            <div class="info-column">
                                <div><span>Имя</span>Лягух</div>
                                <div><span>Имя</span>Лягух</div>
                                <div><span>Имя</span>Лягух</div>
                                <div><span>Имя</span>Лягух</div>
                                <div><span>Имя</span>Лягух</div>
                                <div><span>Имя</span>Лягух</div>
                                <div><span>Имя</span>Лягух</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import Base from './Base.vue'
import Logo from './../assets/Logo.png'
import Logo_Red from './../assets/FrogRed.svg'
import Logo_Red_Gray from './../assets/FrogRed.svg' // или создайте копию с другим цветом
import { ref } from 'vue'
const reviwsItems = ref([
    { id: '1', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 3 },
    { id: '2', link: '#', src: Logo, meaning_soc: 2, meaning_fig: 3 },
    { id: '3', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 1 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '5', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '6', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '7', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '8', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '9', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '10', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '11', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
])

const isCreating = ref(false)

const newReview = ref({
    meaning_soc: 0,
    meaning_fig: 0
})

function showCreateForm() {
    isCreating.value = true
}

function setSocRating(rating) {
    newReview.value.meaning_soc = rating
}

function setFigRating(rating) {
    newReview.value.meaning_fig = rating
}

function saveReview() {
    if (newReview.value.meaning_soc === 0 || newReview.value.meaning_fig === 0) {
        alert('Выберите оценку')
        return
    }

    const newId = (Math.max(...reviwsItems.value.map(item => parseInt(item.id))) + 1).toString()

    reviwsItems.value.push({
        id: newId,
        link: '#',
        src: Logo,
        meaning_soc: newReview.value.meaning_soc,
        meaning_fig: newReview.value.meaning_fig
    })

    newReview.value = { meaning_soc: 0, meaning_fig: 0 }
    isCreating.value = false

    // Прокрутка вниз
    setTimeout(() => {
        const reviewsContainer = document.querySelector('.reviews')
        if (reviewsContainer) {
            reviewsContainer.scrollTop = reviewsContainer.scrollHeight
        }
    }, 100)
}

function cancelCreate() {
    newReview.value = { meaning_soc: 0, meaning_fig: 0 }
    isCreating.value = false
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
    width: 79vw;
    height: 199.17vh;
    background-image: url('@/assets/Bg-paper-profile.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cards {
    margin-top: 155px;
    width: 67.75vw;
    height: 166.82vh;
    background: url('@/assets/Bg-form-profile.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card {
    display: flex;
    width: 1300px;
}

.card-column {
    position: relative;
    width: 242px;
    height: 663px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 45px;
    margin-top: 38px;
}

.card-column img {
    width: 200px;
    height: 200px;
}

.reviews {
    margin-top: 53px;
    gap: 7px;
    height: 321px;
    width: 242px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.review {
    width: 228px;
    height: 75px !important;
    background-image: url('@/assets/Bg-form-review-profile.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.review-column {
    display: flex;
    flex-direction: column;
}

.review-column:first-child {
    width: 59px;
    height: 59px;
    margin-left: 8px;
}

.review-column:first-child a {
    width: 100%;
    height: 100%;
}

.review-column:first-child a img {
    width: 100%;
    height: 100%;
}

.review-column:nth-child(2) {
    margin-left: 2px;
    gap: 13px;
}

.review-column:nth-child(2) span {
    font-family: 'Quicksand';
    font-weight: bold;
    font-size: 13px;
    color: var(--main-color);
}

.review-column:last-child {
    margin-left: 11px;
    gap: 8px;
}

.review-column:last-child img {
    width: 22px;
    height: 23px;
}

.review-column:last-child div {
    gap: 4px;
    display: flex;
}

.create-review {
    margin-top: 7px;
    width: 228px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Quicksand';
    font-weight: bold;
    font-size: 24px;
    color: var(--base-red);
    transition: color 0.3s ease;
}

.create-review:hover {
    color: var(--base-blue);
}

.create-review::before {
    content: '';
    position: absolute;
    width: 228px;
    height: 75px;
    background-image: url('@/assets/Bg-form-createReview.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
    transition: opacity 0.3s ease;
}

.create-review:hover::before {
    opacity: 0;
}

.create-review::after {
    content: '';
    position: absolute;
    width: 228px;
    height: 75px;
    background-image: url('@/assets/Bg-form-createReview-hover.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.3s ease;
}

.create-review:hover::after {
    opacity: 1;
}

/* new style for createReview */

.rating-group {
    display: flex;
    gap: 4px;
}

.rating-star {
    display: flex;
    gap: 4px;
}

.rating-star img {
    width: 22px;
    height: 23px;
    cursor: pointer;
    transition: transform 0.1s;
}

.rating-star img:hover {
    transform: scale(1.1);
}

/* Кнопки действий */
.form-actions {
    position: absolute;
    bottom: -35px;
    left: 0;
    right: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    z-index: 10;
}

.save-btn,
.cancel-btn {
    padding: 4px 12px;
    font-family: 'Quicksand';
    font-weight: bold;
    font-size: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
}

.save-btn {
    background: #833138;
    color: white;
}

.cancel-btn {
    background: #666;
    color: white;
}

.save-btn:hover,
.cancel-btn:hover {
    opacity: 0.8;
}
</style>