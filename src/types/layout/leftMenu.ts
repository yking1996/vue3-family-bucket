const menuGroup = [
    {
        name: '发现音乐',
        url: '/discoverMusic'
    }, {
        name: '私人FM',
        url: '/radioSet'
    }
]
const myMusicGroup = [
    {
        name: '我的音乐',
        children: [
            {
                name: '最近播放',
                url: '/recentPlay',
                icon: 'icon-recent-play'
            }, {
                name: '我的收藏',
                url: '/mycollections',
                icon: 'icon-my-collections'
            }
        ]
    }, {
        name: '收藏的歌单',
        children: [
            {
                name: '我喜欢的音乐',
                url: '/myFavorite',
                icon: 'icon-my-favorite'
            }
        ]
    }

]

export {
    menuGroup,
    myMusicGroup
}