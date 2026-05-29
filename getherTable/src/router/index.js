import { createRouter, createWebHistory } from 'vue-router';
import CreateGames from '../components/CreateGames.vue';
import EditGame from '../components/EditGame.vue';
import EditProfile from '../components/EditProfile.vue';
import Game from '../components/Game.vue';
import Games from '../components/Games.vue';
import Main from '../components/Main.vue';
import Profile from '../components/Profile.vue';
import Responses from '../components/Responses.vue';
import Setting from '../components/Setting.vue';

const routes = [
  { path: '/createGame', component: CreateGames },
  { path: '/editGame', component: EditGame },
  { path: '/editProfile', component: EditProfile },
  { path: '/game', component: Game },
  { path: '/games', component: Games },
  { path: '/', component: Main },
  { path: '/profile', component: Profile },
  { path: '/responses', component: Responses },
  { path: '/setting', component: Setting }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
