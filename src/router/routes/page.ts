const routes = [
    {
        path: '/discoverMusic',
        name: 'DiscoverMusic',
        component: () => import('@/view/main/discoverMusic/DiscoverMusic.vue'),
        redirect: '/personalRec',
        children: [
            {
                path: '/personalRec',
                name: 'PersonalRec',
                component: () => import('@/view/main/discoverMusic/personalRec/PersonalRec.vue'),
            }, {
                path: '/songCharts',
                name: 'SongCharts',
                component: () => import('@/view/main/discoverMusic/songCharts/SongCharts.vue'),
            }
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
        component: () => import('@/view/main/myCollections/MyCollections.vue')
    }, {
        path: '/myFavorite',
        name: 'MyFavorite',
        component: () => import('@/view/main/myFavorite/MyFavorite.vue')
    },
]

export default routes