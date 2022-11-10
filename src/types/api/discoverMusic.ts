interface GetBannersParams {
    type: number //0: pc 1: android 2: iphone 3: ipad
}
interface GetPersonalizedParams {
    limit: number //default: 30
}

export type { GetBannersParams, GetPersonalizedParams }
