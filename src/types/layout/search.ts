/**
 * 热搜start
 */
export interface SearchHotDetail {
    searchWord: string
    score: number
    content: string
    source: number
    iconType: number
    iconUrl: string
    url: string
    alg: string
}

export interface GetSearchHotDetailRes {
    code: number
    data: SearchHotDetail[]
    message: string
}

export interface HotInfo {
    first: string
    second: number
    third?: any
    iconType: number
}

export interface GetSearchHot {
    hots: HotInfo[]
}

export interface GetSearchHotRes {
    code: number
    result: GetSearchHot
}
/**
 * 热搜end
 */

/**
 * 搜索建议start
 */
export interface ArtistEntity {
    id: number
    name: string
    picUrl: string
    alias: any[]
    albumSize: number
    picId: number
    fansGroup?: any
    img1v1Url: string
    accountId: number
    img1v1: number
    trans?: any
}

export interface AlbumEntity {
    id: number
    name: string
    artist: ArtistEntity
    publishTime: number
    size: number
    copyrightId: number
    status: number
    picId: number
    mark: number
}

export interface SongEntity {
    id: number
    name: string
    artists: ArtistEntity[]
    album: AlbumEntity
    duration: number
    copyrightId: number
    status: number
    alias: any[]
    rtype: number
    ftype: number
    mvid: number
    fee: number
    rUrl?: any
    mark: number
}

export interface PlaylistEntity {
    id: number
    name: string
    coverImgUrl: string
    creator?: any
    subscribed: boolean
    trackCount: number
    userId: number
    playCount: number
    bookCount: number
    specialType: number
    officialTags?: any
    action?: any
    actionType?: any
    recommendText?: any
    score?: any
    description: string
    highQuality: boolean
}

export type SuggestOrder = 'songs' | 'artists' | 'albums' | 'playlists' //目前已知
export type SuggestRow = AlbumEntity | ArtistEntity | SongEntity | PlaylistEntity
export interface GetSearchSuggestDetail {
    albums: AlbumEntity[]
    artists: ArtistEntity[]
    songs: SongEntity[]
    playlists: PlaylistEntity[]
    order: SuggestOrder[]
}

export interface GetSearchSuggestRes {
    result: GetSearchSuggestDetail
    code: number
}

export const orderMap = {
    songs: {
        name: '单曲',
        icon: 'icon-musical-notation'
    },
    artists: {
        name: '歌手',
        icon: 'icon-guy'
    },
    albums: {
        name: '专辑',
        icon: 'icon-album'
    },
    playlists: {
        name: '歌单',
        icon: 'icon-song-list'
    }
}

/**
 * 搜索建议end
 */
