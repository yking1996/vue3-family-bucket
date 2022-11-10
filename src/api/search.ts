import { GoSearchParams, GetSearchSuggestParams } from '@/types/api/search'
export default class SearchApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host
        this.request = request
    }
    //热搜列表(简略)
    getSearchHot() {
        return this.request.get(this.host + '/search/hot')
    }
    //热搜列表(详细)
    getSearchHotDetail() {
        return this.request.get(this.host + '/search/hot/detail')
    }
    //搜索建议
    getSearchSuggest(params: GetSearchSuggestParams) {
        return this.request.get(this.host + '/search/suggest', { params })
    }
    //搜索
    goSearch(params: GoSearchParams) {
        return this.request.get(
            this.host + '/cloudsearch', //或 /cloudsearch(更全)
            { params }
        )
    }
}
