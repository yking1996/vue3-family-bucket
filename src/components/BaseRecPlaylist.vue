<template>
    <div class="base-rec-song-list">
        <el-skeleton :loading="skeletonLoading"
            animated>
            <template #template>
                <div class="cover-container">
                    <el-skeleton-item variant="image" />
                </div>
            </template>
            <template #default>
                <div class="cover-container"
                    @mouseenter="mouseEnter"
                    @mouseleave="mouseLeave"
                    @click="emit('on-detail')">
                    <BasePlayCount :playCount="playListItem.playCount" />
                    <img :src="playListItem.picUrl">
                    <i class="iconfont icon-play"
                        v-show="ifHover"
                        @click.stop="emit('on-play', playListItem.id)"></i>
                </div>
                <div @click="emit('on-detail', playListItem.id)">{{ playListItem.name }}</div>
            </template>
        </el-skeleton>
    </div>
</template>

<script setup lang="ts">
import { PersonalizedResListItem } from "@/types/layout/discoverMusic"

const props = defineProps<{
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
const skeletonLoading = ref(true)
watch(() => props.playListItem.picUrl, newVal => {
    skeletonLoading.value = false
}, {
    immediate: true
})
</script>

<style lang="scss" scoped>
.base-rec-song-list {
    width: 196px;
    height: 245px;
    margin-bottom: 20px;
    margin-right: 18px;
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

    .el-skeleton__image {
        width: 172px;
        height: 172px;
        border-radius: 6px;
    }

    >img {
        width: 196px;
        height: 196px;
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