import { GetBannersParams, GetPersonalizedParams } from '@/types/api/discoverMusic'
export default class DiscoverMusicApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host
        this.request = request
    }
    //获取发现音乐-个性推荐-banner列表
    getBanners(params: GetBannersParams) {
        return this.request.get(this.host + '/banner', { params })
    }
    //获取发现音乐-个性推荐-推荐歌单
    getPersonalized(params: GetPersonalizedParams) {
        return this.request.get(this.host + '/personalized', { params })
    }
    //所有榜单
    getTopList() {
        return this.request.get(this.host + '/toplist')
    }
}
