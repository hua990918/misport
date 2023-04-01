const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
    },
    {
        path: '/api',
        name: 'api',
        component: () => import('@/views/index/api.vue'),
    },
]

export default routes
