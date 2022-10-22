<template>
    <div class="middle-area">
        <div class="control-container">
            <i :class="playModeGroup[currentPlayMode]['icon']"
                class="iconfont"
                @click="changePlayMode"></i>
            <i class="iconfont icon-previous"></i>
            <i :class="ifPlaying ? 'icon-pause' :'icon-play'"
                class="iconfont"
                @click="changePlayingStatus"></i>
            <i class="iconfont icon-next"></i>
            <i class="iconfont icon-lyric"></i>
        </div>
        <div class="progress-container">
            <span>{{formatMusicTime(currentTime)}}</span>
            <el-slider v-model="sliderProgress"
                :show-tooltip="false" />
            <span>{{formatMusicTime(currentSong.dt)}}</span>
        </div>
        <audio :src="currentSong.url"
            :autoplay="false"
            controls
            ref="audioRef"
            @timeupdate="onTimeupdate"
            style="margin-top: 20px"></audio>
    </div>
</template>

<script setup lang="ts">
import { playModeGroup } from "@/types/layout/player"
import { usePlayerStore } from "@/store/player"
import { storeToRefs } from 'pinia'
import { formatMusicTime } from "@/utils"
import NP from "number-precision"
const PlayerStore = usePlayerStore()
const currentPlayMode = ref(0)
const changePlayingStatus = () => {
    PlayerStore.setIfPlaying(!PlayerStore.ifPlaying)
}
const changePlayMode = () => {
    let ifFinal = currentPlayMode.value === playModeGroup.length - 1;
    currentPlayMode.value = ifFinal ? 0 : currentPlayMode.value + 1

}
const sliderProgress = ref(0)
const audioRef = ref<HTMLAudioElement>()
const { currentTime, ifPlaying, currentSong } = storeToRefs(PlayerStore)
const onTimeupdate = () => {
    PlayerStore.setCurrentTime(NP.times(audioRef.value!.currentTime, 1000))
}
watch(ifPlaying, async (newValue) => {
    //如果不等待dom更新,audio上的src: currentSong.url不会同步刷新
    await nextTick()
    console.log(currentSong.value.url);
    
    if (newValue) {
        audioRef.value!.play()
    } else {
        audioRef.value!.pause()
    }
})
</script>

<style lang="scss" scoped>
.middle-area {
    width: 440px;
    height: 100%;
}

.control-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    i+i {
        margin-left: 33px;
        line-height: 1;
    }

    i {
        cursor: pointer;
    }

    .icon-previous,
    .icon-next {
        font-size: 25px;
        color: #333333;
    }

    .icon-pause,
    .icon-play {
        font-size: 36px;
        color: #F1F1F1;
        position: relative;
        opacity: .9;
    }

    .icon-pause::after,
    .icon-play::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        background-color: #313131;
        z-index: -1;
    }

    .icon-lyric {
        font-size: 18px;
    }
}

.progress-container {
    display: flex;
    align-items: center;

    >span {
        color: #B3B3B3;
        font-size: 12px;
    }

    .el-slider {
        width: 360px;
        height: 15px;
        margin: 0 7px;
        --el-slider-button-size: 9px;
        --el-slider-height: 3px;
        --el-slider-button-wrapper-offset: -17px;
    }

    :deep(.el-slider__runway),
    :deep(.el-slider__button-wrapper.hover, .el-slider__button-wrapper:hover),
    :deep(.el-slider__button.hover, .el-slider__button:hover) {
        cursor: default;
    }

    :deep(.el-slider__button) {
        opacity: 0;
        background-color: var(--el-slider-main-bg-color);
        transition: .05s
    }

    :deep(.el-slider:hover .el-slider__button) {
        opacity: 1;
    }

    :deep(.el-slider:hover) {
        --el-slider-height: 5px;
        --el-slider-button-wrapper-offset: -16px;
    }
}
</style>