import {
    GetSongUrlParams,
    GetSongUrlOldParams,
    GetSongDetailParams
} from "@/types/api/song"
export default class SongApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host;
        this.request = request
    }
    //获取音乐Url旧版
    getSongUrlOld(params: GetSongUrlOldParams) {
        return this.request.get(
            this.host + '/song/url',
            { params }
        )
    }
    //获取音乐Url新版
    getSongUrl(params: GetSongUrlParams) {
        return this.request.get(
            this.host + '/song/url/v1',
            { params }
        )
    }
    //获取音乐详情
    getSongDetail(params: GetSongDetailParams) {
        return this.request.get(
            this.host + '/song/detail',
            { params }
        )
    }
}