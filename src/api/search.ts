import {
    
} from "@/types/api/search"
export default class SearchApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host;
        this.request = request
    }
    //热搜列表(简略)
    getSearchHot() {
        return this.request.get(
            this.host + '/search/hot'
        )
    }
    //热搜列表(详细)
    getSearchHotDetail() {
        return this.request.get(
            this.host + '/search/hot/detail'
        )
    }
}