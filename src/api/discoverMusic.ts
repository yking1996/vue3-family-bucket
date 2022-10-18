import { 
    GetBannersParams,
    GetPersonalizedParams,
    getTopPlayListParams
} from "@/types/api/discoverMusic"
export default class DiscoverMusicApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host;
        this.request = request
    }
    //获取发现音乐-个性推荐-banner列表
    getBanners(params: GetBannersParams) {
        return this.request.get(
            this.host + '/banner',
            { params }
        )
    }
    //获取发现音乐-个性推荐-推荐歌单
    getPersonalized(params: GetPersonalizedParams) {
        return this.request.get(
            this.host + '/personalized',
            { params }
        )
    }
    //获取发现音乐-歌单 ( 网友精选碟 )
    getTopPlayList(params: getTopPlayListParams) {
        return this.request.get(
            this.host + '/top/playlist',
            { params }
        )
    }
}