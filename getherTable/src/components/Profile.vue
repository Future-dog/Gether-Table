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
                        <div class="create-review">
                            Оставить отзыв
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

const reviwsItems = [
    { id: '1', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 3 },
    { id: '2', link: '#', src: Logo, meaning_soc: 2, meaning_fig: 3 },
    { id: '3', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 1 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '4', link: '#', src: Logo, meaning_soc: 3, meaning_fig: 2 },
]

// Состояние формы
const isCreating = ref(false)

// Новый отзыв
const newReview = ref({
    meaning_soc: 0,
    meaning_fig: 0
})

// Показать форму создания
function showCreateForm() {
    isCreating.value = true
}

// Установить рейтинг для социалки
function setSocRating(rating) {
    newReview.value.meaning_soc = rating
}

// Установить рейтинг для боя
function setFigRating(rating) {
    newReview.value.meaning_fig = rating
}

// Сохранить отзыв
function saveReview() {
    if (newReview.value.meaning_soc === 0 || newReview.value.meaning_fig === 0) {
        alert('Пожалуйста, оцените оба параметра')
        return
    }
    
    // Создаем новый отзыв
    const newId = (Math.max(...reviwsItems.value.map(item => parseInt(item.id))) + 1).toString()
    
    const reviewToAdd = {
        id: newId,
        link: '#',
        src: Logo,
        meaning_soc: newReview.value.meaning_soc,
        meaning_fig: newReview.value.meaning_fig
    }
    
    // Добавляем в начало или конец массива
    reviwsItems.value.push(reviewToAdd)
    
    // Сброс формы
    newReview.value = { meaning_soc: 0, meaning_fig: 0 }
    isCreating.value = false
    
    // Прокрутка к новому отзыву
    setTimeout(() => {
        const reviewsContainer = document.querySelector('.reviews')
        if (reviewsContainer) {
            reviewsContainer.scrollTop = reviewsContainer.scrollHeight
        }
    }, 100)
}

// Отмена создания
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
</style>