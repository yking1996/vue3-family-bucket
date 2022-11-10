interface GetTopPlayListParams {
    order: string //可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
    cat: string //tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
    limit: number //取出歌单数量 , 默认为 50
    offset: number //偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
}

interface GetPlaylistDetailParams {
    id: number // 歌单 id
    s?: number //歌单最近的 s 个收藏者,默认为 8
}
export type { GetTopPlayListParams, GetPlaylistDetailParams }
