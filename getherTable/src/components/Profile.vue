<template>
    <Base />
    <section>
        <div class="paper">
            <div class="cards">
                <div class="card" v-for="item in cardsItems" :key="item.id">
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
                        <div class="title">
                            <h1>{{ item.name }}</h1>
                            <a href="/editProfile"><svg width="63" height="100" viewBox="0 0 63 100" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.92237 98.4819C3.30975 94.6082 6.23917 85.959 7.6776 80.7845M7.6776 80.7845C5.22424 68.4746 1.32104 68.8557 0.890625 59.817C4.75542 65.9609 5.23834 67.2012 7.81069 68.576C3.16941 60.033 7.0451 46.9793 8.46147 42.0974C9.65094 46.9367 11.6896 49.3283 11.6896 49.3283C11.2056 29.5562 20.6696 20.6953 20.6696 20.6953C20.2548 25.5692 20.642 27.8937 20.642 27.8937C31.8611 -2.5972 59.9797 0.875378 59.9797 0.875378C43.5951 11.6602 60.7857 32.8526 30.851 43.7757C37.4104 44.9818 43.5727 39.9713 43.5727 39.9713C41.1185 49.4426 33.1671 53.9337 33.1671 53.9337C33.3399 56.0077 28.7768 58.5392 28.7768 58.5392C31.7663 58.5687 36.5673 54.6224 36.5673 54.6224C32.5822 66.7952 16.8215 69.2175 14.358 73.1302C18.8503 71.7535 22.8951 71.5692 25.7209 71.2793C21.301 74.9022 13.1106 74.8025 7.6776 80.7845Z"
                                        stroke="#833138" stroke-width="1.51181" stroke-linecap="round" />
                                    <path
                                        d="M7.21094 78.6256C29.242 14.4793 49.9622 5.87092 51.7042 5.94777C51.7042 5.94777 28.6121 20.9152 8.73289 79.733"
                                        stroke="#833138" stroke-width="0.755906" stroke-linecap="round" />
                                    <path d="M51.495 16.084C48.5243 19.0185 40.2734 22.4971 40.2734 22.4971"
                                        stroke="#833138" stroke-width="0.188976" stroke-linecap="round"
                                        stroke-linejoin="bevel" />
                                    <path d="M51.1526 18.2549C42.0328 24.0957 36.5312 25.0072 36.5312 25.0072"
                                        stroke="#833138" stroke-width="0.188976" stroke-linecap="round" />
                                    <path d="M49.8737 25.1631C39.0632 33.0533 31.7734 33.2046 31.7734 33.2046"
                                        stroke="#833138" stroke-width="0.264567" stroke-linecap="round" />
                                    <path d="M49.262 27.251C39.7836 34.3726 33.1562 34.64 33.1562 34.64"
                                        stroke="#833138" stroke-width="0.264567" stroke-linecap="round" />
                                    <path d="M35.7034 7.4248C31.9633 18.3891 32.3325 17.7836 32.2812 21.1652"
                                        stroke="#833138" stroke-width="0.226772" stroke-linecap="round" />
                                    <path d="M34.2853 8.45898C30.3914 18.1936 30.8964 23.4709 30.8964 23.4709"
                                        stroke="#833138" stroke-width="0.226772" stroke-linecap="round" />
                                    <path d="M20.6429 27.8936C19.9256 34.0418 22.1348 34.1785 22.2885 38.6871"
                                        stroke="#833138" stroke-width="0.434646" stroke-linecap="round" />
                                    <path d="M20.6729 20.6953C15.8055 32.172 21.1637 35.0496 20.7538 42.325"
                                        stroke="#833138" stroke-width="0.377953" stroke-linecap="round" />
                                    <path d="M8.46136 42.0977C8.41013 51.6786 13.014 50.9328 13.1164 59.6939"
                                        stroke="#833138" stroke-width="0.377953" stroke-linecap="round" />
                                    <path d="M11.6953 49.3281C12.1052 51.8386 14.6593 53.4428 14.5569 55.441"
                                        stroke="#833138" stroke-width="0.491339" stroke-linecap="round" />
                                    <path d="M37.3659 43.2334C26.709 48.1007 27.3631 45.1429 22.0859 49.8566"
                                        stroke="#833138" stroke-width="0.340158" stroke-linecap="round" />
                                    <path d="M33.1741 53.9341C33.584 51.8334 27.6743 57.747 19.0156 58.823"
                                        stroke="#833138" stroke-width="0.434646" stroke-linecap="round" />
                                    <path d="M28.7779 58.5391C19.5556 60.1273 19.2146 61.4868 16.6016 63.1263"
                                        stroke="#833138" stroke-width="0.491339" stroke-linecap="round" />
                                </svg></a>


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
    { id: '1', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 3 },
    { id: '2', link: '/profile', src: Logo, meaning_soc: 2, meaning_fig: 3 },
    { id: '3', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 1 },
    { id: '4', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '5', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '6', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '7', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '8', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '9', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '10', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
    { id: '11', link: '/profile', src: Logo, meaning_soc: 3, meaning_fig: 2 },
])

const cardsItems = [
    { id: '1', name: 'Игрок' },
    { id: '2', name: 'Мастер' }
]

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
    scrollbar-width: none; 
    color: var(--base-color);
}

.paper {
    width: 79vw;
    height: 99.074vw;
    min-height: 100vh;
    background-image: url('@/assets/Bg-paper-profile.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cards {
    margin-top: 8.073vw;
    width: 67.75vw;
    height: 82.976vw;
    background: url('@/assets/Bg-form-profile.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.510vw;
}

.card {
    display: flex;
    width: 67.708vw;
    flex-shrink: 0;
    min-height: 36.510vw;
}

.card-column:first-child {
    position: relative;
    width: 12.604vw;
    height: 34.531vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2.344vw;
    margin-top: 1.979vw;
}

.card-column img {
    width: 10.417vw;
    height: 10.417vw;
}

.reviews {
    margin-top: 2.5vw;
    gap: 0.365vw;
    height: 16.719vw;
    width: 12.604vw;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none; 
    display: flex;
    align-items: center;
    flex-direction: column;
}

.review {
    width: 11.875vw;
    height: 3.906vw !important;
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
    width: 3.073vw;
    height: 3.073vw;
    margin-left: 0.417vw;
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
    margin-left: 0.104vw;
    gap: 0.677vw;
}

.review-column:nth-child(2) span {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 0.8125rem;
    color: var(--base-color);
}

.review-column:last-child {
    margin-left: 0.573vw;
    gap: 0.417vw;
}

.review-column:last-child img {
    width: 1.146vw;
    height: 1.198vw;
}

.review-column:last-child div {
    gap: 0.208vw;
    display: flex;
}

.create-review {
    margin-top: 0.365vw;
    width: 11.875vw;
    height: 3.906vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--detail-color);
    transition: color 0.3s ease;
}

.create-review:hover {
    color: var(--active-color);
}

.create-review::before {
    content: '';
    position: absolute;
    width: 11.875vw;
    height: 3.906vw;
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
    width: 11.875vw;
    height: 3.906vw;
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

.rating-group {
    display: flex;
    gap: 0.208vw;
}

.rating-star {
    display: flex;
    gap: 0.208vw;
}

.rating-star img {
    width: 1.146vw;
    height: 1.198vw;
    cursor: pointer;
    transition: transform 0.1s;
}

.rating-star img:hover {
    transform: scale(1.1);
}

.form-actions {
    position: absolute;
    bottom: -1.823vw;
    left: 0;
    right: 0;
    display: flex;
    gap: 0.521vw;
    justify-content: center;
    z-index: 10;
}

.save-btn,
.cancel-btn {
    padding: 0.208vw 0.625vw;
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 0.75rem;
    border: none;
    border-radius: 0.208vw;
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

.card-column:last-child {
    margin-left: 4.740vw;
}

.title {
    display: flex;
    margin-left: 12.083vw;
    width: 34.896vw;
    justify-content: space-between;
}

h1 {
    font-family: 'Caveat';
    font-weight: bold;
    font-size: 2.375rem;
}

.title a {
    margin-top: 1.146vw;
}

.title svg {
    color: var(--detail-color);
    transition: color 0.3s ease;
}

.title svg:hover {
    color: var(--active-color);
}

.info {
    margin-top: 3.646vw;
    display: flex;
    gap: 1.198vw;
}

.info-column {
    display: flex;
    flex-direction: column;
    gap: 1.302vw;
}

.info-column div {
    display: flex;
    justify-content: space-between;
    font-family: 'VestiSans';
    font-size: 1.75rem;
}

.info-column div span {
    font-family: 'VestiSans';
    font-weight: bold;
    font-size: 1.75rem;
}

.info-column:first-child div {
    width: 23.333vw;
}

.info-column:last-child div {
    width: 18.802vw;
}
</style>