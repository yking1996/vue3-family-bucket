export default class GeneralApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host;
        this.request = request
    }
    examplePost(data?: any, params?: any) {
        let url = "";
        return this.request.post(
            url,
            {
                data,
                config: {
                    params,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    responseType: "json"
                }
            }
        )
    }
    exampleGet(params?: any) {
        let url = "";
        return this.request.get(url, { params })
    }
    ///POST-登录
    login(data: any) {
        return this.request.post(
            this.host + '/org/login/valid',
            { data }
        )
    }
    getNormalApiTest(params: any) {
        return this.request.get(
            this.host + '/news/news/publishList',
            { params }
        )
    }
    getArraybufferApiTest(params: any) {
        return this.request.get(
            this.host + '/open/getVerify',
            { 
                params,
                responseType: 'arraybuffer'
            }
        )
    }
}