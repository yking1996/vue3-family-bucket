<template>
    <div class="hot-search-container">
        <div>热搜榜</div>
        <div class="hot-search-row"
            v-for="(song, index) in hotSearchList"
            @click="emitSearchWord(song.searchWord)">
            <div>{{ index + 1 }}</div>
            <div class="search-info">
                <div>
                    <span>{{ song.searchWord }}</span>
                    <span>{{ song.score }}</span>
                </div>
                <span>{{ song.content }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import API from "@/api"
import { SearchHotDetail, GetSearchHotDetailRes } from "@/types/layout/search"
const props = defineProps<{
    popChange: boolean
}>()

const hotSearchList = ref<SearchHotDetail[]>([])
const getSearchHotDetailData = async () => {
    let res: GetSearchHotDetailRes = await API.search.getSearchHotDetail()
    if (res.code === 200) {
        hotSearchList.value = res.data
    }
}
getSearchHotDetailData()
const emit = defineEmits([
    'on-row-click'
])
const emitSearchWord = (searchWord: string) => {
    emit('on-row-click', searchWord)
}

//热搜接口存在可能获取不到数据的情况
watch(() => props.popChange, newVal => {
    if (!hotSearchList.value.length ) {
        getSearchHotDetailData()
    }
})
</script>

<style lang="scss" scoped>
.hot-search-container {
    width: calc(100% - 8px);
    height: 450px;

    >div {
        padding: 0 20px;
        width: 100%;
    }

    >div:first-child {
        font-size: 14px;
        height: 45px;
        display: flex;
        align-items: center;
        color: #676767;
    }

    .hot-search-row {
        height: 54px;
        display: flex;
        align-items: center;
        width: 100%;

        >div:first-child {
            width: 34px;
            font-size: 16px;
            color: #C4C4DB;
        }

        .search-info {
            width: calc(100% - 34px);
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            >div {
                font-size: 12px;
                padding-bottom: 6px;
                width: 100%;
                line-height: 1.2;
                span {
                    white-space: nowrap;
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                span:first-child {
                    color: #343434;
                    max-width: 70%;
                }

                span:last-child {
                    padding-left: 10px;
                    color: #C4C4C4;
                }
            }

            >span {
                color: #979797;
                white-space: nowrap;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 98%;
            }
        }
    }

    .hot-search-row:nth-child(-n + 4) {
        >div:first-child {
            color: #FF3A3A;
        }

        .search-info {
            >div {
                span:first-child {
                    font-weight: bold;
                }
            }
        }
    }

    .hot-search-row:hover {
        background-color: #F2F2F2;
        cursor: pointer;
    }
}
</style>