export default class GeneralApi {
    protected host
    protected request
    constructor(config: any, request: any) {
        this.host = config.host
        this.request = request
    }
    examplePost(data?: any, params?: any) {
        const url = ''
        return this.request.post(url, {
            data,
            config: {
                params,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                responseType: 'json'
            }
        })
    }
    exampleGet(params?: any) {
        const url = ''
        return this.request.get(url, { params })
    }
    getArraybufferApiTest(params: any) {
        return this.request.get(this.host + '', {
            params,
            responseType: 'arraybuffer'
        })
    }
}
