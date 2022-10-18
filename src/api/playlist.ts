import {
    getTopPlayListParams
} from "@/types/api/playlist"
export default class PlaylistApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host;
        this.request = request
    }
    //获取发现音乐-歌单 ( 网友精选碟 )
    getTopPlayList(params: getTopPlayListParams) {
        return this.request.get(
            this.host + '/top/playlist',
            { params }
        )
    }
}