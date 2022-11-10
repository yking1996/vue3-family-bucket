<template>
    <div class="charts-unit">
        <el-skeleton :loading="skeletonLoading" animated>
            <template #template>
                <div class="flex">
                    <div class="cover-container">
                        <el-skeleton-item variant="image" />
                    </div>
                    <div class="list-container">
                        <el-skeleton-item v-for="index of 5" :key="index" variant="p" />
                    </div>
                </div>
            </template>
            <template #default>
                <div class="cover-container">
                    <span>{{ updateTime }}</span>
                    <img :src="chartsItem.coverImgUrl" />
                </div>
                <div class="list-container">
                    <div
                        v-for="(item, index) in topFiveList"
                        :key="item.id"
                        @dblclick="goPlay(item.id)"
                    >
                        <span>{{ index + 1 }}</span>
                        <span>{{ item.name }}</span>
                        <span>{{ item.ar[0].name }}</span>
                    </div>
                    <div>
                        <span>查看全部</span>
                        <i class="iconfont icon-arrow-right"></i>
                    </div>
                </div>
            </template>
        </el-skeleton>
    </div>
</template>

<script setup lang="ts">
import {
    PlaylistDetail,
    Tracks,
    PlaylistDetailRes,
    SimpleDetailToInit
} from '@/types/layout/playlist'
import dayjs from 'dayjs'
import API from '@/api'
import { usePlayerStore } from '@/store/player'
const props = defineProps<{
    playlistId: number
}>()
const chartsItem = ref<PlaylistDetail | SimpleDetailToInit>({
    tracks: [],
    updateTime: 0,
    coverImgUrl: ''
})
const topFiveList = computed((): Array<Tracks> => {
    return chartsItem.value.tracks.splice(0, 5)
})
const updateTime = computed((): string => {
    const time = chartsItem.value.updateTime
    const month = dayjs(time).month()
    const day = dayjs(time).date()
    return `${month + 1}月${day}日更新`
})
const skeletonLoading = ref(true)
const getPlaylistDetailData = async () => {
    try {
        const params = {
            id: props.playlistId
        }
        skeletonLoading.value = true
        const res: PlaylistDetailRes = await API.playlist.getPlaylistDetail(params)
        if (res.code === 200) {
            chartsItem.value = res.playlist
            skeletonLoading.value = false
        }
    } catch (error) {
        console.log(error)
    }
}
const PlayerStore = usePlayerStore()
const goPlay = (id: number) => {
    PlayerStore.goPlaySong(id)
}

watch(
    () => props.playlistId,
    () => {
        setTimeout(() => {
            getPlaylistDetailData()
        }, 80)
    },
    {
        immediate: true
    }
)
</script>

<style lang="scss" scoped>
.charts-unit {
    display: flex;
    padding: 10px 0 15px;
}

.cover-container {
    width: 172px;
    height: 172px;
    position: relative;

    span {
        position: absolute;
        top: 68%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        font-size: 12px;
        color: #fff;
    }

    img {
        width: 172px;
        height: 172px;
        border-radius: 6px;
    }

    .el-skeleton__image {
        width: 172px;
        height: 172px;
        border-radius: 6px;
    }
}

.list-container {
    padding-left: 30px;
    width: calc(100% - 172px);

    > div {
        width: 100%;
        display: flex;
        height: 34px;
        line-height: 34px;
        font-size: 12px;
        padding: 0 10px;
    }

    > div:not(:last-child) {
        border-radius: 4px;

        span:first-child {
            color: #9f9f9f;
            padding-right: 6px;
            font-size: 14px;
        }

        span:nth-child(2) {
            color: #373737;
        }

        span:last-child {
            margin-left: auto;
            color: #9f9f9f;
        }
    }

    > div:nth-child(-n + 3) {
        span:first-child {
            color: $theme-primary;
        }
    }

    > div:nth-child(2n + 1):not(:last-child) {
        background-color: #f9f9f9;
    }

    > div:not(:last-child):hover {
        background-color: #f4f4f4;
    }

    > div:last-child {
        color: #676767;
        cursor: pointer;
    }

    .icon-arrow-right {
        font-size: 14px;
    }

    .el-skeleton__item {
        margin-bottom: 2px;
    }
}
</style>
