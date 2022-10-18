<template>
    <div class="charts-unit">
        <div class="cover-container">
            <span>{{updateTime}}</span>
            <img :src="chartsItem.coverImgUrl">
        </div>
        <div class="list-container">
            <div v-for="(item,index) in topFiveList"
                :key="item.id">
                <span>{{index + 1}}</span>
                <span>{{item.name}}</span>
                <span>{{item.ar[0].name}}</span>
            </div>
            <div>
                <span>查看全部</span>
                <i class="iconfont icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlaylistDetail, Tracks } from "@/types/layout/playlist"
import dayjs from "dayjs"
const props = defineProps<{
    chartsItem: PlaylistDetail
}>()
const topFiveList = computed((): Array<Tracks> => {
    return props.chartsItem.tracks.splice(0, 5)
})
const updateTime = computed(():string => {
    const time = props.chartsItem.updateTime;
    const month = dayjs(time).month()
    const day = dayjs(time).date()
    return `${month + 1}月${day}日更新`
})

</script>

<style lang="scss" scoped>
.charts-unit {
    display: flex;
    padding: 10px 0 25px;
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
}

.list-container {
    padding-left: 30px;
    width: calc(100% - 172px);

    >div {
        width: 100%;
        display: flex;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        padding: 0 10px;
    }



    >div:not(:last-child) {
        border-radius: 4px;

        span:first-child {
            color: #9F9F9F;
            padding-right: 6px;
        }

        span:nth-child(2) {
            color: #373737;
        }

        span:last-child {
            margin-left: auto;
            color: #9F9F9F;
        }
    }

    >div:nth-child(-n + 3) {
        span:first-child {
            color: $theme-primary;
        }
    }

    >div:nth-child(2n + 1):not(:last-child) {
        background-color: #F9F9F9;
    }

    >div:not(:last-child):hover {
        background-color: #F4F4F4;
    }

    >div:last-child {
        color: #676767;
        cursor: pointer;
    }

    .icon-arrow-right {
        font-size: 14px;
    }
}
</style>