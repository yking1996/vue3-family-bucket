const routes = [
    {
        path: '/discoverMusic',
        name: 'DiscoverMusic',
        component: () => import('@/view/main/discoverMusic/DiscoverMusic.vue'),
        children: [

        ]
    }, {
        path: '/radioSet',
        name: 'RadioSet',
        component: () => import('@/view/main/radioSet/RadioSet.vue')
    }, {
        path: '/recentPlay',
        name: 'RecentPlay',
        component: () => import('@/view/main/recentPlay/RecentPlay.vue')
    }, {
        path: '/mycollections',
        name: 'Mycollections',
        component: () => import('@/view/main/mycollections/Mycollections.vue')
    }, {
        path: '/myFavorite',
        name: 'MyFavorite',
        component: () => import('@/view/main/myFavorite/MyFavorite.vue')
    }, 
]

export default routes