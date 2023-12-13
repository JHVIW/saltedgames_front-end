import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import MijnGamesLayout from './views/MijnGames.vue';
import AllGames from './views/AllGames.vue'; // Voeg de import toe voor AllGames.vue
import store from './services/store.js';

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/home',
    component: HomeComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/mijn-games',
    component: MijnGamesLayout,
    meta: { requiresAuth: true },
  },
  {
    path: '/all-games',
    component: AllGames, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    try {
      const response = await fetch('http://localhost:5124/Auth/status', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();

      store.dispatch('updateAuthStatus', {
        isAuthenticated: data.isLoggedIn,
        steamId: data.steamId,
      });

      if (data.isLoggedIn) {
        next();
      } else {
        next('/');
      }
    } catch (error) {
      console.error('Error checking authentication status', error);
      next('/');
    }
  } else {
    next();
  }
});

export default router;
