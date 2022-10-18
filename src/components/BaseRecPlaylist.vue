<template>
    <div class="base-rec-song-list">
        <div class="cover-container"
            @mouseenter="mouseEnter"
            @mouseleave="mouseLeave"
            @click="emit('on-detail')">
            <BasePlayCount :playCount="playListItem.playCount" />
            <img :src="playListItem.picUrl">
            <i class="iconfont icon-play"
                v-show="ifHover"
                @click.stop="emit('on-play')"></i>
        </div>
        <div @click="emit('on-detail')">{{playListItem.name}}</div>
    </div>
</template>

<script setup lang="ts">
import { PersonalizedResListItem } from "@/types/layout/discoverMusic"

defineProps<{
    playListItem: PersonalizedResListItem
}>()
const ifHover = ref(false)
const mouseEnter = () => {
    ifHover.value = true
}
const mouseLeave = () => {
    ifHover.value = false
}

const emit = defineEmits([
    'on-play',
    'on-detail'
])
</script>

<style lang="scss" scoped>
.base-rec-song-list {
    width: 200px;
    height: 245px;
    margin-bottom: 20px;
    margin-right: 16px;
    position: relative;

    >div:last-child {
        margin-top: 8px;
        font-size: 14px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        cursor: pointer;
        color: #373737;
    }
    >div:last-child:hover {
        color: #000;
    }
}

.cover-container {
    position: relative;
    cursor: pointer;

    >img {
        width: 200px;
        height: 200px;
        border-radius: 6px;
    }

    .icon-play {
        position: absolute;
        right: 8px;
        bottom: 10px;
        font-size: 30px;
        line-height: 1;
        color: #fff;
        opacity: .9;
    }

    .icon-play::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 15px;
        background-color: $theme-primary;
        z-index: -1;
    }
}
</style>