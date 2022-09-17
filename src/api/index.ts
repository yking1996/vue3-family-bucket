import request from "@/utils/request"
import GeneralApi from "@/api/general"
export function apiInit(app: any) {
    app.config.globalProperties.$generalApi = new GeneralApi({ host: "/api" }, request);
    console.log(import.meta.env.BASE_URL)
    // app.provide("$request", new request(axios, config))
    // app.provide("$envConfig", config)
}