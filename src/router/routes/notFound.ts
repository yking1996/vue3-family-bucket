const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/view/notFound/404.vue')
    }
]

export default routes
