import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import MijnGamesLayout from './views/MijnGames.vue';
import store from './services/store.js'; // Import the Vuex store

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
];

const router = createRouter({
  history: createWebHistory(),
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

      // Dispatch an action to update the store with the authentication status and steamId
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
