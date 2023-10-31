import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import MijnGamesLayout from './views/MijnGames.vue'


const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/home',
        component: HomeComponent
    },
    {
        path: '/mijn-games',
        component: MijnGamesLayout,

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
