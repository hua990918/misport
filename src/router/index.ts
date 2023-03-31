import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
