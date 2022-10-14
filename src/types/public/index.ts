enum ThemeColor {
    blue,
    pink,
    red,
    green,
    orange,
    golden
}
const themeList: ThemeItem[] = [
    {
        name: 'blue',
        key: 0,
        label: '天际蓝',
        color: '#409eff'
    }, {
        name: 'pink',
        key: 1,
        label: '元气粉',
        color: '#FF87B4'
    }, {
        name: 'red',
        key: 2,
        label: '酷炫红',
        color: '#EC4141'
    }, {
        name: 'green',
        key: 3,
        label: '清新绿',
        color: '#3BBA7D'
    }, {
        name: 'orange',
        key: 4,
        label: '活力橙',
        color: '#ff761b'
    }, {
        name: 'golden',
        key: 5,
        label: '闪耀金',
        color: '#FAAC62'
    }
]

interface ThemeItem {
    name: string,
    key: number,
    label: string,
    color: string
}
export type {
    ThemeItem
}
export {
    ThemeColor,
    themeList,
}

