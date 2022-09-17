const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/home/Home.vue'),
    },
]

export default routes