<template>
    <div class="search-preview-container">
        <div class="search-about">
            <span>搜"</span>
            <span class="search-word">{{ searchWord }}</span>
            <span>"相关的结果</span>
            <i class="iconfont icon-arrow-right"></i>
        </div>
        <div class="suggest-container">
            <div class="order-unit"
                v-for="item in suggestDetail.order"
                :key="item">
                <div>
                    <i class="iconfont"
                        :class="orderMap[item].icon"></i>
                    <span>{{ orderMap[item].name || '' }}</span>
                </div>
                <div v-for="row in suggestDetail[item]"
                    @click="onClickRow(row.id, item)">
                    <span v-html="checkRow(item, row)"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import API from "@/api"
import {
    GetSearchSuggestRes,
    GetSearchSuggestDetail,
    orderMap,
    AlbumEntity,
    ArtistEntity,
    SongEntity,
    PlaylistEntity,
    SuggestOrder,
    SuggestRow
} from "@/types/layout/search"
import { usePlayerStore } from "@/store/player"
const props = defineProps<{
    searchWord: string
}>()
const suggestDetail = ref<GetSearchSuggestDetail>({
    albums: [],
    artists: [],
    songs: [],
    playlists: [],
    order: []
})
const getSearchSuggestData = async () => {
    const params = {
        keywords: props.searchWord
    }
    const res: GetSearchSuggestRes = await API.search.getSearchSuggest(params)
    if (res.code === 200) {
        suggestDetail.value = res.result
    }
}
let timeoutId = 0;
const debounceSearch = () => {
    clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
        getSearchSuggestData()
    }, 500);
}

watch(() => props.searchWord, newVal => {
    debounceSearch()
})
const checkHighligh = (str: string) => {
    const key = props.searchWord
    const reg = new RegExp(key, "g")
    if (str.match(reg)) {
        return str.replace(key, `<font class="highlightWords">${key}</font>`)
    }
    return str
}
const checkRow = (order: SuggestOrder, rowData: SuggestRow) => {
    let str = ''
    let data = {} as SuggestRow
    let showName = rowData.name || ''
    switch (order) {
        case "songs":
            data = rowData as SongEntity
            let alias = data.alias.length ? `(${data.alias[0]})` : ''
            str = `${showName} ${alias ? alias : ''}- ${data.artists.map((singer) => singer.name).join(' ')}`
            return checkHighligh(str)
        case "artists":
            data = rowData as ArtistEntity
            str = showName
            return checkHighligh(str)
        case "albums":
            data = rowData as AlbumEntity
            str = `${showName} - ${data.artist.name || ''}`
            return checkHighligh(str)
        case "playlists":
            data = rowData as PlaylistEntity
            str = showName
            return checkHighligh(str)
        default:
            return ''
    }
}
const PlayerStore = usePlayerStore()
const onClickRow = (id: number, order: SuggestOrder) => {
    if (order === 'songs') {
        PlayerStore.goPlaySingle(id)
    }
}

</script>

<style lang="scss" scoped>
.search-preview-container {
    width: 100%;
}

.search-about {
    display: flex;
    align-items: center;
    line-height: 1;
    font-size: 12px;
    height: 30px;
    width: 100%;
    padding: 0 10px;
    cursor: pointer;

    .search-word {
        display: inline-block;
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: $theme-primary;
        // color: #507DAF;
    }
}

.suggest-container {
    .order-unit {
        width: 100%;

        .iconfont {
            color: #303031;
            line-height: 1;
        }

        >div {
            span {
                line-height: 1;
            }
        }

        >div:first-child {
            display: flex;
            align-items: center;
            background-color: #F5F5F7;
            padding: 0 10px;
            height: 26px;
            font-size: 13px;
        }

        >div:nth-child(n + 2) {
            display: flex;
            align-items: center;
            height: 28px;
            padding: 0 30px;
            font-size: 12px;
            width: 100%;

            span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        >div:nth-child(n + 2):hover {
            background-color: #F2F2F2;
            cursor: pointer;
        }
    }
}

.icon-musical-notation {
    font-size: 15px;
    margin-right: 5px;
}

.icon-guy {
    font-size: 14px;
    margin-right: 6px;
}

.icon-album {
    font-size: 17px;
    margin-right: 3px;
}

.icon-song-list {
    font-size: 17px;
    margin-right: 3px;
}
</style>