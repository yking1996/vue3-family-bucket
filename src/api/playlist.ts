import { GetTopPlayListParams, GetPlaylistDetailParams } from '@/types/api/playlist'
export default class PlaylistApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host
        this.request = request
    }
    //获取发现音乐-歌单 ( 网友精选碟 )
    getTopPlayList(params: GetTopPlayListParams) {
        return this.request.get(this.host + '/top/playlist', { params })
    }
    //获取歌单详情
    getPlaylistDetail(params: GetPlaylistDetailParams) {
        return this.request.get(this.host + '/playlist/detail', { params })
    }
}
