interface PlayModeGroup {
    name: string,
    icon: string,
    index: number
}
const playModeGroup: Array<PlayModeGroup> = [
    {
        name: '顺序播放',
        icon: 'icon-order-play',
        index: 0
    }, {
        name: '列表循环',
        icon: 'icon-loop-playback',
        index: 1
    }, {
        name: '单曲循环',
        icon: 'icon-single-cycle',
        index: 2
    }, {
        name: '随机播放',
        icon: 'icon-random',
        index: 3
    }, 
]

export {
    playModeGroup
}