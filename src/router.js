// router.js:

import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import MijnGamesLayout from './views/MijnGames.vue';
import AllGames from './views/AllGames.vue';
// import axios from 'axios';

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/home',
    component: HomeComponent,
  },
  {
    path: '/mijn-games',
    component: MijnGamesLayout,
    meta: { requiresAuth: true }, // Voeg een meta veld toe dat aangeeft dat deze route beveiligd is.
  },
  {
    path: '/all-games',
    commponent: AllGames,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     try {
//       const response = await axios.get('http://localhost:5124/auth/status',
//       {withCredentials: true});
//       if (response.data.isLoggedIn) {
//         next();
//       } else {
//         next('/'); // Redirect naar home als niet ingelogd.
//       }
//     } catch (error) {
//       console.error(error);
//       next('/'); // Redirect naar home bij een fout.
//     }
//   } else {
//     next(); // Ga verder als de route geen authenticatie vereist.
//   }
// });

export default router;
